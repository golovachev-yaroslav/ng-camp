import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { UserSecret } from '@js-camp/core/models/auth/user-secret';
import { environment } from '@js-camp/angular/environments/environment';

import { UserSecretService } from '../services/user-secret.service';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

/** Adds JWT to requests using Authorization HTTP header. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	/** User secret. */
	private readonly userSecret = inject(UserSecretService);

	/** @inheritdoc */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.shouldInterceptToken(req.url)) {
			const secret = this.userSecret.secret();

			if (secret) {
				const newReq = req.clone({ headers: this.appendAuthorizationHeader(req.headers, secret) });
				return next.handle(newReq);
			}
		}

		return next.handle(req);
	}

	/**
	 * Checks if a request is for authorization or refresh token.
	 * @param url - Request url.
	 */
	private shouldInterceptToken(url: string): boolean {
		return url.startsWith(environment.apiUrl.toString());
	}

	/**
	 * Appends authorization header to a list of `headers`.
	 * @param headers Headers list.
	 * @param userSecret User secret.
	 */
	private appendAuthorizationHeader(headers: HttpHeaders, userSecret: UserSecret): HttpHeaders {
		return headers.set(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${userSecret.access}`);
	}
}
