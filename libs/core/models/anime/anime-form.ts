import { Season } from '@js-camp/core/models/enums/season';
import { Source } from '@js-camp/core/models/enums/source';
import { Rating } from '@js-camp/core/models/enums/rating';
import { Aired } from '@js-camp/core/models/anime/aired';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';

/** Anime form. */
export interface AnimeForm {

	/** English title. */
	readonly titleEnglish: string;

	/** Japanese title. */
	readonly titleJapanese: string;

	/** Type. */
	readonly type: AnimeType;

	/** Status. */
	readonly status: AnimeStatus;

	/** Aired dates. */
	readonly aired: Aired;

	/** Season. */
	readonly season: Season;

	/** Source. */
	readonly source: Source;

	/** Airing. */
	readonly airing?: boolean;

	/** Synopsis. */
	readonly synopsis?: string;

	/** Rating. */
	readonly rating: Rating;

	/** Genre. */
	readonly genres?: number[];

	/** Studio. */
	readonly studios?: number[];

	/** Trailer Youtube Url. */
	readonly trailerYoutubeUrl?: string;

	/** Poster file. */
	readonly posterFile: File | null;

	/** Poster URL. */
	readonly poster?: string | null;
}
