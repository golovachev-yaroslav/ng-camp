import { AnimeType } from '../enums/anime-type';
import { AnimeStatus } from '../enums/anime-status';
import { OmitImmerable } from '../immerable';

import { Aired } from './aired';
import { Genre } from './genre';
import { Studio } from './studio';

/** Anime. */
export class Anime {
	/** ID. */
	public readonly id: number;

	/** English title. */
	public readonly titleEnglish: string;

	/** Japanese title. */
	public readonly titleJapanese: string;

	/** Poster URL. */
	public readonly poster: string;

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

	/** Genre. */
	public readonly genres?: Genre[];

	/** Studio. */
	public readonly studios?: Studio[];

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
		this.genres = data.genres;
		this.studios = data.studios;
	}
}

/** Anime. */
type AnimeInitArgs = OmitImmerable<Anime>;
