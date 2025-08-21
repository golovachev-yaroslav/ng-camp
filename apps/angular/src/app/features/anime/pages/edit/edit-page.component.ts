import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeFormComponent } from './../../components/anime-form/anime-form.component';

/** Anime edit page component. */
@Component({
	selector: 'camp-edit-page',
	standalone: true,
	imports: [CommonModule, AnimeFormComponent],
	templateUrl: './edit-page.component.html',
	styleUrl: './edit-page.component.css',
})
export class EditPageComponent {}
