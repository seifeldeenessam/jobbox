import { AxiosError } from 'axios';

export type RequestError = AxiosError<Record<string, string | Record<string, string>>>;

export type RequestData<T> = {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
};
