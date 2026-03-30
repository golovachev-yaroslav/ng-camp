import { Season } from '../../models/enums/season';
import { Source } from '../../models/enums/source';
import { Rating } from '../../models/enums/rating';

import { AnimeDto } from './anime.dto';
import { GenreDto } from '../genre/genre.dto';
import { StudioDto } from '../studio/studio.dto';

/** Anime detail DTO. */
export interface AnimeDetailDto extends AnimeDto {

	/** Season. */
	readonly season: Season;

	/** Source. */
	readonly source: Source;

	/** Airing. */
	readonly airing: boolean;

	/** Synopsis. */
	readonly synopsis: string;

	/** Rating. */
	readonly rating: Rating;

	/** Genres data. */
	readonly genres_data: readonly GenreDto[];

	/** Studios data. */
	readonly studios_data: readonly StudioDto[];

	/** Trailer Youtube id. */
	readonly trailer_youtube_id: string;
}
