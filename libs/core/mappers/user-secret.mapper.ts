import { UserSecretDto } from '@js-camp/core/dtos/auth/user-secret-dto';
import { UserSecret } from '@js-camp/core/models/auth/user-secret';

/** User secret mapper. */
export namespace UserSecretMapper {
	/**
	 * Converts model to dto.
	 * @param model User Secret model.
	 */
	export function toDto(model: UserSecret): UserSecretDto {
		return {
			access: model.accessToken,
			refresh: model.refreshToken,
		};
	}

	/**
	 * Converts dto to model.
	 * @param dto User Secret DTO.
	 */
	export function fromDto(dto: UserSecretDto): UserSecret {
		return {
			accessToken: dto.access,
			refreshToken: dto.refresh,
		};
	}
}
