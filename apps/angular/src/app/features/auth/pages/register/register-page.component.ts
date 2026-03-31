import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormComponent } from '../../components/register-form/register-form.component';

/** Register page component. */
@Component({
	selector: 'camp-register-page',
	standalone: true,
	imports: [CommonModule, RegisterFormComponent],
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {}
