import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryParams } from '../../../types/queryOptions';
import createAxiosInstance from '../../../utilities/api';
import { ChangePasswordPayload, ChangePasswordResponse } from '../types';

type Props = QueryParams & { payload: ChangePasswordPayload };

// TODO: Handle `any` type (should be the error type)
export const useChangePassword = () => {
	const mutation = useMutation<ChangePasswordResponse, any, Props>({
		mutationKey: [Endpoints.ACCOUNT_CHANGE_PASSWORD],
		mutationFn: async (props) => {
			const api = createAxiosInstance({ req: props.req, res: props.res });

			try {
				const response = await api.post(Endpoints.ACCOUNT_CHANGE_PASSWORD, props.payload);
				return response.data;
			} catch (error: any) {
				throw Error(error.response.data.message[0], { cause: 'Error changing password' });
			}
		}
	});

	return mutation;
};
