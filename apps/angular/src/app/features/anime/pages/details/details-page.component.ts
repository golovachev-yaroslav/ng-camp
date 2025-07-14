import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
	MatCard,
	MatCardActions,
	MatCardContent,
	MatCardHeader, MatCardImage,
	MatCardSubtitle,
	MatCardTitle,
} from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, finalize, switchMap, map, distinctUntilChanged } from 'rxjs';

import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { MatCell } from '@angular/material/table';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';

/** Anime details page component. */
@Component({
	selector: 'camp-details-page',
	standalone: true,
	imports: [
		CommonModule,
		MatProgressSpinner,
		MatButton,
		MatCard,
		MatCardHeader,
		MatCardTitle,
		MatCardSubtitle,
		MatCardContent,
		MatCardActions,
		MatCardImage,
		MatCell
	],
	templateUrl: './details-page.component.html',
	styleUrl: './details-page.component.css',
})
export class DetailsPageComponent {
	/** Anime details. */
	protected readonly anime$: Observable<Anime>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly destroyRef = inject(DestroyRef);

	/** Anime status enum. */
	protected readonly animeStatus = AnimeStatus;

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

	protected readonly animeType = AnimeType;
}
