import { SortDirection } from '@angular/material/sort';

/** Default page size. */
export const DEFAULT_PAGE_SIZE = 10;

/** Query params. */
export interface QueryParams {

	/** Limit. */
	readonly limit: number;

	/** Page number. */
	readonly offset: number;

	/** Search. */
	readonly search: string;

	/** Sort field. */
	readonly field: string;

	/** Sort direction. */
	readonly direction: SortDirection;
}
