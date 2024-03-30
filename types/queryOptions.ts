import { GetServerSidePropsContext } from 'next';

export type QueryParams = {
	req?: GetServerSidePropsContext['req'];
	res?: GetServerSidePropsContext['res'];
};

export type QueryOptions = QueryParams & {
	limit?: number;
	offset?: number;
	letter?: string;
};
