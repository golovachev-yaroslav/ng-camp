import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime/anime.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { Pagination } from '@js-camp/core/models/pagintation';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { environment } from '@js-camp/angular/environments/environment';

/** Endpoints for anime API. */
@Injectable({
	providedIn: 'root',
})
export class AnimeService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly animeApiUrl = `${environment.apiUrl}/api/v1/anime/`;

	/**
	 * Get anime from server.
	 */
	public getAnimeList(): Observable<Pagination<Anime>> {
		return this.httpService
			.get<PaginationDto<AnimeDto>>(this.animeApiUrl)
			.pipe(map(data => PaginationMapper.fromDto(data, AnimeMapper.fromDto)));
	}
}
