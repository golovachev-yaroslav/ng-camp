import { enumToArray } from '@js-camp/core/utils/enum-to-array';

/** Anime sort. */
export enum AnimeSort {
	TitleEnglishAsc = 'titleEnglish',
	TitleEnglishDesc = '-titleEnglish',
	StatusAsc = 'status',
	StatusDesc = '-status',
	AiredStartAsc = 'airedStart',
	AiredStartDesc = '-airedStart',
	None = '',
}

/** Anime ordering. */
export namespace AnimeSort {

	/** Anime ordering map-object to title view. */
	const TO_TITLE_MAP: Record<AnimeSort, string> = {
		[AnimeSort.TitleEnglishAsc]: 'title_eng',
		[AnimeSort.TitleEnglishDesc]: '-title_eng',
		[AnimeSort.StatusAsc]: 'status',
		[AnimeSort.StatusDesc]: '-status',
		[AnimeSort.AiredStartAsc]: 'aired__startswith',
		[AnimeSort.AiredStartDesc]: '-aired__startswith',
		[AnimeSort.None]: '',
	};

	/** Converts anime ordering enum to array. */
	export function toArray(): AnimeSort[] {
		return enumToArray(AnimeSort);
	}

	/**
	 * Converts an anime status to readable title.
	 * @param value Anime status.
	 */
	export function toReadable(value: AnimeSort): string {
		return TO_TITLE_MAP[value];
	}
}
