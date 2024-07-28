export const clipText = (text: string, limit: number) => {
	const clippedText = text.substring(0, limit);

	if (clippedText.length >= limit) return `${clippedText}...`;
	return clippedText;
};
