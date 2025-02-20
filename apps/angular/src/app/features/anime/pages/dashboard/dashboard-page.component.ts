import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { Pagination } from '@js-camp/core/models/pagintation';

/** Dashboard page component. */
@Component({
	selector: 'camp-dashboard-page',
	standalone: true,
	imports: [CommonModule, AsyncPipe, MatTableModule, MatProgressSpinnerModule],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
	/** Anime list. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading$ = new BehaviorSubject(false);

	private readonly animeService = inject(AnimeService);

	private readonly destroyRef = inject(DestroyRef);

	/** Columns. */
	public readonly displayedColumns: string[] = [
		'poster',
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
		this.isLoading$.next(true);

		return this.animeService.getAnimeList().pipe(
			takeUntilDestroyed(this.destroyRef),
			finalize(() => this.isLoading$.next(false)),
		);
	}
}
