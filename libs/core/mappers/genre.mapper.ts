import { Genre } from '../models/genre/genre';
import { GenreDto } from '../dtos/genre/genre.dto';

/** Genre mapper. */
export namespace GenreMapper {

	/**
	 * Converts dto to model.
	 * @param dto Genre DTO.
	 */
	export function fromDto(dto: GenreDto): Genre {
		return {
			id: dto.id,
			name: dto.name,
			created: dto.created ? new Date(dto.created) : null,
			modified: dto.modified ? new Date(dto.modified) : null,
			type: dto.type
		};
	}
}
