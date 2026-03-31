import { Component, inject, input, computed } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/** YouTube player component. */
@Component({
	selector: 'camp-youtube-player',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './youtube-player.component.html',
	styleUrl: './youtube-player.component.css',
})
export class YoutubePlayerComponent {
	/** YouTube data source. */
	public readonly src = input.required<string>();

	private readonly sanitizer = inject(DomSanitizer);

	/** Sanitized url. */
	public readonly safeSrc = computed((): SafeResourceUrl => this.sanitizer.bypassSecurityTrustResourceUrl(this.src()));
}
