import { Params } from '@angular/router';

import { AnimeParams } from '../models/anime/anime-params';
import { DEFAULT_PAGE_SIZE } from '../models/query-params';
import { AnimeParametersDto } from '../dtos/anime/anime-params.dto';
import { AnimeSort } from '../models/enums/anime-sort';

import { SortDirectionMapper } from './sort-direction.mapper';

/** Anime Http Parameters Mapper. */
export namespace AnimeHttpParamsMapper {

	/**
	 * Converts model to dto.
	 * @param model Params model.
	 */
	export function toDto(model: AnimeParams): AnimeParametersDto {
		const field = AnimeSort.toReadable(model.field as AnimeSort);
		const ordering = SortDirectionMapper.toDto(field, model.direction);
		const limit = model.limit ?? DEFAULT_PAGE_SIZE;

		return {
			ordering,
			search: model.search,
			limit,
			offset: model.offset * limit,
			type__in: model.typeIn?.toString() ?? '',
		};
	}

	/**
	 * Converts dto to model.
	 * @param params Unknown params.
	 */
	export function fromDto(params: Params): AnimeParams {
		const sort = SortDirectionMapper.fromDto(params['field'], params['direction']);

		return {
			offset: Number(params['offset'] ?? 0),
			limit: Number(params['limit'] ?? DEFAULT_PAGE_SIZE),
			search: params['search'] ?? '',
			field: sort.field,
			direction: sort.direction,
			typeIn: params['typeIn'] ?? '',
		};
	}
}
