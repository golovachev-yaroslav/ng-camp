import { Params } from '@angular/router';

import { AnimeParams } from '../models/anime/anime-params';
import { DEFAULT_PAGE_SIZE } from '../models/query-params';
import { AnimeParamsDto } from '../dtos/anime/anime-params.dto';
import { AnimeSort } from '../models/enums/anime-sort';
import { AnimeType } from '../models/enums/anime-type';

import { SortDirectionMapper } from './sort-direction.mapper';

/** Anime Http Params Mapper. */
export namespace AnimeHttpParamsMapper {

	/**
	 * Converts model to dto.
	 * @param model Params model.
	 */
	export function toDto(model: AnimeParams): AnimeParamsDto {
		const field = AnimeSort.toDto(model.field as AnimeSort);
		const ordering = SortDirectionMapper.toDto(field, model.direction);
		const limit = model.limit ?? DEFAULT_PAGE_SIZE;

		return {
			ordering,
			search: model.search,
			limit,
			offset: model.offset * limit,
			type__in: model.typeIn?.join(',') ?? '',
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
			typeIn: typesFromQueryParam(params['typeIn']),
		};
	}

	/**
	 * Converts model to router query params.
	 * @param model Params model.
	 */
	export function toQueryParams(model: Partial<AnimeParams>): Params {
		const { typeIn, ...params } = model;

		if (typeIn === undefined) {
			return params;
		}

		return { ...params, typeIn: typeIn.join(',') };
	}

	/**
	 * Parses comma-separated anime types query param.
	 * @param typeIn Comma-separated anime types.
	 */
	function typesFromQueryParam(typeIn?: string): AnimeType[] {
		if (!typeIn) {
			return [];
		}

		const types = AnimeType.toArray();

		return typeIn.split(',').filter((type): type is AnimeType => types.includes(type as AnimeType));
	}
}
