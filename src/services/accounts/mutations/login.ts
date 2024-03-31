import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryParams } from '../../../types/queries';
import createAxiosInstance from '../../../utilities/api';
import { LoginPayload, LoginResponse } from '../types';

type Props = QueryParams & { payload: LoginPayload };

// TODO: Handle `any` type (should be the error type)
export const useLogin = () => {
	const mutation = useMutation<LoginResponse, any, Props>({
		mutationKey: [Endpoints.ACCOUNT_LOGIN],
		mutationFn: async (props) => {
			const api = createAxiosInstance({ req: props.req, res: props.res });

			try {
				const response = await api.post(Endpoints.ACCOUNT_LOGIN, props.payload);
				return response.data;
			} catch (error: any) {
				throw Error(error.response.data.message[0], { cause: 'Error logging in user' });
			}
		}
	});

	return mutation;
};
