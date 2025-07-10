import { SortDirection } from '@angular/material/sort';

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
