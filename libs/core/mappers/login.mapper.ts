import { Login } from '../models/auth/login';
import { LoginDto } from '../dtos/auth/login.dto';
import { EntityValidationErrors } from '../models/app-error';
import { extractErrorMessages } from '../utils/extract-error';

/** Login mapper. */
export namespace LoginMapper {

	/** @inheritdoc */
	export function validationErrorFromDto(
		errorDto?: EntityValidationErrors<LoginDto>[] | null,
	): EntityValidationErrors<Login> {
		return {
			email: extractErrorMessages(errorDto, 'email') || extractErrorMessages(errorDto, 'no_active_account'),
			password:
				extractErrorMessages(errorDto, 'password') ||
				extractErrorMessages(errorDto, 'password_entirely_numeric'),
		};
	}

	/**
	 * Converts model to dto.
	 * @param model User Secret model.
	 */
	export function toDto(model: Login): LoginDto {
		return {
			email: model.email,
			password: model.password,
		};
	}
}
