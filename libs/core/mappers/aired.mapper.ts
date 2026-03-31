import { Aired } from '../models/anime/aired';
import { AiredDto } from '../dtos/anime/aired.dto';

/** Aired mapper. */
export namespace AiredMapper {

	/**
	 * Converts model to dto.
	 * @param model Aired.
	 */
	export function toDto(model: Aired): AiredDto {
		return {
			start: model.start?.toISOString() ?? null,
			end: model.end?.toISOString() ?? null,
		};
	}

	/**
	 * Converts dto to model.
	 * @param dto Aired DTO.
	 */
	export function fromDto(dto: AiredDto): Aired {
		return {
			start: dto.start ? new Date(dto.start) : null,
			end: dto.end ? new Date(dto.end) : null,
		};
	}
}
