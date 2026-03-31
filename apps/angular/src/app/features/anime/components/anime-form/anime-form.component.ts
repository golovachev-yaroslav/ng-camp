import { Component, DestroyRef, inject, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, throwError } from 'rxjs';

import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { GenreService } from '@js-camp/angular/core/services/genre.service';
import { StudioService } from '@js-camp/angular/core/services/studio.service';
import { ControlsOf } from '@js-camp/core/utils/form';
import { AnimeForm } from '@js-camp/core/models/anime/anime-form';
import { Rating } from '@js-camp/core/models/enums/rating';
import { Season } from '@js-camp/core/models/enums/season';
import { Source } from '@js-camp/core/models/enums/source';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { Aired } from '@js-camp/core/models/anime/aired';
import { FormValidation } from '@js-camp/angular/core/utils/form-validation';
import { Studio } from '@js-camp/core/models/studio/studio';
import { Genre } from '@js-camp/core/models/genre/genre';
import { AnimeDetail } from '@js-camp/core/models/anime/anime-detail';
import { QueryParams } from '@js-camp/core/models/query-params';
import { ImageUploaderComponent } from '@js-camp/angular/shared/components/image-uploader/image-uploader.component';

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
		ImageUploaderComponent,
	],
	templateUrl: './anime-form.component.html',
	styleUrl: './anime-form.component.css',
})
export class AnimeFormComponent {
	/** Type of the form. */
	public readonly type = input.required<'create' | 'edit'>();

	/** Initial data. */
	public readonly initialData = input<AnimeDetail | null | undefined>();

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	private readonly animeService = inject(AnimeService);

	private readonly genreService = inject(GenreService);

	private readonly studioService = inject(StudioService);

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

	/** Genre list. */
	protected readonly genres = signal<Genre[]>([]);

	/** Studio list. */
	protected readonly studios = signal<Studio[]>([]);

	private readonly activeRoute = inject(ActivatedRoute);

	public constructor() {
		this.loadGenres({
			limit: 30,
			offset: 0,
			sort: 'name',
			search: '',
		});
		this.loadStudios({
			limit: 30,
			offset: 0,
			sort: 'name',
			search: '',
		});

		effect(
			() => {
				const initialData = this.initialData();
				if (!initialData) {
					return;
				}

				this.animeForm.patchValue({
					...initialData,
					genres: initialData.genres?.map(genre => genre.id) ?? [],
					studios: initialData.studios?.map(studio => studio.id) ?? [],
					trailerYoutubeUrl: initialData.youtubeUrl ?? '',
				});
			},
			{ allowSignalWrites: true },
		);
	}

	private loadGenres(params: QueryParams): void {
		this.genreService
			.getGenreList(params)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(pagination => {
				this.genres.set([...pagination.items]);
			});
	}

	private loadStudios(params: QueryParams): void {
		this.studioService
			.getStudioList(params)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(pagination => {
				this.studios.set([...pagination.items]);
			});
	}

	/** Anime form group. */
	protected readonly animeForm = this.formBuilder.group<ControlsOf<AnimeForm>>({
		titleEnglish: this.formBuilder.control(''),
		titleJapanese: this.formBuilder.control('', [Validators.required]),
		synopsis: this.formBuilder.control('', [Validators.required]),
		aired: this.formBuilder.group<ControlsOf<Aired>>({
			start: this.formBuilder.control(null),
			end: this.formBuilder.control(null),
		}),
		poster: this.formBuilder.control(null),
		posterFile: this.formBuilder.control(null),
		airing: this.formBuilder.control(false, [Validators.required]),
		rating: this.formBuilder.control(Rating.Unknown, [Validators.required]),
		genres: this.formBuilder.control([], [Validators.required]),
		season: this.formBuilder.control(Season.NonSeasonal, [Validators.required]),
		source: this.formBuilder.control(Source.Unknown, [Validators.required]),
		status: this.formBuilder.control(AnimeStatus.NotYetAired, [Validators.required]),
		studios: this.formBuilder.control([], [Validators.required]),
		trailerYoutubeUrl: this.formBuilder.control('', [Validators.required]),
		type: this.formBuilder.control(AnimeType.Unknown, [Validators.required]),
	});

	/**
	 * Select a poster.
	 * @param file File.
	 */
	protected onSelectPoster(file?: File): void {
		if (file) {
			this.animeForm.get('posterFile')?.setValue(file);
		}
	}

	/** Cancel form. */
	protected onCancel(): void {
		if (this.type() === 'edit') {
			this.router.navigate(['/anime', this.initialData()?.id]);
		} else {
			this.router.navigate(['/anime']);
		}
	}

	/** Submit form. */
	protected onSubmit(): void {
		if (this.animeForm.invalid) {
			return;
		}

		this.isLoading.set(true);
		const { id } = this.activeRoute.snapshot.params;
		const saveAnime$ =
			this.type() === 'create' ?
				this.animeService.createAnime(this.animeForm.getRawValue()) :
				this.animeService.updateAnime(id, this.animeForm.getRawValue());

		saveAnime$
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
