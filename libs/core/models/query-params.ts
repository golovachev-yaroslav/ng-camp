import { SortDirection } from '@angular/material/sort';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';

/** Query params. */
export interface QueryParams {
	/** Page size. */
	readonly pageSize: number;

	/** Page number. */
	readonly pageNumber: number;

	/** Filter type. */
	readonly type: AnimeType[];

	/** Soring field. */
	readonly field: string;

	/** Sorting direction. */
	readonly direction: SortDirection;

	/** Search. */
	readonly search: string;
}
