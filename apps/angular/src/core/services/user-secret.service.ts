import { inject, Injectable, signal } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';

import { UserSecret } from '@js-camp/core/models/auth/user-secret';

import { StorageService } from './storage.service';

const SECRET_KEY = 'NG_SECRET_KEY';

/** User secret storage. */
@Injectable({
	providedIn: 'root',
})
export class UserSecretService {

	/** Storage service. */
	private readonly storageService = inject(StorageService);

	/** Current secret. */
	protected readonly secret = signal<string | null>(null);

	/**
	 * Save a secret.
	 * @param secret Secret to save.
	 */
	public save(secret: UserSecret): Observable<UserSecret> {
		return this.storageService.save(SECRET_KEY, secret).pipe(
			map(() => {
				this.secret.set(secret.access);
				return secret;
			}),
		);
	}

	/**
	 * Get a secret.
	 */
	public get(): Observable<UserSecret | null> {
		if (this.storageService.get(SECRET_KEY)) {
			return this.storageService.get(SECRET_KEY);
		}

		return of(null);
	}

	/** Removes the secret. */
	public remove(): Observable<void> {
		return this.storageService.remove(SECRET_KEY).pipe(tap(() => this.secret.set(null)));
	}
}
