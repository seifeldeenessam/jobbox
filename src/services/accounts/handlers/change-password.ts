import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useChangePassword } from '../mutations';
import { CHANGE_PASSWORD_FORM_FIELDS, CHANGE_PASSWORD_FORM_VALIDATION } from '../static';
import { ChangePasswordFrom, ChangePasswordPayload } from '../types';

export const handleChangePassword = () => {
	const mutation = useChangePassword();

	const form = useForm<ChangePasswordFrom>({
		mode: 'onChange',
		defaultValues: CHANGE_PASSWORD_FORM_VALIDATION.defaultValues,
		resolver: yupResolver(CHANGE_PASSWORD_FORM_VALIDATION.resolver)
	});

	const inputs = CHANGE_PASSWORD_FORM_FIELDS;

	const onSubmit: SubmitHandler<ChangePasswordFrom> = async (data) => {
		const payload: ChangePasswordPayload = {
			old_password: data.old_password,
			new_password: data.new_password
		};

		try {
			await mutation.mutateAsync({ payload });
		} catch (error: any) {
			form.setError('root', { message: error.message });
		}
	};

	return { form, inputs, mutation, handleSubmit: form.handleSubmit(onSubmit) };
};
