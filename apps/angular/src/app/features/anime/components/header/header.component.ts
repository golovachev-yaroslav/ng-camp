import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Header component. */
@Component({
	selector: 'camp-header',
	standalone: true,
	imports: [MatToolbarModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {}
