import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, switchMap, catchError, throwError } from 'rxjs';

import { environment } from '@js-camp/angular/environments/environment';
import { Register } from '@js-camp/core/models/auth/register';
import { Login } from '@js-camp/core/models/auth/login';
import { UserSecretDto } from '@js-camp/core/dtos/auth/user-secret-dto';
import { UserSecret } from '@js-camp/core/models/auth/user-secret';
import { UserSecretMapper } from '@js-camp/core/mappers/user-secret.mapper';
import { RegisterMapper } from '@js-camp/core/mappers/register.mapper';
import { LoginMapper } from '@js-camp/core/mappers/login.mapper';
import { AppValidationError } from '@js-camp/core/models/app-error';

import { UserSecretService } from './user-secret.service';

/** Endpoints for auth API. */
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly httpService = inject(HttpClient);

	private readonly userSecretStorage = inject(UserSecretService);

	/** Url for this service. */
	private readonly authApiUrl = `${environment.apiUrl}/api/v1/auth/`;

	/** Url for register a user. */
	private readonly registerApiUrl = `${this.authApiUrl}register/`;

	/** Url for login a user. */
	private readonly loginApiUrl = `${this.authApiUrl}login/`;

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

	/**
	 * Login.
	 * @param data Login data.
	 */
	public login(data: Login): Observable<UserSecret> {
		return this.httpService.post<UserSecretDto>(this.loginApiUrl, LoginMapper.toDto(data)).pipe(
			map(secretDto => UserSecretMapper.fromDto(secretDto)),
			switchMap(secret => this.userSecretStorage.save(secret)),
			catchError((error: unknown): Observable<never> => {
				if (error instanceof HttpErrorResponse) {
					const mappedError = LoginMapper.validationErrorFromDto(error.error.errors);

					return throwError(() => new AppValidationError(error.message, mappedError));
				}

				return throwError(() => new Error('Unknown error'));
			}),
		);
	}

	/** Logout. */
	public logout(): Observable<void> {
		return this.userSecretStorage.remove();
	}

	/** Init current user stream. */
	public isAuthorizedUser(): Observable<boolean> {
		return this.userSecretStorage.get().pipe(
			map(secret => Boolean(secret)),
		);
	}
}
