import { enumToArray } from '../../utils/enum-to-array';

/** Rating. */
export enum Rating {
	G = 'G',
	PG = 'PG',
	PG_13 = 'PG_13',
	R_17 = 'R_17',
	R_PLUS = 'R_PLUS',
	R_X = 'R_X',
	Unknown = 'UNKNOWN',
}

/** Rating. */
export namespace Rating {

	/** Rating map-object to title view. */
	const TO_TITLE_MAP: Record<Rating, string> = {
		[Rating.G]: 'All Ages',
		[Rating.PG]: 'PG - Children',
		[Rating.PG_13]: 'Teens 13 or older',
		[Rating.R_17]: 'R-17+ Violence & profanity',
		[Rating.R_PLUS]: 'R+ - Mild Nudity',
		[Rating.R_X]: 'Rx - Hentai',
		[Rating.Unknown]: 'Unknown',
	};

	/** Converts rating enum to array. */
	export function toArray(): Rating[] {
		return enumToArray(Rating);
	}

	/**
	 * Converts rating to readable title.
	 * @param value Rating.
	 */
	export function toReadable(value: Rating): string | null {
		return TO_TITLE_MAP[value];
	}
}
