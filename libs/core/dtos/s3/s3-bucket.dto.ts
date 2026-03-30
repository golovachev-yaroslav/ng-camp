import { ConfigType } from '@js-camp/core/models/enums/s3-config';

/** S3 bucket DTO. */
export interface S3BucketDto {

	/** Config. */
	readonly config: ConfigType;

	/** Filename. */
	readonly filename: string;

	/** Content type. */
	readonly content_type: string;

	/** Content length. */
	readonly content_length: number;
}
