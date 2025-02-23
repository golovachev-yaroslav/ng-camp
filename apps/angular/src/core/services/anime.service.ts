import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime/anime.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeHttpParamsMapper } from '@js-camp/core/mappers/anime-http-params.mapper';
import { Pagination } from '@js-camp/core/models/pagintation';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { environment } from '@js-camp/angular/environments/environment';
import { AnimeParams } from '@js-camp/core/models/anime/anime-params';

/** Endpoints for anime API. */
@Injectable({
	providedIn: 'root',
})
export class AnimeService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly animeApiUrl = `${environment.apiUrl}/api/v1/anime/`;

	/**
	 * Get anime list from server.
	 * @param parameters Anime query params.
	 */
	public getAnimeList(parameters: AnimeParams): Observable<Pagination<Anime>> {
		const params = new HttpParams({ fromObject: { ...AnimeHttpParamsMapper.toDto(parameters) } });

		return this.httpService
			.get<PaginationDto<AnimeDto>>(this.animeApiUrl, { params })
			.pipe(map(data => PaginationMapper.fromDto(data, AnimeMapper.fromDto)));
	}
}
