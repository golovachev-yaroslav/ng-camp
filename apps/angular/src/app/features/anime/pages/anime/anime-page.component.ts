import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
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
		MatInput,
		MatIconModule,
		ReactiveFormsModule,
		MatIconButton,
	],
	templateUrl: './anime-page.component.html',
	styleUrl: './anime-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimePageComponent {
	/** Anime list. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Anime type enum. */
	protected readonly animeType = AnimeType;

	/** Anime status enum. */
	protected readonly animeStatus = AnimeStatus;

	/** Anime filters. */
	protected readonly filters: readonly AnimeType[] = AnimeType.toArray();

	/** Page size options. */
	protected readonly pageSizeOptions = AnimeHttpParamsMapper.PAGE_SIZES;

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	/** Columns. */
	protected readonly displayedColumns: string[] = [
		'poster',
		'titleEnglish',
		'titleJapanese',
		'airedStart',
		'type',
		'status',
	];

	/** Is hidden clear button. */
	protected readonly isHiddenClearButton = signal(
		this.queryParams.search === '' || this.queryParams.search === undefined,
	);

	/** Select type control. */
	protected readonly filterTypeControl = this.formBuilder.control<string[] | undefined>(
		this.queryParams.typeIn?.split(','),
	);

	/** Search form control. */
	protected readonly searchForm = this.formBuilder.group({
		search: this.queryParams.search,
	});

	public constructor() {
		this.animes$ = this.createAnimeStream();
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
					finalize(() => this.isLoading.set(false)),
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

	/** Change filter. */
	protected onFilterChange(): void {
		this.setQueryParams({
			typeIn: this.filterTypeControl.value ? this.filterTypeControl.value.toString() : '',
			offset: 0,
		});
	}

	/** Change filter. */
	protected onEnterSearchValue(): void {
		this.isHiddenClearButton.set(this.searchForm.value.search === '');
	}

	/** Clear search. */
	protected onClearSearch(): void {
		this.searchForm.setValue({
			search: '',
		});
		this.isHiddenClearButton.set(true);
		this.setQueryParams({
			search: '',
			offset: 0,
		});
	}

	/**
	 * Search movie.
	 */
	protected onSearch(): void {
		this.setQueryParams({
			search: this.searchForm.value.search,
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
