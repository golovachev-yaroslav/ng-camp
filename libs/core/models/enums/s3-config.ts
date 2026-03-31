import { enumToArray } from '../../utils/enum-to-array';

/** Config type. */
export enum ConfigType {
	UserAvatars = 'user-avatars',
	AnimeImages = 'anime-images',
	StudioImages = 'studio-images',
}

/** Config types. */
export namespace ConfigType {

	/** Config types map-object to title view. */
	const TO_TITLE_MAP: Record<ConfigType, string> = {
		[ConfigType.UserAvatars]: 'User avatars',
		[ConfigType.AnimeImages]: 'Anime images',
		[ConfigType.StudioImages]: 'Studio images',
	};

	/** Converts config type enum to array. */
	export function toArray(): ConfigType[] {
		return enumToArray(ConfigType);
	}

	/**
	 * Converts a config types to readable title.
	 * @param value Config types.
	 */
	export function toReadable(value: ConfigType): string | null {
		return TO_TITLE_MAP[value];
	}
}
