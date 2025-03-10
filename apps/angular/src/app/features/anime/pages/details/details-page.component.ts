import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Anime details page component. */
@Component({
	selector: 'camp-details-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './details-page.component.html',
	styleUrl: './details-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPageComponent {}
