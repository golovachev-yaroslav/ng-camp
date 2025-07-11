import { Component, DestroyRef, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor, MatButton } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

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
	/** Is an authorized user. */
	protected readonly isAuthorizedUser$: Observable<boolean>;

	private readonly authService = inject(AuthService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	public constructor() {
		this.isAuthorizedUser$ = this.createAuthStream();
	}

	private createAuthStream(): Observable<boolean> {
		return this.authService.isAuthorizedUser().pipe(
			takeUntilDestroyed(this.destroyRef),
		);
	}

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
