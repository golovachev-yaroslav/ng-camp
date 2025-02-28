import { enumToArray } from '@js-camp/core/utils/enum-to-array';

/** Anime statuses. */
export enum AnimeStatus {
	Finished = 'AIRING',
	Airing = 'FINISHED',
	NotYetAired = 'NOT_YET_AIRED',
}

/** Anime status. */
export namespace AnimeStatus {

	/** Anime status map-object to title view. */
	const TO_TITLE_MAP: Record<AnimeStatus, string> = {
		[AnimeStatus.Finished]: 'Finished',
		[AnimeStatus.Airing]: 'Airing',
		[AnimeStatus.NotYetAired]: 'Not yet aired',
	};

	/** Converts anime status enum to array. */
	export function toArray(): AnimeStatus[] {
		return enumToArray(AnimeStatus);
	}

	/**
	 * Converts an anime status to readable title.
	 * @param value Anime status.
	 */
	export function toReadable(value: AnimeStatus): string | null {
		return TO_TITLE_MAP[value];
	}
}
