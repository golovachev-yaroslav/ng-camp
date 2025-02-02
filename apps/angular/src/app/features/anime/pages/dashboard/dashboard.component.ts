import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

/** Periodic element. */
export type PeriodicElement = {

	/** Image. */
	readonly image: string;

	/** Title eng. */
	readonly title_eng: string;

	/** Image. */
	readonly weight: number;

	/** Image. */
	readonly symbol: string;
};

/** Mock Data. */
const ELEMENT_DATA: PeriodicElement[] = [
	{ title_eng: '1', image: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ title_eng: '2', image: 'Helium', weight: 4.0026, symbol: 'He' },
	{ title_eng: '3', image: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ title_eng: '4', image: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ title_eng: '5', image: 'Boron', weight: 10.811, symbol: 'B' },
	{ title_eng: '6', image: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ title_eng: '7', image: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ title_eng: '8', image: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ title_eng: '9', image: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ title_eng: '10', image: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/** Dashboard component. */
@Component({
	selector: 'camp-dashboard',
	standalone: true,
	imports: [MatTableModule],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
	/** Columns. */
	public readonly displayedColumns: string[] = ['image', 'title_eng', 'weight', 'symbol'];

	/** Data. */
	public readonly dataSource = ELEMENT_DATA;
}
