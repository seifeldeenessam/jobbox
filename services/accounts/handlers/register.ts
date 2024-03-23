import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'cookies-next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Cookies } from '../../../enums/cookies';
import { useRegister } from '../mutations';
import { REGISTER_FORM_FIELDS, REGISTER_FORM_VALIDATION } from '../static';
import { RegisterFrom, RegisterPayload } from '../types';

export const handleRegister = () => {
	const mutation = useRegister();

	const form = useForm<RegisterFrom>({
		mode: 'onChange',
		defaultValues: REGISTER_FORM_VALIDATION.defaultValues,
		resolver: yupResolver(REGISTER_FORM_VALIDATION.resolver)
	});

	const inputs = REGISTER_FORM_FIELDS;

	const onSubmit: SubmitHandler<RegisterFrom> = async (data) => {
		const payload: RegisterPayload = {
			username: data.username,
			email: data.email,
			password: data.password
		};

		try {
			const response = await mutation.mutateAsync({ payload });
			setCookie(Cookies.SESSION, response.access);

			// TODO: Handle session state
		} catch (error: any) {
			form.setError('root', { message: 'Registration Failed' });
		}
	};

	return { form, inputs, mutation, handleSubmit: form.handleSubmit(onSubmit) };
};
