import { Pipe, PipeTransform } from '@angular/core';

/** Empty pipe. */
@Pipe({
	name: 'empty',
	standalone: true,
})
export class EmptyPipe implements PipeTransform {
	/**
	 * Returns default message if a value is empty.
	 * @param value Any value.
	 * @param replaceWith Replace an empty value with a symbol.
	 */
	public transform<T = unknown>(value: T, replaceWith?: string): string | T {
		if (value == null || value === '') {
			return (value == null || value === '') ? replaceWith ?? '-' : value;
		}

		return value;
	}
}
