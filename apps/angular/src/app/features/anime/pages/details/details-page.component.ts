import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
	MatCard,
	MatCardContent,
	MatCardHeader,
	MatCardSubtitle,
	MatCardTitle,
} from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, switchMap, map, distinctUntilChanged } from 'rxjs';

import { EmptyPipe } from '@js-camp/angular/shared/pipes/empty.pipe';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { Rating } from '@js-camp/core/models/enums/rating';
import { Source } from '@js-camp/core/models/enums/source';
import { Season } from '@js-camp/core/models/enums/season';
import { Genre } from '@js-camp/core/models/anime/genre';
import { Studio } from '@js-camp/core/models/anime/studio';

import { PreviewPosterModalComponent } from './components/preview-poster-modal/preview-poster-modal.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';

/** Anime details page component. */
@Component({
	selector: 'camp-details-page',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		MatTooltipModule,
		MatProgressSpinner,
		MatCard,
		MatCardHeader,
		MatCardTitle,
		MatCardSubtitle,
		MatCardContent,
		EmptyPipe,
		YoutubePlayerComponent,
	],
	templateUrl: './details-page.component.html',
	styleUrl: './details-page.component.css',
})
export class DetailsPageComponent {
	/** Anime details. */
	protected readonly anime$: Observable<Anime>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Anime type enum. */
	protected readonly animeType = AnimeType;

	/** Anime status enum. */
	protected readonly animeStatus = AnimeStatus;

	/** Rating enum. */
	protected readonly rating = Rating;

	/** Source enum. */
	protected readonly source = Source;

	/** Season enum. */
	protected readonly season = Season;

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly destroyRef = inject(DestroyRef);

	private readonly dialog = inject(MatDialog);

	/**
	 * List of studios.
	 * @param studios Array of studios.
	 */
	protected getStudiosList(studios?: readonly Studio[]): string {
		if (!studios) {
			return '-';
		}

		return studios.map(studio => studio.name).join(', ');
	}

	/**
	 * List of genres.
	 * @param genres Array of genres.
	 */
	protected getGenresList(genres?: readonly Genre[]): string {
		if (!genres) {
			return '-';
		}

		return genres.map(genre => genre.name).join(', ');
	}

	public constructor() {
		this.anime$ = this.createAnimeStream();
	}

	private createAnimeStream(): Observable<Anime> {
		this.isLoading.set(true);

		return this.activeRoute.paramMap.pipe(
			distinctUntilChanged(),
			map(query => Number(query.get('id'))),
			switchMap(id =>
				this.animeService.getAnime(id).pipe(
					finalize(() => {
						this.isLoading.set(false);
					}),
					takeUntilDestroyed(this.destroyRef),
				)),
		);
	}

	/**
	 * Preview poster.
	 * @param url URL of image.
	 * @param title Title of image.
	 */
	public previewPoster(url: string, title: string): void {
		this.dialog.open(PreviewPosterModalComponent, {
			data: { url, title },
			minWidth: '80vw',
			minHeight: '80vh',
		});
	}
}
