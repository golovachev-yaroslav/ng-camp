/** Presigned Url DTO. */
export interface PresignedUrlDto {

  /** Upload url. */
	readonly url: string;

  /** Params. */
	readonly params: {

    // No need to know the internal s3 data, we are supposed to just copy it to query params.
    [key: string]: number | string;
  };
}
