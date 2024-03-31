import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryOptions } from '../../../types/queries';
import { RequestData, RequestError } from '../../../types/requests';
import createAxiosInstance from '../../../utilities/api';
import { Candidate } from '../types';

const listing = async (context: QueryFunctionContext) => {
	const { req, res, ...options } = context.queryKey[1] as QueryOptions;
	const api = createAxiosInstance({ req, res });

	let url: string = Endpoints.CANDIDATES_PROFILES;

	if (Object.keys(options).length) {
		const query = Object.entries(options)
			.map((option) => `${encodeURIComponent(option[0])}=${encodeURIComponent(option[1])}`)
			.join('&');

		url = `${url}?${query}`;
	}

	try {
		const response = await api.get(url);
		return response.data;
	} catch (error: any) {
		// TODO: Handle error message
		throw Error(error.message, { cause: 'Error fetching candidates' });
	}
};

export const useCandidatesListing = (options: QueryOptions) => {
	const query = useQuery<RequestData<Candidate>, RequestError>({
		queryKey: [Endpoints.CANDIDATES_PROFILES, options],
		queryFn: listing
	});

	return query;
};
