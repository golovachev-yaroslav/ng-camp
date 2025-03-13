import { Params } from '@angular/router';

import { AnimeParams } from '../models/anime/anime-params';
import { AnimeParametersDto } from '../dtos/anime/anime-params.dto';
import { AnimeSort } from '../models/enums/anime-sort';

/** Anime Http Parameters Mapper. */
export namespace AnimeHttpParamsMapper {
	const DEFAULT_PAGE_SIZE = 10;

	/** Page sizes. */
	export const PAGE_SIZES: readonly number[] = [5, 10, 25, 100];

	/**
	 * Converts model to dto.
	 * @param model Params model.
	 */
	export function toDto(model: AnimeParams): AnimeParametersDto {
		return {
			ordering: AnimeSort.toReadable(model.sort as AnimeSort),
			search: model.search,
			limit: model?.limit ?? DEFAULT_PAGE_SIZE,
			offset: model.offset ? model.offset * (model?.limit ?? DEFAULT_PAGE_SIZE) : undefined,
			type__in: model.typeIn?.toString() ?? '',
		};
	}

	/**
	 * Converts dto to model.
	 * @param params Unknown params.
	 */
	export function fromDto(params: Params): AnimeParams {
		return {
			offset: params['offset'] ?? 0,
			limit: params['limit'] ?? DEFAULT_PAGE_SIZE,
			sort: params['sort'] ?? '',
			search: params['search'] ?? '',
			typeIn: params['typeIn'] ?? '',
		};
	}
}
