import { QueryParams } from '../query-params';
import { AnimeStatus } from '../enums/anime-status';

/** Anime parameters. */
export interface AnimeParams extends QueryParams {

	/** Status. */
	readonly status?: AnimeStatus;

	/** Type in. */
	readonly typeIn?: string;
}
