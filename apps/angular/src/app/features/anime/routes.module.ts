import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { authorizedGuard } from '@js-camp/angular/core/guards/authorized.guard';

import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';

/** Routes object. */
export const routes: Routes = [
	{
		title: 'Dashboard',
		path: '',
		component: DashboardPageComponent,
	},
	{
		title: 'Details',
		path: ':id',
		canMatch: [authorizedGuard()],
		component: DetailsPageComponent,
	},
];

/** Anime routes module. */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutesModule { }
