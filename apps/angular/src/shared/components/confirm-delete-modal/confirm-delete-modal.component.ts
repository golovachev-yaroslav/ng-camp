import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialogTitle,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
} from '@angular/material/dialog';

/** Confirm delete data. */
export interface ConfirmDeleteData {

	/** Title. */
	readonly title: string;

	/** Message. */
	readonly message: string;
}

/** Preview poster modal component. */
@Component({
	selector: 'camp-confirm-delete-modal',
	standalone: true,
	imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
	templateUrl: './confirm-delete-modal.component.html',
	styleUrl: './confirm-delete-modal.component.css',
})
export class ConfirmDeleteModalComponent {
	/** Data. */
	protected readonly data = inject<ConfirmDeleteData>(MAT_DIALOG_DATA);

	public constructor(private dialogRef: MatDialogRef<ConfirmDeleteModalComponent>) {
		this.dialogRef.addPanelClass('confirm-delete-panel');
		this.dialogRef.disableClose = true;
	}
}
