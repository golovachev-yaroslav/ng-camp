import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

/** Authorized guard. */
export const authorizedGuard = (): CanMatchFn => () => {
	const router = inject(Router);
	const authService = inject(AuthService);

	if (!authService.isAuthorizedUser()) {
		return router.parseUrl('/auth/login');
	}

	return true;
};
