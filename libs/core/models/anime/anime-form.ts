import { Season } from '@js-camp/core/models/enums/season';
import { Source } from '@js-camp/core/models/enums/source';
import { Rating } from '@js-camp/core/models/enums/rating';
import { Genre } from '@js-camp/core/models/anime/genre';
import { Studio } from '@js-camp/core/models/anime/studio';
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
	readonly genres?: Genre[];

	/** Studio. */
	readonly studios?: Studio[];

	/** Trailer Youtube id. */
	readonly trailerYoutubeId?: string;

	/** Image file. */
	readonly imageFile: File | null;

	/** Image URL. */
	readonly imageUrl: string | null;
}
