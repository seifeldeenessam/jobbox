import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '../../../enums/endpoints';
import { QueryParams } from '../../../types/queryOptions';
import createAxiosInstance from '../../../utilities/api';
import { ResetPasswordPayload, ResetPasswordResponse, SendTokenPayload, SendTokenResponse, ValidateTokenPayload, ValidateTokenResponse } from '../types';

type SendTokenProps = QueryParams & { payload: SendTokenPayload };
type ValidateTokenProps = QueryParams & { payload: ValidateTokenPayload };
type ResetPasswordProps = QueryParams & { payload: ResetPasswordPayload };

// TODO: Handle `any` type (should be the error type)
export const useResetPassword = () => {
	const sendToken = useMutation<SendTokenResponse, any, SendTokenProps>({
		mutationKey: [Endpoints.ACCOUNT_SEND_TOKEN],
		mutationFn: async (props) => {
			const api = createAxiosInstance({ req: props.req, res: props.res });

			try {
				const response = await api.post(Endpoints.ACCOUNT_SEND_TOKEN, props.payload);
				return response.data;
			} catch (error: any) {
				throw Error(error.response.data.message[0], { cause: 'Error sending token' });
			}
		}
	});

	const validateToken = useMutation<ValidateTokenResponse, any, ValidateTokenProps>({
		mutationKey: [Endpoints.ACCOUNT_VALIDATE_TOKEN],
		mutationFn: async (props) => {
			const api = createAxiosInstance({ req: props.req, res: props.res });

			try {
				const response = await api.post(Endpoints.ACCOUNT_VALIDATE_TOKEN, props.payload);
				return response.data;
			} catch (error: any) {
				throw Error(error.response.data.message[0], { cause: 'Error changing password' });
			}
		}
	});

	const resetPassword = useMutation<ResetPasswordResponse, any, ResetPasswordProps>({
		mutationKey: [Endpoints.ACCOUNT_RESET_PASSWORD],
		mutationFn: async (props) => {
			const api = createAxiosInstance({ req: props.req, res: props.res });

			try {
				const response = await api.post(Endpoints.ACCOUNT_RESET_PASSWORD, props.payload);
				return response.data;
			} catch (error: any) {
				throw Error(error.response.data.message[0], { cause: 'Error changing password' });
			}
		}
	});

	return { sendToken, validateToken, resetPassword };
};
