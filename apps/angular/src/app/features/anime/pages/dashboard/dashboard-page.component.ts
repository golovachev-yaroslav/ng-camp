import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconAnchor } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, map, tap, switchMap, distinctUntilChanged, combineLatest, BehaviorSubject } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { AuthService } from '@js-camp/angular/core/services/auth.service';
import { ConfirmModalService } from '@js-camp/angular/core/services/confirm-modal.service';
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
		MatTooltipModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatSelectModule,
		MatIconModule,
		FilterBarComponent,
		RouterLink,
		MatIconAnchor,
	],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {
	/** Anime list. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

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

	private readonly authService = inject(AuthService);

	private readonly confirmModalService = inject(ConfirmModalService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	private readonly triggerReload$ = new BehaviorSubject<void>(undefined);

	/** Is an authorized user. */
	protected readonly isAuthorizedUser = this.authService.isAuthorizedUser;

	public constructor() {
		this.animes$ = this.createAnimeStream();
		this.searchValue.set(this.queryParams.search);
	}

	/** Table columns. */
	protected get displayedColumns(): string[] {
		const allColumns = ['poster', 'titleEnglish', 'titleJapanese', 'airedStart', 'type', 'status', 'control'];

		if (this.isAuthorizedUser()) {
			return allColumns;
		}

		return allColumns.filter(column => column !== 'control');
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

		const params$ = this.activeRoute.queryParams.pipe(
			distinctUntilChanged(),
			map(query => this.transformQueryParams(query)),
		);

		return combineLatest([
			params$,
			this.triggerReload$.pipe(),
		]).pipe(
			tap(() => this.isLoading.set(true)),
			switchMap(([params]) =>
				this.getAnimeList(params).pipe(
					finalize(() => {
						this.isLoading.set(false);
					}),
				)),
			takeUntilDestroyed(this.destroyRef),
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

	/**
	 * Delete anime.
	 * @param event Mouse event.
	 * @param anime Anime.
	 */
	protected onDelete(event: MouseEvent, anime: Anime): void {
		event.stopPropagation();
		const title = anime.titleEnglish === '' ? anime.titleJapanese : anime.titleEnglish;

		this.confirmModalService.open({
			title: 'Delete Anime',
			message: `Would you like to delete ${title}?`,
		}).pipe(
			switchMap(() => this.animeService.deleteAnime(anime.id)),
			takeUntilDestroyed(this.destroyRef),
		)
			.subscribe(() => {
				this.triggerReload$.next();
			});
	}
}
