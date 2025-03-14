import { AnimeType } from '../enums/anime-type';
import { AnimeStatus } from '../enums/anime-status';
import { OmitImmerable } from '../immerable';

import { Aired } from './aired';

/** Anime. */
export class Anime {
	/** ID. */
	public readonly id: number;

	/** English title. */
	public readonly titleEnglish: string;

	/** Japanese title. */
	public readonly titleJapanese: string;

	/** Poster URL. */
	public readonly poster: string | null;

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
		this.poster = data.poster;
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
