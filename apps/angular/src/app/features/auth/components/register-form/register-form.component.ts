import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

import { FormValidation } from '@js-camp/angular/core/utils/form-validation';
import { AuthService } from '@js-camp/angular/core/services/auth.service';
import { ControlsOf } from '@js-camp/core/utils/form';
import { Register } from '@js-camp/core/models/auth/register';

/** Register form. */
type RegisterForm = ControlsOf<Register & { confirmPassword: string; }>;

/** Register form component. */
@Component({
	selector: 'camp-register-form',
	standalone: true,
	imports: [CommonModule, MatFormFieldModule, MatInput, MatButton, MatIconModule, ReactiveFormsModule, MatIconButton],
	templateUrl: './register-form.component.html',
	styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
	private readonly snackBar = inject(MatSnackBar);

	private readonly authService = inject(AuthService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	/** Form builder. */
	protected readonly formBuilder = inject(NonNullableFormBuilder);

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Us hidden password. */
	protected readonly isHiddenPassword = signal(true);

	/** Us hidden confirm password. */
	protected readonly isHiddenConfirmPassword = signal(true);

	/** Password minimal length. */
	protected readonly passwordMinLength = 8;

	/**
	 * Toggle password.
	 * @param event Mouse event.
	 */
	protected onTogglePassword(event: MouseEvent): void {
		event.stopPropagation();
		this.isHiddenPassword.set(!this.isHiddenPassword());
	}

	/**
	 * Toggle confirm password.
	 * @param event Mouse event.
	 */
	protected onToggleConfirmPassword(event: MouseEvent): void {
		event.stopPropagation();
		this.isHiddenConfirmPassword.set(!this.isHiddenConfirmPassword());
	}

	/** Register form group. */
	protected readonly registerForm = this.formBuilder.group<RegisterForm>(
		{
			email: this.formBuilder.control('', [Validators.required, Validators.email]),
			firstName: this.formBuilder.control('', [Validators.required]),
			lastName: this.formBuilder.control('', [Validators.required]),
			password: this.formBuilder.control('', [Validators.required, Validators.minLength(this.passwordMinLength)]),
			confirmPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(this.passwordMinLength)]),
		},
		{
			validators: [FormValidation.matchControlValues('password', 'confirmPassword')],
		},
	);

	/** Register a user. */
	protected onRegister(): void {
		if (this.registerForm.invalid) {
			return;
		}

		this.isLoading.set(true);
		this.authService
			.register(this.registerForm.getRawValue())
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				catchError((errors: unknown) => {
					this.isLoading.set(false);
					FormValidation.fillFormWithError(this.registerForm, errors);

					return throwError(() => errors);
				}),
			)
			.subscribe(() => {
				this.snackBar.open('Register has been completed.', undefined, {
					duration: 3000,
				});
				this.router.navigate(['/']);
			});
	}
}
