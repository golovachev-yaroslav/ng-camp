import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

/** Poster data. */
interface PosterData {

	/** Poster URL. */
	readonly url: string;

	/** Title. */
	readonly title: string;
}

/** Preview poster modal component. */
@Component({
	selector: 'camp-preview-poster-modal',
	standalone: true,
	imports: [CommonModule, MatDialogTitle, MatDialogContent],
	templateUrl: './preview-poster-modal.component.html',
	styleUrl: './preview-poster-modal.component.css',
})
export class PreviewPosterModalComponent {
	/** Data. */
	protected readonly data = inject<PosterData>(MAT_DIALOG_DATA);
}
