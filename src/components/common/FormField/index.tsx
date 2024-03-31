import { ReactNode } from 'react';
import { FormInputTypes } from '../../../enums/forms';
import { FormField, FormUtilities } from '../../../types/forms';
import PasswordField from './partials/PasswordField';
import SelectField from './partials/SelectField';
import TextField from './partials/TextField';

type Props = FormUtilities & FormField;

const FormField = (props: Props) => {
	const { type } = props;

	const renderField = (): ReactNode => {
		if (type === FormInputTypes.TEXT || type === FormInputTypes.TEXTAREA) return <TextField {...props} />;
		if (type === FormInputTypes.PASSWORD) return <PasswordField {...props} />;
		if (type === FormInputTypes.SELECT) return <SelectField {...props} />;

		return null;
	};

	return <>{renderField()}</>;
};

export default FormField;
