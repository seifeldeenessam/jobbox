import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryParams } from '../../../types/queryOptions';
import createAxiosInstance from '../../../utilities/api';
import { RegisterPayload, RegisterResponse } from '../types';

type Props = QueryParams & { payload: RegisterPayload };

const register = async (props: Props) => {
	const api = createAxiosInstance({ req: props.req, res: props.res });

	try {
		const response = await api.post(Endpoints.ACCOUNT_REGISTER, props.payload);
		return response.data;
	} catch (error: any) {
		throw Error(error.message, { cause: 'Error registering user' });
	}
};

// TODO: Handle `any` type (should be the error type)
export const useRegister = () => {
	const mutation = useMutation<RegisterResponse, any, Props>({
		mutationFn: register,
		mutationKey: [Endpoints.ACCOUNT_REGISTER]
	});

	return mutation;
};
