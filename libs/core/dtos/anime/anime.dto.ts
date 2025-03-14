import { AnimeStatus } from '../../models/enums/anime-status';
import { AnimeType } from '../../models/enums/anime-type';

import { AiredDto } from './aired.dto';

/** Anime DTO. */
export interface AnimeDto {

	/** Unique id. */
	readonly id: number;

	/** Created date. */
	readonly created: string;

	/**  Modified date. */
	readonly modified: string;

	/** English title. */
	readonly title_eng: string;

	/** Japanese title. */
	readonly title_jpn: string;

	/** Image. */
	readonly image: string;

	/** Airing dates. */
	readonly aired: AiredDto;

	/** Type. */
	readonly type: AnimeType;

	/** Airing status. */
	readonly status: AnimeStatus;

	/** Calculated score. */
	readonly score: number | null;

	/** User score. */
	readonly user_score: number | null;
}
