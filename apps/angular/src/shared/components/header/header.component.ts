import { Component, DestroyRef, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor, MatButton } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from '@js-camp/angular/core/services/auth.service';

/** Header component. */
@Component({
	selector: 'camp-header',
	standalone: true,
	imports: [MatToolbarModule, RouterLink, MatAnchor, MatButton, CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	private readonly authService = inject(AuthService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	/** Is an authorized user. */
	protected readonly isAuthorizedUser = this.authService.isAuthorizedUser;

	/** Logout. */
	protected onLogout(): void {
		this.authService
			.logout()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => {
				this.router.navigate(['auth/login']);
			});
	}
}
