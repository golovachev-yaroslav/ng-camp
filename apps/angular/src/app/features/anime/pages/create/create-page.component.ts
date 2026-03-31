import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeFormComponent } from './../../components/anime-form/anime-form.component';

/** Anime create page component. */
@Component({
	selector: 'camp-create-page',
	standalone: true,
	imports: [CommonModule, AnimeFormComponent],
	templateUrl: './create-page.component.html',
	styleUrl: './create-page.component.css',
})
export class CreatePageComponent {}
