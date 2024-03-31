import * as yup from 'yup';
import { FormInputTypes } from '../../../enums/forms';
import { FormField, FormValidation } from '../../../types/forms';
import { RegisterFrom } from '../types';

export const REGISTER_FORM_FIELDS: FormField[] = [
	{
		identifier: 'username',
		type: FormInputTypes.TEXT,
		label: 'Username',
		placeholder: 'stevenjob',
		required: true
	},
	{
		identifier: 'email',
		type: FormInputTypes.TEXT,
		label: 'Email Address',
		placeholder: 'stevenjob@email.com',
		required: true
	},
	{
		identifier: 'password',
		type: FormInputTypes.PASSWORD,
		label: 'Password',
		placeholder: '************',
		required: true
	},
	{
		identifier: 'status',
		type: FormInputTypes.SELECT,
		label: 'Account Type',
		placeholder: 'Select account type',
		options: [
			{ id: 1, value: 'Recruiter' },
			{ id: 2, value: 'Candidate' }
		]
	}
];

export const REGISTER_FORM_VALIDATION: FormValidation<RegisterFrom> = {
	defaultValues: {},
	resolver: yup.object().shape({
		username: yup.string().required('This field is required'),
		email: yup.string().required('This field is required').email('Invalid email address'),
		password: yup
			.string()
			.required('This field is required')
			.matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Week password'),
		status: yup.string().required('This field is required')
	})
};
