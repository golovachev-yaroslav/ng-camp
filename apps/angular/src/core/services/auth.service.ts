import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';

import { environment } from '@js-camp/angular/environments/environment';
import { Register } from '@js-camp/core/models/auth/register';
import { UserSecretDto } from '@js-camp/core/dtos/auth/user-secret-dto';
import { UserSecret } from '@js-camp/core/models/auth/user-secret';
import { UserSecretMapper } from '@js-camp/core/mappers/user-secret.mapper';
import { RegisterMapper } from '@js-camp/core/mappers/register.mapper';
import { AppValidationError } from '@js-camp/core/models/app-error';

/** Endpoints for auth API. */
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly authApiUrl = `${environment.apiUrl}/api/v1/auth/`;

	/** Url for register a user. */
	private readonly registerApiUrl = `${this.authApiUrl}register/`;

	/**
	 * Register a user.
	 * @param data Register data.
	 */
	public register(data: Register): Observable<UserSecret> {
		return this.httpService.post<UserSecretDto>(this.registerApiUrl, RegisterMapper.toDto(data)).pipe(
			map(secretDto => UserSecretMapper.fromDto(secretDto)),
			catchError((error: unknown): Observable<never> => {
				if (error instanceof HttpErrorResponse) {
					const mappedError = RegisterMapper.validationErrorFromDto(error.error.errors);

					return throwError(() => new AppValidationError(error.message, mappedError));
				}

				return throwError(() => new Error('Unknown error'));
			}),
		);
	}
}
