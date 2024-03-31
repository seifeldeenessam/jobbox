import * as yup from 'yup';
import { FormInputTypes } from '../../../enums/forms';
import { FormField, FormValidation } from '../../../types/forms';
import { ResetPasswordForm, SendTokenForm, ValidateTokenForm } from '../types';

// Send Token
export const SEND_TOKEN_FORM_FIELDS: FormField[] = [
	{
		identifier: 'email',
		type: FormInputTypes.TEXT,
		label: 'Email',
		placeholder: 'stevenjob@email.com',
		required: true
	}
];

export const SEND_TOKEN_FORM_VALIDATION: FormValidation<SendTokenForm> = {
	defaultValues: {},
	resolver: yup.object().shape({
		email: yup.string().required('This field is required').email('Invalid email address')
	})
};

// Validate Token
export const VALIDATE_TOKEN_FORM_FIELDS: FormField[] = [
	{
		identifier: 'token',
		type: FormInputTypes.TEXT,
		label: 'Token',
		placeholder: 'We can find it in your email inbox',
		required: true
	}
];

export const VALIDATE_TOKEN_FORM_VALIDATION: FormValidation<ValidateTokenForm> = {
	defaultValues: {},
	resolver: yup.object().shape({
		token: yup.string().required('This field is required')
	})
};

// Reset Password Token
export const RESET_PASSWORD_FORM_FIELDS: FormField[] = [
	{
		identifier: 'password',
		type: FormInputTypes.PASSWORD,
		label: 'Password',
		placeholder: '************',
		required: true
	}
];

export const RESET_PASSWORD_FORM_VALIDATION: FormValidation<ResetPasswordForm> = {
	defaultValues: {},
	resolver: yup.object().shape({
		password: yup
			.string()
			.required('This field is required')
			.matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Week password')
	})
};
