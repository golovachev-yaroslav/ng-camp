import { EntityValidationErrors } from '../models/app-error';

/**
 * Finds and extract errors by attribute.
 * @param errorsDto Validation DTO errors.
 * @param attribute Attribute.
 */
export function extractErrorMessages(
	errorsDto: EntityValidationErrors<Record<string, string>>[] | null | undefined,
	attribute: string | null,
): string | undefined {
	return errorsDto
		?.filter(errorDto => errorDto['code'] === attribute)
		.map(errorDto => errorDto['detail'])
		.join(' ');
}
