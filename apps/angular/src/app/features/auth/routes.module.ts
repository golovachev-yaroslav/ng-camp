import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/** Routes object. */
export const routes: Routes = [
	{
		title: 'Register',
		path: 'register',
		loadComponent: () =>
			import('./pages/register/register-page.component')
				.then(m => m.RegisterPageComponent),
	},
	{
		title: 'Login',
		path: 'login',
		loadComponent: () =>
			import('./pages/login/login-page.component')
				.then(m => m.LoginPageComponent),
	},
];

/** Auth routes module. */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutesModule { }
