import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: 'anime',
		title: 'Anime',
		loadComponent: () =>
			import('./features/anime/components/layout/base-layout.component')
				.then(m => m.BaseLayoutComponent),
		loadChildren: () => import('./features/anime/routes.module')
			.then(module => module.RoutesModule),
	},
	{
		path: '',
		redirectTo: '/anime',
		pathMatch: 'full',
	},
	{
		path: '**',
		title: 'Page not found',
		component: PageNotFoundComponent,
	},
];

/** App routes module. */
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutes {}
