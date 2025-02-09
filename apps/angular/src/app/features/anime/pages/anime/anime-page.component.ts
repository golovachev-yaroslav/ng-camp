import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, tap, delay, switchMap, distinctUntilChanged } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { Pagination } from '@js-camp/core/models/pagintation';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { QueryParams } from '@js-camp/core/models/query-params';

/** Anime page component. */
@Component({
	selector: 'camp-anime-page',
	standalone: true,
	imports: [
		CommonModule,
		AsyncPipe,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
	],
	templateUrl: './anime-page.component.html',
	styleUrl: './anime-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimePageComponent {
	/** Anime page. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading$ = new BehaviorSubject(false);

	/** Anime filters. */
	protected readonly filters: readonly AnimeType[] = [
		AnimeType.Tv,
		AnimeType.Ova,
		AnimeType.Movie,
		AnimeType.Special,
		AnimeType.Ona,
		AnimeType.Music,
		AnimeType.Unknown,
	];

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	/** Columns. */
	public readonly displayedColumns: string[] = [
		'image',
		'titleEnglish',
		'titleJapanese',
		'airedStart',
		'type',
		'status',
	];

	public constructor() {
		this.animes$ = this.createAnimeStream();
	}

	private createAnimeStream(): Observable<Pagination<Anime>> {
		return this.activeRoute.queryParams.pipe(
			distinctUntilChanged(),
			switchMap(params =>
				this.animeService.getAnimeList().pipe(
					tap(() => console.log(params)),
					tap(() => this.isLoading$.next(true)),
					delay(1000),
					tap(() => this.isLoading$.next(false)),
					takeUntilDestroyed(this.destroyRef),
				)),
		);
	}

	/**
	 * Change page parameter.
	 * @param event Page event.
	 */
	protected onPageChange(event: PageEvent): void {
		this.setQueryParams({
			pageNumber: event.pageIndex,
			pageSize: event.pageSize,
		});
	}

	/**
	 * Change table sort.
	 * @param sort Event.
	 */
	protected onSortChange(sort: Sort): void {
		this.setQueryParams({
			direction: sort.direction,
			field: sort.active,
		});
	}

	/** Query params. */
	protected get queryParams(): QueryParams {
		const { queryParams } = this.activeRoute.snapshot;

		return {
			search: queryParams['search'],
			type: queryParams['type'],
			pageNumber: queryParams['pageNumber'],
			pageSize: queryParams['pageSize'],
			field: queryParams['field'],
			direction: queryParams['direction'],
		};
	}

	/**
	 * Sets query params.
	 * @param params Changed params.
	 */
	private setQueryParams(params: Partial<QueryParams>): void {
		const pathname = this.router.url.split('?')[0];

		this.router.navigate([pathname], { queryParams: { ...this.queryParams, ...params } });
	}
}
