/** Studio. */
export interface Studio {
	/** Unique id. */
	readonly id: number;

	/** Name. */
	readonly name: string;

	/** Logo. */
	readonly logo: string;

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
}
