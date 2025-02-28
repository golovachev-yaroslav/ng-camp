import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, map, switchMap, distinctUntilChanged } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { Pagination } from '@js-camp/core/models/pagintation';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { QueryParams } from '@js-camp/core/models/query-params';
import { AnimeHttpParamsMapper } from '@js-camp/core/mappers/anime-http-params.mapper';
import { AnimeParams } from '@js-camp/core/models/anime/anime-params';
import { FilterBarComponent } from '@js-camp/angular/app/features/anime/components/filter-bar/filter-bar.component';

/** Dashboard page component. */
@Component({
	selector: 'camp-dashboard-page',
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
		MatIconModule,
		ReactiveFormsModule,
		FilterBarComponent,
	],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {
	/** Anime list. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Selected types. */
	protected readonly selectedTypes = signal<AnimeType[]>([]);

	/** Search value. */
	protected readonly searchValue = signal<string>('');

	/** Anime type enum. */
	protected readonly animeType = AnimeType;

	/** Anime status enum. */
	protected readonly animeStatus = AnimeStatus;

	/** Anime types list. */
	protected readonly types: AnimeType[] = AnimeType.toArray();

	/** Page size options. */
	protected readonly pageSizeOptions = AnimeHttpParamsMapper.PAGE_SIZES;

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	/** Columns. */
	protected readonly displayedColumns: string[] = [
		'poster',
		'titleEnglish',
		'titleJapanese',
		'airedStart',
		'type',
		'status',
	];

	public constructor() {
		this.animes$ = this.createAnimeStream();
		this.searchValue.set(this.queryParams.search);
	}

	/**
	 * Get anime list.
	 * @param params Query params.
	 */
	private getAnimeList(params: AnimeParams): Observable<Pagination<Anime>> {
		return this.animeService.getAnimeList({
			limit: params.limit,
			offset: params.offset,
			search: params.search,
			typeIn: params.typeIn,
			sort: params.sort,
		});
	}

	private createAnimeStream(): Observable<Pagination<Anime>> {
		this.isLoading.set(true);

		return this.activeRoute.queryParams.pipe(
			distinctUntilChanged(),
			map(query => this.transformQueryParams(query)),
			switchMap(params =>
				this.getAnimeList(params).pipe(
					finalize(() => {
						this.isLoading.set(false);
						this.selectedTypes.set(this.queryParams.typeIn?.split(',') as AnimeType[] ?? []);
					}),
					takeUntilDestroyed(this.destroyRef),
				)),
		);
	}

	/**
	 * Transform query parameters.
	 * @param query Query parameters.
	 */
	private transformQueryParams(query: Params): QueryParams {
		const params = AnimeHttpParamsMapper.fromDto(query);

		this.setQueryParams(params);

		return params;
	}

	/**
	 * Change page parameter.
	 * @param event Page event.
	 */
	protected onPageChange(event: PageEvent): void {
		this.setQueryParams({
			offset: event.pageIndex,
			limit: event.pageSize,
		});
	}

	/**
	 * Change filter.
	 * @param types Anime types list.
	 */
	protected onFilterChange(types: AnimeType[]): void {
		this.setQueryParams({
			typeIn: types.toString(),
			offset: 0,
		});
	}

	/**
	 * Search movie.
	 * @param search Search text.
	 */
	protected onSearch(search?: string): void {
		this.setQueryParams({
			search,
			offset: 0,
		});
	}

	/**
	 * Change table sort.
	 * @param sort Event.
	 */
	protected onSortChange(sort: Sort): void {
		let ordering = '';
		if (sort.direction === 'asc') {
			ordering = sort.active;
		}

		if (sort.direction === 'desc') {
			ordering = `-${sort.active}`;
		}

		this.setQueryParams({
			sort: ordering,
		});
	}

	/** Query params. */
	protected get queryParams(): AnimeParams {
		const { queryParams } = this.activeRoute.snapshot;

		return {
			search: queryParams['search'],
			offset: queryParams['offset'],
			limit: queryParams['limit'],
			sort: queryParams['sort'],
			typeIn: queryParams['typeIn'],
		};
	}

	/**
	 * Sets query params.
	 * @param params Changed params.
	 */
	private setQueryParams(params: Partial<AnimeParams>): void {
		const pathname = this.router.url.split('?')[0];

		this.router.navigate([pathname], { queryParams: { ...this.queryParams, ...params } });
	}
}
