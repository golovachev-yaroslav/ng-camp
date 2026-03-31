import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from '../../components/login-form/login-form.component';

/** Login page component. */
@Component({
	selector: 'camp-login-page',
	standalone: true,
	imports: [CommonModule, LoginFormComponent],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
