import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

/** Base layout component. */
@Component({
	selector: 'camp-base-layout',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
	templateUrl: './base-layout.component.html',
	styleUrl: './base-layout.component.css',
})
export class BaseLayoutComponent {

}
