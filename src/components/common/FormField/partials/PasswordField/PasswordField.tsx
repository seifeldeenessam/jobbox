import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormField, FormUtilities } from '../../../../../types/forms';

type Props = FormUtilities & FormField;

const PasswordField = ({ identifier, label, placeholder, required, disabled, control, formState }: Props) => {
	const [visible, setVisible] = useState<boolean>(false);

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

	const handleVisibility = () => {
		setVisible((prev) => !prev);
	};

	const getHelperText = () => {
		if (fieldError) return <small className="form-text text-danger">{fieldError.message as string}</small>;
		return undefined;
	};

	// TODO: Handle input's error state
	return (
		<div className="form-group">
			{getLabelText()}
			<div className="position-relative">
				<Controller
					control={control}
					name={identifier}
					render={({ field }) => {
						return (
							<input
								type={visible ? 'text' : 'password'}
								id={identifier}
								className="form-control"
								placeholder={placeholder}
								disabled={disabled}
								aria-labelledby={placeholder}
								{...field}
							/>
						);
					}}
				/>
				<button type="button" className="position-absolute top-50 end-0 translate-middle-y btn " onClick={handleVisibility}>
					{visible ? <i className="fi fi-rr-eye-crossed"></i> : <i className="fi fi-rr-eye"></i>}
				</button>
			</div>
			{getHelperText()}
		</div>
	);
};

export default PasswordField;
