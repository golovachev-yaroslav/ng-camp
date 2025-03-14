import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterPageComponent } from './pages/register/register-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';

/** Routes object. */
export const routes: Routes = [
	{
		title: 'Register',
		path: 'register',
		component: RegisterPageComponent,
	},
	{
		title: 'Login',
		path: 'login',
		component: LoginPageComponent,
	},
];

/** Auth routes module. */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutesModule { }
