import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Genre } from '@js-camp/core/models/genre/genre';
import { GenreDto } from '@js-camp/core/dtos/genre/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { Pagination } from '@js-camp/core/models/pagintation';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { environment } from '@js-camp/angular/environments/environment';

import { QueryParams } from '@js-camp/core/models/query-params';
import { BaseHttpParamsMapper } from '@js-camp/core/mappers/base-http-params.mapper';

/** Endpoints for genre API. */
@Injectable({
	providedIn: 'root',
})
export class GenreService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly genreApiUrl = `${environment.apiUrl}/api/v1/anime/genres/`;

	/**
	 * Get genre list from server.
	 * @param parameters Genre query params.
	 */
	public getGenreList(parameters: QueryParams): Observable<Pagination<Genre>> {
		const params = new HttpParams({ fromObject: { ...BaseHttpParamsMapper.toDto(parameters) } });

		return this.httpService
			.get<PaginationDto<GenreDto>>(this.genreApiUrl, { params })
			.pipe(map(data => PaginationMapper.fromDto(data, GenreMapper.fromDto)));
	}
}
