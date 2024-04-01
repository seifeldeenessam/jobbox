export const getTimePassed = (dateString: Date): string => {
	const pastDate: Date = new Date(dateString);
	const currentDate: Date = new Date();

	const timeDifference: number = currentDate.getTime() - pastDate.getTime();

	const seconds: number = Math.floor(timeDifference / 1000);
	const minutes: number = Math.floor(seconds / 60);
	const hours: number = Math.floor(minutes / 60);
	const days: number = Math.floor(hours / 24);

	if (days > 0) {
		return `${days} day(s) ago`;
	} else if (hours > 0) {
		return `${hours} hour(s) ago`;
	} else if (minutes > 0) {
		return `${minutes} minute(s) ago`;
	} else {
		return `${seconds} second(s) ago`;
	}
};
