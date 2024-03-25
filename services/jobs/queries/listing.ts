import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryOptions } from '../../../types/queryOptions';
import { RequestData, RequestError } from '../../../types/requests';
import createAxiosInstance from '../../../utilities/api';
import { Job } from '../types';

const listing = async (context: QueryFunctionContext) => {
	const { req, res } = context.queryKey[1] as QueryOptions;
	const api = createAxiosInstance({ req, res });

	let url: string = Endpoints.JOBS;

	try {
		const response = await api.get(url);
		return response.data;
	} catch (error: any) {
		// TODO: Handle error message
		throw Error(error.message, { cause: 'Error fetching jobs' });
	}
};

export const useJobsListing = (options: QueryOptions) => {
	const query = useQuery<RequestData<Job>, RequestError>({
		queryKey: [Endpoints.JOBS, options],
		queryFn: listing
	});

	return query;
};
