import { RequestError } from './requestError';

export type QueryState<T> = {
	isLoading: boolean;
	error: RequestError | null;
	data: T;
};
