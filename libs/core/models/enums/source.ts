import { enumToArray } from '../../utils/enum-to-array';

/** Source. */
export enum Source {
	FourKomaManga = 'FOUR_KOMA_MANGA',
	Book = 'BOOK',
	CardGame = 'CARD_GAME',
	Game = 'GAME',
	LightNovel = 'LIGHT_NOVEL',
	Manga = 'MANGE',
	MixedMedia = 'MIXED_MEDIA',
	Music = 'MUSIC',
	Novel = 'NOVEL',
	Original = 'ORIGINAL',
	PictureBook = 'PICTURE_BOOK',
	Radio = 'RADIO',
	VisialNovel = 'VISUAL_NOVEL',
	WebManga = 'WEB_MANGA',
	WebNovel = 'WEB_NOVEL',
	Other = 'OTHER',
	Unknown = 'UNKNOWN',
}

/** Source. */
export namespace Source {

	/** Source map-object to title view. */
	const TO_TITLE_MAP: Record<Source, string> = {
		[Source.FourKomaManga]: 'Four KomaManga',
		[Source.Book]: 'Book',
		[Source.CardGame]: 'Card Game',
		[Source.Game]: 'Game',
		[Source.LightNovel]: 'Light Novel',
		[Source.Manga]: 'Manga',
		[Source.MixedMedia]: 'Mixed Media',
		[Source.Music]: 'Music',
		[Source.Novel]: 'Novel',
		[Source.Original]: 'Original',
		[Source.PictureBook]: 'Picture Book',
		[Source.Radio]: 'Radio',
		[Source.VisialNovel]: 'Visual Novel',
		[Source.WebManga]: 'Web Manga',
		[Source.WebNovel]: 'Web Novel',
		[Source.Other]: 'Other',
		[Source.Unknown]: 'Unknown',
	};

	/** Converts source enum to array. */
	export function toArray(): Source[] {
		return enumToArray(Source);
	}

	/**
	 * Converts source to readable title.
	 * @param value Source.
	 */
	export function toReadable(value: Source): string | null {
		return TO_TITLE_MAP[value];
	}
}
