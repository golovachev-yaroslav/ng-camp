import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ControlsOf } from '@js-camp/core/utils/form';
import { AnimeForm } from '@js-camp/core/models/anime/anime-form';
import { Rating } from '@js-camp/core/models/enums/rating';
import { Season } from '@js-camp/core/models/enums/season';
import { Source } from '@js-camp/core/models/enums/source';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { Aired } from '@js-camp/core/models/anime/aired';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, throwError } from 'rxjs';
import { FormValidation } from '@js-camp/angular/core/utils/form-validation';

/** Anime form component. */
@Component({
	selector: 'camp-anime-form',
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInput,
		MatButton,
		ReactiveFormsModule,
		MatOption,
		MatSelect,
		MatCheckbox,
		MatDatepickerModule,
	],
	templateUrl: './anime-form.component.html',
	styleUrl: './anime-form.component.css',
})
export class AnimeFormComponent {
	/** Type of the form. */
	public readonly type = input.required<'create' | 'edit'>();

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	private readonly animeService = inject(AnimeService);

	/** Anime type enum. */
	protected readonly animeType = AnimeType;

	/** Anime status enum. */
	protected readonly animeStatus = AnimeStatus;

	/** Anime source enum. */
	protected readonly animeSource = Source;

	/** Anime rating enum. */
	protected readonly animeRating = Rating;

	/** Anime season enum. */
	protected readonly animeSeason = Season;

	/** Form builder. */
	protected readonly formBuilder = inject(NonNullableFormBuilder);

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Anime types list. */
	protected readonly animeTypes: AnimeType[] = AnimeType.toArray();

	/** Anime statuses list. */
	protected readonly animeStatuses: AnimeStatus[] = AnimeStatus.toArray();

	/** Anime sources list. */
	protected readonly animeSources: Source[] = Source.toArray();

	/** Anime rating list. */
	protected readonly animeRatings: Rating[] = Rating.toArray();

	/** Anime season list. */
	protected readonly animeSeasons: Season[] = Season.toArray();

	/** Anime form group. */
	protected readonly animeForm = this.formBuilder.group({
		titleEnglish: this.formBuilder.control('', [Validators.required]),
		titleJapanese: this.formBuilder.control('', [Validators.required]),
		synopsis: this.formBuilder.control('', [Validators.required]),
		aired: this.formBuilder.group<ControlsOf<Aired>>({
			start: this.formBuilder.control(null),
			end: this.formBuilder.control(null),
		}),

		// imageUrl: this.formBuilder.control(null),
		// imageFile: this.formBuilder.control(null),
		airing: this.formBuilder.control(false, [Validators.required]),
		rating: this.formBuilder.control(Rating.Unknown, [Validators.required]),

		// genres: this.formBuilder.control([], [Validators.required]),
		season: this.formBuilder.control(Season.NonSeasonal, [Validators.required]),
		source: this.formBuilder.control(Source.Unknown, [Validators.required]),
		status: this.formBuilder.control(AnimeStatus.NotYetAired, [Validators.required]),

		// studios: this.formBuilder.control([], [Validators.required]),
		trailerYoutubeUrl: this.formBuilder.control(''),
		type: this.formBuilder.control(AnimeType.Unknown, [Validators.required]),
	});

	/** Submit form. */
	protected onSubmit(): void {
		if (this.animeForm.invalid) {
			return;
		}

		this.isLoading.set(true);
		this.animeService
			.createAnime(

				// @ts-ignore
				this.animeForm.getRawValue(),
			)
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				finalize(() => {
					this.isLoading.set(false);
				}),
				catchError((errors: unknown) => {
					FormValidation.fillFormWithError(this.animeForm, errors);

					return throwError(() => errors);
				}),
			)
			.subscribe(anime => {
				this.router.navigate(['/anime', anime.id]);
			});
	}
}
