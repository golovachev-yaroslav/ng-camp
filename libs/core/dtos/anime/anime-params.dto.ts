import { QueryParamsDto } from '../query-params-dto';

/** Anime parameters DTO. */
export interface AnimeParamsDto extends QueryParamsDto {

	/** Status. */
	readonly status?: string;

	/** Type in. */
	readonly type__in?: string;
}
