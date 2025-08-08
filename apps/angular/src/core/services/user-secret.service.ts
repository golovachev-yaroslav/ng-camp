import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';

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
	public readonly secret = toSignal(this.storageService.get<UserSecret>(SECRET_KEY));

	/**
	 * Save a secret.
	 * @param secret Secret to save.
	 */
	public save(secret: UserSecret): Observable<UserSecret> {
		return this.storageService.save(SECRET_KEY, secret).pipe(
			map(() => secret),
		);
	}

	/** Removes the secret. */
	public remove(): Observable<void> {
		return this.storageService.remove(SECRET_KEY);
	}
}
