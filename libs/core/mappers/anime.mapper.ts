import { Anime } from '@js-camp/core/models/anime/anime';
import { AnimeDto } from '@js-camp/core/dtos/anime/anime.dto';
import { AiredMapper } from '@js-camp/core/mappers/aired.mapper';

export namespace AnimeMapper {
	/**
	 * Maps dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AnimeDto): Anime {
		return new Anime({
			id: dto.id,
			created: new Date(dto.created),
			modified: new Date(dto.modified),
			score: dto.score,
			userScore: dto.user_score,
			titleEnglish: dto.title_eng,
			titleJapanese: dto.title_jpn,
			poster: dto.image,
			type: dto.type,
			status: dto.status,
			aired: AiredMapper.fromDto(dto.aired),
		});
	}
}
