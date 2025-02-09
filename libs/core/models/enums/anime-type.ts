import { enumToArray } from '@js-camp/core/utils/enum-to-array';

/** Anime type. */
export enum AnimeType {
	Tv = 'Tv',
	Ova = 'Ova',
	Movie = 'Movie',
	Special = 'Special',
	Ona = 'Ona',
	Music = 'Music',
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
