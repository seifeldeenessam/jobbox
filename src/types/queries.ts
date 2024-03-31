import { GetServerSidePropsContext } from 'next';
import { RequestError } from './requests';

export type QueryParams = {
	req?: GetServerSidePropsContext['req'];
	res?: GetServerSidePropsContext['res'];
};

export type QueryOptions = QueryParams & {
	limit?: number;
	offset?: number;
	letter?: string;
};

export type QueryState<T> = {
	isLoading: boolean;
	error: RequestError | null;
	data: T;
};
