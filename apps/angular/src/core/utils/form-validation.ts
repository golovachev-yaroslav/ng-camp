import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { AppValidationError } from '@js-camp/core/models/app-error';

/** Form validation. */
export class FormValidation {
	/**
	 * Check equal values.
	 * @param controlName First value to compare.
	 * @param checkControlName Second value to compare.
	 */
	public static matchControlValues(controlName: string, checkControlName: string): ValidatorFn {
		return (controls: AbstractControl) => {
			const control = controls.get(controlName);
			const checkControl = controls.get(checkControlName);

			if (checkControl?.errors && !checkControl.errors['matching']) {
				return null;
			}

			if (control?.value !== checkControl?.value) {
				controls.get(checkControlName)?.setErrors({ matching: true });
				return { matching: true };
			}
			return null;
		};
	}

	/**
	 * Fill the form with error data.
	 * @param form Form to fill.
	 * @param errors Array of errors.
	 */
	public static fillFormWithError<T>(form: FormGroup, errors: unknown): void {
		if (errors instanceof AppValidationError && errors.validationData) {
			const controlKeys = Object.keys(form.controls) as (keyof T)[];
			controlKeys.forEach(key => {
				const error = errors?.validationData?.[key];
				const control = form.controls[key as string];
				if (error && control) {
					control.setErrors({
						invalid: error,
					});
				}
			});
		}
	}
}
