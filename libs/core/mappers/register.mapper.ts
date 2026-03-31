import { Register } from '../models/auth/register';
import { RegisterDto } from '../dtos/auth/register.dto';
import { EntityValidationErrors } from '../models/app-error';
import { extractErrorMessages } from '../utils/extract-error';

/** Register mapper. */
export namespace RegisterMapper {

	/** @inheritdoc */
	export function validationErrorFromDto(
		errorDto?: EntityValidationErrors<RegisterDto>[] | null,
	): EntityValidationErrors<Register> {
		return {
			email: extractErrorMessages(errorDto, 'email') || extractErrorMessages(errorDto, 'unique'),
			lastName: extractErrorMessages(errorDto, 'last_name'),
			firstName: extractErrorMessages(errorDto, 'first_name'),
			password:
				extractErrorMessages(errorDto, 'password_too_common') ||
				extractErrorMessages(errorDto, 'password') ||
				extractErrorMessages(errorDto, 'password_entirely_numeric'),
		};
	}

	/**
	 * Converts model to dto.
	 * @param model User Secret model.
	 */
	export function toDto(model: Register): RegisterDto {
		return {
			email: model.email,
			last_name: model.lastName,
			first_name: model.firstName,
			password: model.password,
		};
	}
}
