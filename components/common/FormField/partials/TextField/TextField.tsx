import { Controller } from 'react-hook-form';
import { FormField, FormUtilities } from '../../../../../types/forms';

type Props = FormUtilities & FormField;

const TextField = ({ identifier, label, placeholder, required, disabled, control, formState }: Props) => {
	const errors = formState.errors;
	const hasError = !!errors[identifier];
	const fieldError = errors[identifier];

	const getLabelText = () => {
		if (label) {
			return (
				<label htmlFor={identifier} className="form-label">
					{label} {required ? '*' : undefined}
				</label>
			);
		}

		return undefined;
	};

	const getHelperText = () => {
		if (fieldError) return <small className="form-text text-danger">{fieldError.message as string}</small>;
		return undefined;
	};

	// TODO: Handle input's error state
	return (
		<div className="form-group">
			{getLabelText()}
			<Controller
				control={control}
				name={identifier}
				render={({ field }) => {
					return <input type={'text'} id={identifier} className="form-control" placeholder={placeholder} disabled={disabled} aria-labelledby={placeholder} {...field} />;
				}}
			/>
			{getHelperText()}
		</div>
	);
};

export default TextField;
