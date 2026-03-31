import { enumToArray } from '../../utils/enum-to-array';

/** Genre type. */
export enum GenreType {
	Genres = 'GENRES',
	ExplicitGenres = 'EXPLICIT_GENRES',
	Themes = 'THEMES',
	Demographics = 'DEMOGRAPHICS',
}

/** Genre types. */
export namespace GenreType {

	/** Genre types map-object to title view. */
	const TO_TITLE_MAP: Record<GenreType, string> = {
		[GenreType.Genres]: 'Genres',
		[GenreType.ExplicitGenres]: 'Explicit genres',
		[GenreType.Themes]: 'Themes',
		[GenreType.Demographics]: 'Demographics',
	};

	/** Converts genre type enum to array. */
	export function toArray(): GenreType[] {
		return enumToArray(GenreType);
	}

	/**
	 * Converts a genre types to readable title.
	 * @param value Genre types.
	 */
	export function toReadable(value: GenreType): string | null {
		return TO_TITLE_MAP[value];
	}
}
