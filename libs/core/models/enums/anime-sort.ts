import { enumToArray } from '../../utils/enum-to-array';

/** Anime sort. */
export enum AnimeSort {
	TitleEnglish = 'titleEnglish',
	Status = 'status',
	AiredStart = 'airedStart',
	None = '',
}

/** Anime ordering. */
export namespace AnimeSort {

	/** Anime ordering map-object to title view. */
	const TO_TITLE_MAP: Record<AnimeSort, string> = {
		[AnimeSort.TitleEnglish]: 'title_eng',
		[AnimeSort.Status]: 'status',
		[AnimeSort.AiredStart]: 'aired__startswith',
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
