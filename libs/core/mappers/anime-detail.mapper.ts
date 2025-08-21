import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AiredMapper } from '@js-camp/core/mappers/aired.mapper';
import { Rating } from '@js-camp/core/models/enums/rating';
import { AnimeType } from '@js-camp/core/models/enums/anime-type';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status';
import { Source } from '@js-camp/core/models/enums/source';
import { Season } from '@js-camp/core/models/enums/season';
import { AnimeFormDto } from '@js-camp/core/dtos/anime/anime-form.dto';
import { EntityValidationErrors } from '@js-camp/core/models/app-error';
import { extractErrorMessages } from '@js-camp/core/utils/extract-error';
import { AnimeForm } from '@js-camp/core/models/anime/anime-form';

import { AnimeDetail } from '../models/anime/anime-detail';
import { AnimeDetailDto } from '../dtos/anime/anime-detail.dto';

/** Anime detail mapper. */
export namespace AnimeDetailMapper {

	/** @inheritdoc */
	export function validationErrorFromDto(
		errorDto?: EntityValidationErrors<AnimeFormDto>[] | null,
	): EntityValidationErrors<AnimeForm> {
		return {
			// @ts-ignore
			titleEnglish: extractErrorMessages(errorDto, 'title_eng'),
		};
	}

	/**
	 * Converts dto to model.
	 * @param dto Anime detail dto.
	 */
	export function fromDto(dto: AnimeDetailDto): AnimeDetail {
		return new AnimeDetail({
			...AnimeMapper.fromDto(dto),
			synopsis: dto.synopsis,
			season: dto.season,
			source: dto.source,
			trailerYoutubeId: dto.trailer_youtube_id,
			airing: dto.airing,
			rating: dto.rating,
		});
	}

	/**
	 * Converts model to dto.
	 * @param model Anime detail form model.
	 */
	export function toDto(model: AnimeForm): AnimeFormDto {
		return {
			rating: Rating.Unknown,
			season: Season.NonSeasonal,
			source: Source.Game,
			status: AnimeStatus.NotYetAired,
			genres: [],
			studios: [],
			type: AnimeType.Unknown,
			aired: AiredMapper.toDto(model.aired),
			airing: model.airing,
			image: model.imageUrl,
			synopsis: model.synopsis,
			title_eng: model.titleEnglish,
			title_jpn: model.titleJapanese,
			trailer_youtube_id: model.trailerYoutubeId,
		};
	}
}
