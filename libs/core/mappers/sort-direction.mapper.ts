import { SortDirection } from '@angular/material/sort';

import { QueryParams } from '../models/query-params';

export namespace SortDirectionMapper {

	/**
	 * Convert a sort direction from model to DTO.
	 * @param direction Sort direction.
	 * @param field The column being sorted.
	 */
	export function toDto(field: string, direction: SortDirection): string {
		if (!field || !direction) {
			return '';
		}

		if (direction === 'desc') {
			return `-${field}`;
		}

		return field;
	}

	/**
	 * Convert a sort direction from DTO to mode.
	 * @param direction Sort direction.
	 * @param field The column being sorted.
	 */
	export function fromDto(field: string, direction: SortDirection): Pick<QueryParams, 'field' | 'direction'> {
		return {
			field: field ?? '',
			direction: direction ?? '',
		};
	}
}
