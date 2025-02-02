import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { Pagination } from '@js-camp/core/models/pagintation';

/** Anime page component. */
@Component({
	selector: 'camp-anime-page',
	standalone: true,
	imports: [CommonModule, AsyncPipe, MatTableModule],
	templateUrl: './anime-page.component.html',
	styleUrl: './anime-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimePageComponent {
	/** Anime page. */
	protected readonly animes$: Observable<Pagination<Anime>>;

	/** Loading state. */
	protected readonly isLoading$ = new BehaviorSubject(false);

	private readonly animeService = inject(AnimeService);

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
		return this.animeService.getAnimeList().pipe(
			tap(() => this.isLoading$.next(true)),
			takeUntilDestroyed(this.destroyRef),
		);
	}
}
