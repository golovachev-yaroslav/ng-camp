import { Season } from '../enums/season';
import { Source } from '../enums/source';
import { Rating } from '../enums/rating';
import { OmitImmerable } from '../immerable';

import { Anime } from './anime';

/** Anime detail. */
export class AnimeDetail extends Anime {

	/** Season. */
	public readonly season: Season;

	/** Source. */
	public readonly source: Source;

	/** Airing. */
	public readonly airing: boolean;

	/** Synopsis. */
	public readonly synopsis: string;

	/** Rating. */
	public readonly rating: Rating;

	/** Trailer Youtube id. */
	public readonly trailerYoutubeId: string;

	public constructor(data: AnimeDetailInitArgs) {
		super(data);

		this.season = data.season;
		this.source = data.source;
		this.airing = data.airing;
		this.synopsis = data.synopsis;
		this.rating = data.rating;
		this.trailerYoutubeId = data.trailerYoutubeId;
	}

	/**
	 * Get YouTube video URL.
	 */
	public get getYoutubeUrl(): string | null {
		if (this.trailerYoutubeId) {
			return `https://www.youtube.com/embed/${this.trailerYoutubeId}`;
		}

		return null;
	}
}

/** Anime. */
type AnimeDetailInitArgs = Omit<OmitImmerable<AnimeDetail>, 'getYoutubeUrl'>;
