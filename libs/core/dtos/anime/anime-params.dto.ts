import { QueryParamsDto } from '../query-params-dto';

/** Anime parameters DTO. */
export interface AnimeParametersDto extends QueryParamsDto {

	/** Status. */
	readonly status?: string;

	/** Type in. */
	readonly type__in?: string;
}
