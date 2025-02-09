import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, tap, delay, switchMap } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { Pagination } from '@js-camp/core/models/pagintation';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';

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
			switchMap(params =>
				this.animeService.getAnimeList().pipe(
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
		console.log(event);
	}

	/**
	 * Change table sort.
	 * @param event Event.
	 */
	protected onSortChange(event: Sort): void {
		console.log(event);
	}
}
