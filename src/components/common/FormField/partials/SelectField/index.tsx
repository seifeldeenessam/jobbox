import { FormField, FormUtilities } from '@/types/forms';
import { Controller } from 'react-hook-form';

type Props = FormUtilities & FormField;

const SelectField = ({ identifier, label, placeholder, required, disabled, options, control, formState }: Props) => {
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

	const renderOptions = () => {
		if (!options || !options.length) {
			return (
				<option value="" hidden>
					Null
				</option>
			);
		} else {
			return options.map((option) => (
				<option value={option.value} key={option.id}>
					{option.value}
				</option>
			));
		}
	};

	const getHelperText = () => {
		if (fieldError) return <small className="form-text text-danger">{fieldError.message as string}</small>;
		return undefined;
	};

	return (
		<div className="form-group">
			{getLabelText()}
			<Controller
				control={control}
				name={identifier}
				render={({ field }) => {
					return (
						<select id={identifier} disabled={disabled} aria-labelledby={label} className="form-control" {...field}>
							<option value={undefined} hidden>
								{placeholder}
							</option>
							{renderOptions()}
						</select>
					);
				}}
			/>
			{getHelperText()}
		</div>
	);
};

export default SelectField;
