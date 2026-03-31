import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Studio } from '@js-camp/core/models/studio/studio';
import { StudioDto } from '@js-camp/core/dtos/studio/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { Pagination } from '@js-camp/core/models/pagintation';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { environment } from '@js-camp/angular/environments/environment';

import { QueryParams } from '@js-camp/core/models/query-params';
import { BaseHttpParamsMapper } from '@js-camp/core/mappers/base-http-params.mapper';

/** Endpoints for studio API. */
@Injectable({
	providedIn: 'root',
})
export class StudioService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly studioApiUrl = `${environment.apiUrl}/api/v1/anime/studios/`;

	/**
	 * Get studio list from server.
	 * @param parameters Studio query params.
	 */
	public getStudioList(parameters: QueryParams): Observable<Pagination<Studio>> {
		const params = new HttpParams({ fromObject: { ...BaseHttpParamsMapper.toDto(parameters) } });

		return this.httpService
			.get<PaginationDto<StudioDto>>(this.studioApiUrl, { params })
			.pipe(map(data => PaginationMapper.fromDto(data, StudioMapper.fromDto)));
	}
}
