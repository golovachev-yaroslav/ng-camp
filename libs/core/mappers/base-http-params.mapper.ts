import { QueryParams } from '../models/query-params';
import { QueryParamsDto } from '../dtos/query-params-dto';

/** Base http parameters mapper. */
export namespace BaseHttpParamsMapper {
	const DEFAULT_PAGE_SIZE = 10;

	/**
	 * Converts model to dto.
	 * @param model Params model.
	 */
	export function toDto(model: QueryParams): QueryParamsDto {
		return {
			ordering: model.sort,
			search: model.search,
			limit: model.limit,
			offset: model.offset ? model.offset * (model.limit ?? DEFAULT_PAGE_SIZE) : undefined,
		};
	}
}
