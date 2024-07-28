export const clipText = (text: string, limit: number) => {
	if (text.length <= limit) {
		return text;
	} else {
		const clippedText = text.substring(0, limit);
		return `${clippedText}…`;
	}
};
