/** Studio DTO. */
export interface StudioDto {

	/** Unique id. */
	readonly id: number;

	/** Name. */
	readonly name: string;

	/** Image. */
	readonly image: string;

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
}
