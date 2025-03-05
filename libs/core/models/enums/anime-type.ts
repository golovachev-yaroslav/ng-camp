import { enumToArray } from '../../utils/enum-to-array';

/** Anime type. */
export enum AnimeType {
	Tv = 'TV',
	Ova = 'OVA',
	Movie = 'MOVIE',
	Special = 'SPECIAL',
	Ona = 'ONA',
	Music = 'MUSIC',
	PromotionalVideos = 'PROMOTIONAL_VIDEOS',
	Unknown = 'Unknown',
}

/** Anime types. */
export namespace AnimeType {

	/** Anime types map-object to title view. */
	const TO_TITLE_MAP: Record<AnimeType, string> = {
		[AnimeType.Movie]: 'Movie',
		[AnimeType.Music]: 'Music',
		[AnimeType.Ona]: 'Ona',
		[AnimeType.Ova]: 'Ova',
		[AnimeType.Special]: 'Special',
		[AnimeType.Tv]: 'Tv',
		[AnimeType.PromotionalVideos]: 'Promotional Videos',
		[AnimeType.Unknown]: 'Unknown',
	};

	/** Converts anime type enum to array. */
	export function toArray(): AnimeType[] {
		return enumToArray(AnimeType);
	}

	/**
	 * Converts an anime types to readable title.
	 * @param value Anime types.
	 */
	export function toReadable(value: AnimeType): string | null {
		return TO_TITLE_MAP[value];
	}
}
