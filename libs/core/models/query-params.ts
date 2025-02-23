/** Query params. */
export interface QueryParams {
	/** Limit. */
	readonly limit: number;

	/** Page number. */
	readonly offset: number;

	/** Sort field. */
	readonly sort: string;

	/** Search. */
	readonly search: string;
}
