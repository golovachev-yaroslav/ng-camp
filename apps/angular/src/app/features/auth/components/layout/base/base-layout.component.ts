import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Base layout component. */
@Component({
	selector: 'camp-base-layout',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './base-layout.component.html',
	styleUrl: './base-layout.component.css',
})
export class BaseLayoutComponent {

}
