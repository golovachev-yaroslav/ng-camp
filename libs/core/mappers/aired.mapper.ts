import { Aired } from '@js-camp/core/models/anime/aired';
import { AiredDto } from '@js-camp/core/dtos/anime/aired.dto';

export namespace AiredMapper {
	/**
	 * Convert aired from model to DTO.
	 * @param model Aired.
	 */
	export function toDto(model: Aired): AiredDto {
		return {
			start: model.start?.toISOString() ?? null,
			end: model.end?.toISOString() ?? null,
		};
	}

	/**
	 * Convert aired from DTO to mode.
	 * @param dto Aired DTO.
	 */
	export function fromDto(dto: AiredDto): Aired {
		return {
			start: dto.start ? new Date(dto.start) : null,
			end: dto.end ? new Date(dto.end) : null,
		};
	}
}
