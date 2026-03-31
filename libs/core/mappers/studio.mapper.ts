import { Studio } from '../models/studio/studio';
import { StudioDto } from '../dtos/studio/studio.dto';

/** Studio mapper. */
export namespace StudioMapper {

	/**
	 * Converts dto to model.
	 * @param dto Studio DTO.
	 */
	export function fromDto(dto: StudioDto): Studio {
		return {
			id: dto.id,
			name: dto.name,
			logo: dto.image,
			created: dto.created ? new Date(dto.created) : null,
			modified: dto.modified ? new Date(dto.modified) : null,
		};
	}
}
