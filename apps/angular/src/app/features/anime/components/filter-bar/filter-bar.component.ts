import { Component, OnInit, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AnimeType } from '@js-camp/core/models/enums/anime-type';

/** Filter bar component. */
@Component({
	selector: 'camp-filter-bar',
	standalone: true,
	imports: [
		CommonModule,
		MatFormField,
		MatIcon,
		MatIconButton,
		MatInput,
		MatLabel,
		MatOption,
		MatSelect,
		MatSuffix,
		ReactiveFormsModule,
	],
	templateUrl: './filter-bar.component.html',
	styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent implements OnInit {
	/** Search emit. */
	protected readonly search = output<string | undefined>();

	/** Filter emit. */
	protected readonly filter = output<AnimeType[]>();

	/** Types list. */
	public readonly types = input.required<AnimeType[]>();

	/** Selected types. */
	public readonly selectedTypes = input<AnimeType[]>([]);

	/** Search value. */
	public readonly searchValue = input<string>();

	/** Is hidden clear button. */
	protected readonly isHiddenClearButton = signal(true);

	/** Anime type enum. */
	protected readonly animeType = AnimeType;

	/** Form builder. */
	protected readonly formBuilder = inject(NonNullableFormBuilder);

	/** Search form group. */
	protected readonly searchForm = this.formBuilder.group<{ search: string; }>({
		search: '',
	});

	/**
	 * Change filter.
	 * @param event Filter change event.
	 */
	protected onFilterChange(event: MatSelectChange): void {
		this.filter.emit(event.value);
	}

	/** Input search value. */
	protected onInputSearchValue(): void {
		this.isHiddenClearButton.set(this.searchForm.value.search === '');
	}

	/** Search movie. */
	protected onSearch(): void {
		this.search.emit(this.searchForm.value.search);
	}

	/** Clear search. */
	protected onClearSearch(): void {
		this.searchForm.setValue({
			search: '',
		});
		this.isHiddenClearButton.set(true);
		this.search.emit('');
	}

	/** @inheritdoc */
	public ngOnInit(): void {
		this.searchForm.setValue({
			search: this.searchValue() ?? '',
		});
		this.isHiddenClearButton.set(!this.searchValue());
	}
}
