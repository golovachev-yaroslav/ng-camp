import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { catchError, throwError } from 'rxjs';

import { FormValidation } from '@js-camp/angular/core/utils/form-validation';
import { AuthService } from '@js-camp/angular/core/services/auth.service';
import { ControlsOf } from '@js-camp/core/utils/form';
import { Login } from '@js-camp/core/models/auth/login';

/** Login form. */
type LoginForm = ControlsOf<Login>;

/** Login form component. */
@Component({
	selector: 'camp-login-form',
	standalone: true,
	imports: [CommonModule, MatFormFieldModule, MatInput, MatButton, MatIconModule, ReactiveFormsModule, MatIconButton],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
	private readonly authService = inject(AuthService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	/** Form builder. */
	protected readonly formBuilder = inject(NonNullableFormBuilder);

	/** Loading state. */
	protected readonly isLoading = signal(false);

	/** Us hidden password. */
	protected readonly isHiddenPassword = signal(true);

	/**
	 * Toggle password.
	 * @param event Mouse event.
	 */
	protected onTogglePassword(event: MouseEvent): void {
		event.stopPropagation();
		this.isHiddenPassword.set(!this.isHiddenPassword());
	}

	/** Login form group. */
	protected readonly loginForm = this.formBuilder.group<LoginForm>(
		{
			email: this.formBuilder.control('golovachev@saritasa.com', [Validators.required, Validators.email]),
			password: this.formBuilder.control('qweQWE123!', [Validators.required]),
		},
	);

	/** Login. */
	protected onLogin(): void {
		if (this.loginForm.invalid) {
			return;
		}

		this.isLoading.set(true);
		this.authService
			.login(this.loginForm.getRawValue())
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				catchError((errors: unknown) => {
					this.isLoading.set(false);
					FormValidation.fillFormWithError(this.loginForm, errors);

					return throwError(() => errors);
				}),
			)
			.subscribe(() => {
				this.router.navigate(['/']);
			});
	}
}
