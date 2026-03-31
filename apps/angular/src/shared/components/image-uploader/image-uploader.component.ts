import { Component, ElementRef, signal, output, viewChild, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

/** Image uploader component. */
@Component({
	selector: 'camp-image-uploader',
	standalone: true,
	imports: [CommonModule, MatIconModule, MatButton],
	templateUrl: './image-uploader.component.html',
	styleUrl: './image-uploader.component.css',
})
export class ImageUploaderComponent {

	private imageInput = viewChild.required<ElementRef<HTMLInputElement>>('imageInput');

	/** Select image emit. */
	protected readonly select = output<File | undefined>();

	/** Preview image. */
	protected readonly preview = signal<string | null>(null);

	/** Url. */
	public readonly url = input<string | null>(null);

	public constructor() {
		effect(() => {
			this.preview.set(this.url());
		}, { allowSignalWrites: true });
	}

	/** Select file. */
	protected selectFile(): void {
		if (this.imageInput !== null) {
			this.imageInput().nativeElement.click();
		}
	}

	/**
	 * Upload a file.
	 * @param event Event.
	 */
	protected uploadFile(event: Event): void {
		const element = event.currentTarget as HTMLInputElement;
		if (!element.files?.length) {
			return;
		}

		const file = element.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			const base64 = reader.result as string;

			this.preview.set(base64);
			this.select.emit(file);
		};

		reader.readAsDataURL(file);
	}
}
