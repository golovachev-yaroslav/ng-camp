/** Query Params DTO. */
export interface QueryParamsDto {

	/** Limit. */
	readonly limit: number;

	/** Offset. */
	readonly offset?: number;

	/** Ordering. */
	readonly ordering?: string;

	/** Search. */
	readonly search: string;
}
