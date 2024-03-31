import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormField, FormUtilities } from '../../../../../types/forms';

type Props = FormUtilities & FormField;

const ButtonGroupField = ({ identifier, options, disabled, control, formState, setValue }: Props) => {
	const [selection, setSelection] = useState<string>(options![0].value);

	useEffect(() => {
		setValue!(identifier, selection);
	}, [selection]);

	const errors = formState.errors;
	const hasError = !!errors[identifier];
	const fieldError = errors[identifier];

	// TODO: Handle input's error state
	return (
		<div className="form-group">
			<div className="btn-group" role="group" aria-label={identifier} style={{ width: '100%' }}>
				{options?.map((option) => (
					<button type="button" className={`btn ${option.value === selection ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setSelection(option.value)} key={option.id}>
						{option.value}
					</button>
				))}
			</div>

			<Controller
				control={control}
				name={identifier}
				render={({ field }) => {
					return <input type="hidden" name={identifier} value={selection} />;
				}}
			/>
		</div>
	);
};

export default ButtonGroupField;
