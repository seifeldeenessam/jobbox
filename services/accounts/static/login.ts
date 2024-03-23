import * as yup from 'yup';
import { FormInputTypes } from '../../../enums/forms';
import { FormField, FormValidation } from '../../../types/forms';
import { LoginFrom } from '../types';

export const LOGIN_FORM_FIELDS: FormField[] = [
	{
		identifier: 'username',
		type: FormInputTypes.TEXT,
		label: 'Username',
		placeholder: 'stevenjob',
		required: true
	},
	{
		identifier: 'password',
		type: FormInputTypes.PASSWORD,
		label: 'Password',
		placeholder: '************',
		required: true
	}
];

export const LOGIN_FORM_VALIDATION: FormValidation<LoginFrom> = {
	defaultValues: {},
	resolver: yup.object().shape({
		username: yup.string().required('This field is required'),
		password: yup.string().required('This field is required')
	})
};
