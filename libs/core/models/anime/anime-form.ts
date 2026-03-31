import { Season } from '../enums/season';
import { Source } from '../enums/source';
import { Rating } from '../enums/rating';

import { AnimeStatus } from '../enums/anime-status';
import { AnimeType } from '../enums/anime-type';

import { Aired } from './aired';

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
