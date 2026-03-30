import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AiredMapper } from '@js-camp/core/mappers/aired.mapper';
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
			studios: dto.studios_data.map((studio) => {
				return {
					id: studio.id,
					name: studio.name,
					logo: studio.image,
					created: studio.created ? new Date(studio.created) : null,
					modified: studio.modified ? new Date(studio.modified) : null,
				};
			}),
			genres: dto.genres_data.map((genre) => {
				return {
					id: genre.id,
					name: genre.name,
					type: genre.type,
					created: genre.created ? new Date(genre.created) : null,
					modified: genre.modified ? new Date(genre.modified) : null,
				};
			}),
		});
	}

	/**
	 * Converts model to dto.
	 * @param model Anime detail form model.
	 */
	export function toDto(model: AnimeForm): AnimeFormDto {
		return {
			rating: model.rating,
			season: model.season,
			source: model.source,
			status: model.status,
			genres: model.genres ?? [],
			studios: model.studios ?? [],
			type: model.type,
			aired: AiredMapper.toDto(model.aired),
			airing: model.airing,
			image: model.poster,
			synopsis: model.synopsis,
			title_eng: model.titleEnglish,
			title_jpn: model.titleJapanese,
			trailer_youtube_id: model.trailerYoutubeUrl?.substring(model.trailerYoutubeUrl.lastIndexOf('/') + 1),
		};
	}
}
