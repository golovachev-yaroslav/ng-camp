import { enumToArray } from '../../utils/enum-to-array';

/** Seasons. */
export enum Season {
	Winter = 'WINTER',
	Spring = 'SPRING',
	Summer = 'SUMMER',
	Fall = 'FALL',
	NonSeasonal = 'NON_SEASONAL',
}

/** Season. */
export namespace Season {

	/** Season map-object to title view. */
	const TO_TITLE_MAP: Record<Season, string> = {
		[Season.Winter]: 'Winter',
		[Season.Spring]: 'Spring',
		[Season.Summer]: 'Summer',
		[Season.Fall]: 'Fail',
		[Season.NonSeasonal]: 'Non seasonal',
	};

	/** Converts season enum to array. */
	export function toArray(): Season[] {
		return enumToArray(Season);
	}

	/**
	 * Converts a season to readable title.
	 * @param value Season.
	 */
	export function toReadable(value: Season): string | null {
		return TO_TITLE_MAP[value];
	}
}
