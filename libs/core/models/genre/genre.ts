import { GenreType } from '@js-camp/core/models/enums/genre-type';

/** Genre. */
export interface Genre {

	/** Unique id. */
	readonly id: number;

	/** Name. */
	readonly name: string;

	/**
	 *  Created date.
	 *  @example 1975-01-01T00:00:00Z.
	 */
	readonly created: Date | null;

	/**
	 *  Modified date.
	 *  @example 1975-01-01T00:00:00Z.
	 */
	readonly modified: Date | null;

	/** Type. */
	readonly type: GenreType;
}
