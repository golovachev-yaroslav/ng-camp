import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Header component. */
@Component({
	selector: 'camp-header',
	standalone: true,
	imports: [MatToolbarModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
