import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

import { environment } from '@js-camp/angular/environments/environment';
import { ConfigType } from '@js-camp/core/models/enums/s3-config';
import { PresignedUrlDto } from '@js-camp/core/dtos/s3/presigned-url.dto';
import { S3BucketMapper } from '@js-camp/core/mappers/s3-bucket.mapper';
import { XmlFileMapper } from '@js-camp/core/mappers/xml-file.mapper';

/** Endpoints for S3 API. */
@Injectable({
	providedIn: 'root',
})
export class ImageService {
	private readonly httpService = inject(HttpClient);

	/** Url for this service. */
	private readonly s3ApiUrl = `${environment.apiUrl}/api/v1/s3/`;

	/**
	 * Upload image URL.
	 * @param file Image.
	 * @param configType Image bucket type.
	 */
	public upload(file: File, configType: ConfigType): Observable<string | null> {
		return this.httpService
			.post<PresignedUrlDto>(`${this.s3ApiUrl}get-params/`, S3BucketMapper.toDto(file, configType))
			.pipe(
				map(params => this.getImageFormData(params, file)),
				switchMap(({ url, formData }) => this.httpService.post(url, formData, { responseType: 'text' })),
				map((xml: string) => XmlFileMapper.fromDto(xml)),
			);
	}

	/**
	 * Puts instructions in form data.
	 * @param presignedImage Presigned image.
	 * @param file Image.
	 */
	private getImageFormData(presignedImage: PresignedUrlDto, file: File): { readonly url: string; readonly formData: FormData; } {
		const formData = new FormData();

		Object.keys(presignedImage.params).forEach(key => {
			formData.append(key, presignedImage.params[key] as string);
		});
		formData.append('file', file);

		return {
			url: presignedImage.url,
			formData,
		};
	}
}
