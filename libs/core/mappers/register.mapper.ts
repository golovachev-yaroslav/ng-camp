import { Register } from '@js-camp/core/models/auth/register';
import { RegisterDto } from '@js-camp/core/dtos/auth/register.dto';
import { ValidationErrorDto } from '@js-camp/core/dtos/validation-error-dto';
import { EntityValidationErrors } from '@js-camp/core/models/app-error';
import { extractError, extractErrorMessages } from '@js-camp/core/utils/extract-error';

/** Register mapper. */
export namespace RegisterMapper {
	/** @inheritdoc */
	export function validationErrorFromDto(
		errorDto?: EntityValidationErrors<RegisterDto>[] | null
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
