import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor } from '@angular/material/button';

/** Header component. */
@Component({
	selector: 'camp-header',
	standalone: true,
	imports: [MatToolbarModule, RouterLink, MatAnchor],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {}
