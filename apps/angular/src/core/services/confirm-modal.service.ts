import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
	ConfirmDeleteData,
	ConfirmDeleteModalComponent,
} from '@js-camp/angular/shared/components/confirm-delete-modal/confirm-delete-modal.component';

/** Confirm delete modal service. */
@Injectable({
	providedIn: 'root',
})
export class ConfirmModalService {

	private readonly dialog = inject(MatDialog);

	/**
	 * Open confirm delete modal.
	 * @param data Data modal.
	 */
	public open(data: ConfirmDeleteData): Observable<boolean | undefined> {
		return this.dialog.open<ConfirmDeleteModalComponent, ConfirmDeleteData, boolean>(ConfirmDeleteModalComponent, {
			data,
			autoFocus: false,
		})
			.afterClosed();
	}
}
