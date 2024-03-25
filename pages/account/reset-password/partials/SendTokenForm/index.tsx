import { Dispatch, SetStateAction, useEffect } from 'react';
import FormField from '../../../../../components/common/FormField';
import { handleResetPassword } from '../../../../../services/accounts/handlers';
import { getFormStatus } from '../../../../../utilities/forms';

type Props = {
	onSuccess: Dispatch<SetStateAction<'send_otp' | 'validate_otp' | 'reset_password'>>;
};

const SendTokenForm = ({ onSuccess }: Props) => {
	const { sendToken } = handleResetPassword();
	const { mutation, form, inputs, handleSubmit } = sendToken();

	useEffect(() => {
		const timeout = setTimeout(() => {
			mutation.reset();

			if (mutation.status === 'success') {
				onSuccess('validate_otp');
			}
		}, 3000);

		return () => clearInterval(timeout);
	}, [mutation.status]);

	const status = getFormStatus(mutation.status, 'Continue', form.formState.errors.root?.message!, 'Token Sent');

	return (
		<form className="login-register text-start mt-20" onSubmit={handleSubmit}>
			{inputs.map((input) => (
				<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
			))}
			<div className="form-group">
				<button className={`btn ${status.className} hover-up w-100`} type="submit" disabled={status.disabled}>
					{status.label}
				</button>
			</div>
		</form>
	);
};

export default SendTokenForm;
