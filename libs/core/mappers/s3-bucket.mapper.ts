import { S3BucketDto } from '@js-camp/core/dtos/s3/s3-bucket.dto';
import { ConfigType } from '@js-camp/core/models/enums/s3-config';

/** S3 file bucket mapper. */
export namespace S3BucketMapper {
	/**
	 * Converts model to DTO.
	 * @param file File.
	 * @param configType S3 bucket.
	 */
	export function toDto(file: File, configType: ConfigType): S3BucketDto {
		return {
			config: configType,
			filename: file.name,
			content_type: file.type,
			content_length: file.size
		}
	}
}
