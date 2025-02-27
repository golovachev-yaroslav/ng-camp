import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Page not found component. */
@Component({
	selector: 'camp-page-not-found',
	standalone: true,
	imports: [],
	templateUrl: './page-not-found.component.html',
	styleUrl: './page-not-found.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
