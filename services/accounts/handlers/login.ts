import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'cookies-next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Cookies } from '../../../enums/cookies';
import { useLogin } from '../mutations';
import { LOGIN_FORM_FIELDS, LOGIN_FORM_VALIDATION } from '../static';
import { LoginFrom, LoginPayload } from '../types';

export const handleLogin = () => {
	const mutation = useLogin();

	const form = useForm<LoginFrom>({
		mode: 'onChange',
		defaultValues: LOGIN_FORM_VALIDATION.defaultValues,
		resolver: yupResolver(LOGIN_FORM_VALIDATION.resolver)
	});

	const inputs = LOGIN_FORM_FIELDS;

	const onSubmit: SubmitHandler<LoginFrom> = async (data) => {
		const payload: LoginPayload = {
			username: data.username,
			password: data.password
		};

		try {
			const response = await mutation.mutateAsync({ payload });
			setCookie(Cookies.SESSION, response.access);

			// TODO: Handle session state

			window.location.href = window.location.origin;
		} catch (error: any) {
			form.setError('root', { message: 'Login Failed' });
		}
	};

	return { form, inputs, mutation, handleSubmit: form.handleSubmit(onSubmit) };
};
