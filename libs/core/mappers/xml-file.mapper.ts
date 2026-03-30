/** XML file mapper. */
export namespace XmlFileMapper {

	/**
	 * Takes URL of file from XML.
	 * @param xmlString XML string.
	 */
	export function fromDto(xmlString: string): string | null {
		const parser = new DOMParser();
		const xml = parser.parseFromString(xmlString, 'application/xml');

		return xml.querySelector('Location')?.textContent ?? null;
	}
}
