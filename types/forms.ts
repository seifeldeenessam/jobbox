import { Control, DefaultValues, FormState, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import type { ObjectSchema } from 'yup';
import { FormInputTypes } from '../enums/forms';

export type FormUtilities = {
	control: Control<any, any>;
	formState: FormState<any>;
	watch?: UseFormWatch<any>;
	setValue?: UseFormSetValue<any>;
};

export type FormField = {
	identifier: string;
	type: FormInputTypes;
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
};

export type FormValidation<F> = {
	defaultValues: DefaultValues<F>;
	resolver: ObjectSchema<any>;
};
