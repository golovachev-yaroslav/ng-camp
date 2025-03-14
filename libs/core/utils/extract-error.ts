import { EntityValidationErrors } from '../models/app-error';

/**
 * Extract an error from the API response.
 * @param error List of errors.
 * @returns The first error.
 */
export function extractError(error: unknown): string | undefined {
	if (Array.isArray(error)) {
		return error[0];
	}

	return undefined;
}

/**
 * Finds and extract errors by attribute.
 * @param errorsDto Validation DTO errors.
 * @param attribute Attribute.
 */
export function extractErrorMessages(
	errorsDto: EntityValidationErrors<any>[] | null | undefined,
	attribute: string | null,
): string | undefined {
	return errorsDto
		?.filter(errorDto => errorDto['code'] === attribute)
		.map(errorDto => errorDto['detail'])
		.join(' ');
}
