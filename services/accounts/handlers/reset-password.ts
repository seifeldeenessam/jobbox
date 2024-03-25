import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useResetPassword } from '../mutations';
import { RESET_PASSWORD_FORM_FIELDS, RESET_PASSWORD_FORM_VALIDATION, SEND_TOKEN_FORM_FIELDS, SEND_TOKEN_FORM_VALIDATION, VALIDATE_TOKEN_FORM_FIELDS, VALIDATE_TOKEN_FORM_VALIDATION } from '../static';
import { ResetPasswordForm, ResetPasswordPayload, SendTokenForm, SendTokenPayload, ValidateTokenForm, ValidateTokenPayload } from '../types';

export const handleResetPassword = () => {
	const sendToken = () => {
		const mutation = useResetPassword();

		const form = useForm<SendTokenForm>({
			mode: 'onChange',
			defaultValues: SEND_TOKEN_FORM_VALIDATION.defaultValues,
			resolver: yupResolver(SEND_TOKEN_FORM_VALIDATION.resolver)
		});

		const inputs = SEND_TOKEN_FORM_FIELDS;

		const onSubmit: SubmitHandler<SendTokenForm> = async (data) => {
			const payload: SendTokenPayload = {
				email: data.email
			};

			try {
				await mutation.sendToken.mutateAsync({ payload });
			} catch (error: any) {
				form.setError('root', { message: error.message });
			}
		};

		return { form, inputs, mutation: mutation.sendToken, handleSubmit: form.handleSubmit(onSubmit) };
	};

	const validateToken = () => {
		const mutation = useResetPassword();

		const form = useForm<ValidateTokenForm>({
			mode: 'onChange',
			defaultValues: VALIDATE_TOKEN_FORM_VALIDATION.defaultValues,
			resolver: yupResolver(VALIDATE_TOKEN_FORM_VALIDATION.resolver)
		});

		const inputs = VALIDATE_TOKEN_FORM_FIELDS;

		const onSubmit: SubmitHandler<ValidateTokenForm> = async (data) => {
			const payload: ValidateTokenPayload = {
				token: data.token
			};

			try {
				await mutation.validateToken.mutateAsync({ payload });
			} catch (error: any) {
				form.setError('root', { message: error.message });
			}
		};

		return { form, inputs, mutation: mutation.validateToken, handleSubmit: form.handleSubmit(onSubmit) };
	};

	const resetPassword = (token: string) => {
		const mutation = useResetPassword();

		const form = useForm<ResetPasswordForm>({
			mode: 'onChange',
			defaultValues: RESET_PASSWORD_FORM_VALIDATION.defaultValues,
			resolver: yupResolver(RESET_PASSWORD_FORM_VALIDATION.resolver)
		});

		const inputs = RESET_PASSWORD_FORM_FIELDS;

		const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
			const payload: ResetPasswordPayload = {
				token,
				password: data.password
			};

			try {
				await mutation.resetPassword.mutateAsync({ payload });
			} catch (error: any) {
				form.setError('root', { message: error.message });
			}
		};

		return { form, inputs, mutation: mutation.resetPassword, handleSubmit: form.handleSubmit(onSubmit) };
	};

	return { sendToken, validateToken, resetPassword };
};
