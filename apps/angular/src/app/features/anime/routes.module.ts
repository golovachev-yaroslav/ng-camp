import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { authorizedGuard } from '@js-camp/angular/core/guards/authorized.guard';

import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { CreatePageComponent } from './pages/create/create-page.component';
import { EditPageComponent } from './pages/edit/edit-page.component';

/** Routes object. */
export const routes: Routes = [
	{
		title: 'Dashboard',
		path: '',
		component: DashboardPageComponent,
	},
	{
		title: 'Create',
		path: 'create',
		canMatch: [authorizedGuard()],
		component: CreatePageComponent,
	},
	{
		title: 'Details',
		path: ':id',
		canMatch: [authorizedGuard()],
		children: [
			{
				path: '',
				component: DetailsPageComponent,
			},
			{
				path: 'edit',
				title: 'Edit',
				component: EditPageComponent,
			},
		],
	},
];

/** Anime routes module. */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutesModule { }
