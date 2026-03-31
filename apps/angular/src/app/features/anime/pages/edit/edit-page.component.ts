import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, finalize, map, Observable, switchMap } from 'rxjs';

import { AnimeDetail } from '@js-camp/core/models/anime/anime-detail';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';

import { AnimeFormComponent } from './../../components/anime-form/anime-form.component';

/** Anime edit page component. */
@Component({
	selector: 'camp-edit-page',
	standalone: true,
	imports: [CommonModule, AnimeFormComponent],
	templateUrl: './edit-page.component.html',
	styleUrl: './edit-page.component.css',
})
export class EditPageComponent {
	/** Anime details. */
	protected readonly anime$: Observable<AnimeDetail>;

	/** Loading state. */
	protected readonly isLoading = signal(false);

	private readonly animeService = inject(AnimeService);

	private readonly activeRoute = inject(ActivatedRoute);

	private readonly destroyRef = inject(DestroyRef);

	public constructor() {
		this.anime$ = this.createAnimeStream();
	}

	private createAnimeStream(): Observable<AnimeDetail> {
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
}
