import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

/** Refresh token when expires. */
@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

	/** Auth service. */
	private readonly authService = inject(AuthService);

	/** @inheritdoc */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(req).pipe(
			catchError((error: unknown) => {
				if (error instanceof HttpErrorResponse && this.shouldSkip401(error)) {
					return throwError(() => error);
				}

				return this.authService.refreshSecret().pipe(
					switchMap(() => next.handle(req)),
				);
			}),
		);
	}

	/**
	 * Should skip 401 error.
	 * @param error Error.
	 */
	private shouldSkip401(error: HttpErrorResponse): boolean {
		return !error.message.includes('401');
	}
}
