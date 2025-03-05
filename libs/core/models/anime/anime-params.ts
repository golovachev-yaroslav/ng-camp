import { QueryParams } from '../query-params';
import { AnimeStatus } from '../enums/anime-status';
import { AnimeSort } from '../enums/anime-sort';

/** Anime parameters. */
export interface AnimeParams extends QueryParams {

	/** Status. */
	readonly status?: AnimeStatus;

	/** Type in. */
	readonly typeIn?: string;

	/** Sort field. */
	readonly sort: AnimeSort | string;
}
