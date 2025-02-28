import { QueryParams } from '@js-camp/core/models/query-params';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { AnimeSort } from '@js-camp/core/models/enums/anime-sort';

/** Anime parameters. */
export interface AnimeParams extends QueryParams {
	/** Status. */
	readonly status?: AnimeStatus;

	/** Type in. */
	readonly typeIn?: string;

	/** Sort field. */
	readonly sort: AnimeSort | string;
}
