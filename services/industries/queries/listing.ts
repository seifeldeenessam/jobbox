import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryOptions } from '../../../types/queryOptions';
import { RequestData, RequestError } from '../../../types/requests';
import createAxiosInstance from '../../../utilities/api';
import { Industry } from '../types';

const listing = async (context: QueryFunctionContext) => {
	const { req, res, limit, offset } = context.queryKey[1] as QueryOptions;
	const api = createAxiosInstance({ req, res });

	let url: string = Endpoints.INDUSTRIES;

	if (limit) url += `?limit=${limit}`;
	if (offset) url += `&offset=${offset}`;

	try {
		const response = await api.get(url);
		return response.data;
	} catch (error: any) {
		// TODO: Handle error message
		throw Error(error.message, { cause: 'Error fetching industries' });
	}
};

export const useIndustriesListing = (options: QueryOptions) => {
	const query = useQuery<RequestData<Industry>, RequestError>({
		queryKey: [Endpoints.INDUSTRIES, options],
		queryFn: listing
	});

	return query;
};
