import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AnimePageComponent } from './pages/anime/anime-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';

/** Routes object. */
export const routes: Routes = [
	{
		path: '',
		component: AnimePageComponent,
	},
	{
		path: ':id',
		component: DetailsPageComponent,
	},
];

/** Anime routes module. */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutesModule { }
