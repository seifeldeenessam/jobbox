import * as yup from 'yup';
import { FormInputTypes } from '../../../enums/forms';
import { FormField, FormValidation } from '../../../types/forms';
import { ChangePasswordFrom } from '../types';

export const CHANGE_PASSWORD_FORM_FIELDS: FormField[] = [
	{
		identifier: 'old_password',
		type: FormInputTypes.PASSWORD,
		label: 'Old Password',
		placeholder: '************',
		required: true
	},
	{
		identifier: 'new_password',
		type: FormInputTypes.PASSWORD,
		label: 'New Password',
		placeholder: '************',
		required: true
	}
];

export const CHANGE_PASSWORD_FORM_VALIDATION: FormValidation<ChangePasswordFrom> = {
	defaultValues: {},
	resolver: yup.object().shape({
		old_password: yup.string().required('This field is required'),
		new_password: yup
			.string()
			.required('This field is required')
			.matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Week password')
	})
};
