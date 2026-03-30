import { GenreType } from '@js-camp/core/models/enums/genre-type';

/** Genre DTO. */
export interface GenreDto {

	/** Unique id. */
	readonly id: number;

	/** Name. */
	readonly name: string;

	/**
	 *  Created date.
	 *  @example 1975-01-01T00:00:00Z.
	 */
	readonly created: string | null;

	/**
	 *  Modified date.
	 *  @example 1975-01-01T00:00:00Z.
	 */
	readonly modified: string | null;

	/** Type. */
	readonly type: GenreType;
}
