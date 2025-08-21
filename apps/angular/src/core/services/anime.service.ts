import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, map, switchMap, catchError, throwError } from 'rxjs';

import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeDetail } from '@js-camp/core/models/anime/anime-detail';
import { AnimeDto } from '@js-camp/core/dtos/anime/anime.dto';
import { AnimeDetailDto } from '@js-camp/core/dtos/anime/anime-detail.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeDetailMapper } from '@js-camp/core/mappers/anime-detail.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeHttpParamsMapper } from '@js-camp/core/mappers/anime-http-params.mapper';
import { Pagination } from '@js-camp/core/models/pagintation';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { environment } from '@js-camp/angular/environments/environment';
import { AnimeParams } from '@js-camp/core/models/anime/anime-params';
import { AppValidationError } from '@js-camp/core/models/app-error';
import { AnimeForm } from '@js-camp/core/models/anime/anime-form';

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

	/**
	 * Get anime by id.
	 * @param id Anime's id.
	 */
	public getAnime(id: number): Observable<AnimeDetail> {
		return this.httpService
			.get<AnimeDetailDto>(`${this.animeApiUrl}${id}/`)
			.pipe(map(data => AnimeDetailMapper.fromDto(data)));
	}

	/**
	 * Creates anime.
	 * @param payload Anime details.
	 */
	public createAnime(payload: AnimeForm): Observable<AnimeDetail> {
		return this.httpService.post<AnimeDetailDto>(
			this.animeApiUrl,
			AnimeDetailMapper.toDto(payload),
		).pipe(
			map(dto => AnimeDetailMapper.fromDto(dto)),
			catchError((error: unknown): Observable<never> => {
				if (error instanceof HttpErrorResponse) {
					const mappedError = AnimeDetailMapper.validationErrorFromDto(error.error.errors);

					return throwError(() => new AppValidationError(error.message, mappedError));
				}

				return throwError(() => new Error('Unknown error'));
			}),
		);
	}

	/**
	 * Delete anime by id.
	 * @param id ID of anime.
	 */
	public deleteAnime(id: number): Observable<void> {
		return this.httpService.delete<void>(`${this.animeApiUrl}${id}/`);
	}
}
