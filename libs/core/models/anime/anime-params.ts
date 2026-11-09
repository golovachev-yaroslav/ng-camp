import { QueryParams } from '../query-params';
import { AnimeStatus } from '../enums/anime-status';
import { AnimeType } from '../enums/anime-type';

/** Anime parameters. */
export interface AnimeParams extends QueryParams {

	/** Status. */
	readonly status?: AnimeStatus;

	/** Selected anime types. */
	readonly typeIn?: readonly AnimeType[];
}
