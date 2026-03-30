import { AiredDto } from './aired.dto';

/** Anime form DTO. */
export interface AnimeFormDto {

	/** English title. */
	readonly title_eng: string;

	/** Japanese title. */
	readonly title_jpn: string;

	/** Image URL. */
	readonly image?: string | null;

	/** Aired dates. */
	readonly aired: AiredDto;

	/** Type. */
	readonly type: string;

	/** Status. */
	readonly status: string;

	/** Rating. */
	readonly rating: string;

	/** Source. */
	readonly source: string;

	/** Season. */
	readonly season: string;

	/** Youtube trialer's ID. */
	readonly trailer_youtube_id?: string;

	/** Airing. */
	readonly airing?: boolean;

	/** Synopsis. */
	readonly synopsis?: string;

	/** Studios IDs. */
	readonly studios: readonly number[];

	/** Genres IDs. */
	readonly genres: readonly number[];
}
