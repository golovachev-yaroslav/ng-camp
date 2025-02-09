import { Aired } from '@js-camp/core/models/anime/aired';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { OmitImmerable } from '@js-camp/core/models/immerable';

/** Anime. */
export class Anime {
	/** ID. */
	public readonly id: number;

	/** English title. */
	public readonly titleEnglish: string;

	/** Japanese title. */
	public readonly titleJapanese: string;

	/** Image URL. */
	public readonly image: string | null;

	/** Created date. */
	public readonly created: Date;

	/** Modified date. */
	public readonly modified: Date;

	/** Type. */
	public readonly type: AnimeType;

	/** Status. */
	public readonly status: AnimeStatus;

	/** Aired dates. */
	public readonly aired: Aired;

	/** Calculated score. */
	public readonly score: number | null;

	/** User score. */
	public readonly userScore: number | null;

	public constructor(data: AnimeInitArgs) {
		this.id = data.id;
		this.titleEnglish = data.titleEnglish;
		this.titleJapanese = data.titleJapanese;
		this.image = data.image;
		this.created = data.created;
		this.modified = data.modified;
		this.type = data.type;
		this.status = data.status;
		this.aired = data.aired;
		this.score = data.score;
		this.userScore = data.userScore;
	}
}

/** Anime. */
type AnimeInitArgs = OmitImmerable<Anime>;
