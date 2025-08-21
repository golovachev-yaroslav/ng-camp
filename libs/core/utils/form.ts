import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

/**
 * Form utility type to use with `NonNullableFormBuilder`.
 * Any child of AbstractControl (e.g. FormControl, FormGroup, FormArray) will be used as is without any transformations.\
 * Important! This utility is intended to be used with `NonNullableFormBuilder`.
 * @example
 * ```ts
 * interface UserEditFormControls = ControlsOf<{
 *   readonly firstName: string;
 *   readonly lastName: string
 * }>
 *
 * public class UserEditFormComponent {
 *   public constructor(fb: NonNullableFormBuilder) {
 *     const form = this.fb.group<UserEditFormControls>({
 *       firstName: this.fb.control(''),
 *       lastName: this.fb.control(''),
 *     })
 *   }
 * }
 * ```
 */

export type ControlsOf<T> = {
	[K in keyof T]: T[K] extends object
		? FormGroup<ControlsOf<T[K]>>
		: FormControl<T[K]>;
};

/** Utility type to get value from Angular `AbstractControl`. */
export type FormValues<T> = {
  [key in keyof T]: T[key] extends AbstractControl
    ? T[key]['value']
    : never
};

/** Utility type to get raw value from Angular `AbstractControl`. */
export type RawFormValues<T> = {
  [key in keyof T]: T[key] extends AbstractControl
    ? ReturnType<T[key]['getRawValue']>
    : never
};
