import { useEffect } from 'react';
import FormField from '../../../../../../../components/common/FormField';
import { handleChangePassword } from '../../../../../../../services/accounts/handlers';
import { getFormStatus } from '../../../../../../../utilities/forms';

type Props = {};

const PasswordChangeForm = (props: Props) => {
	const { mutation, form, inputs, handleSubmit } = handleChangePassword();
	const canSubmit = !!form.getValues().old_password && !!form.getValues().new_password;

	useEffect(() => {
		if (mutation.status === 'success') form.reset();

		const timeout = setTimeout(() => {
			mutation.reset();
		}, 3000);

		return () => clearInterval(timeout);
	}, [mutation.status]);

	const status = getFormStatus(mutation.status, 'Change', form.formState.errors.root?.message!, 'Password Changed');

	return (
		<form onSubmit={handleSubmit}>
			<h6 className="color-orange mb-20">Change your password</h6>
			<div className="d-flex gap-4">
				{inputs.map((input) => (
					<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
				))}
			</div>
			<button className={`btn ${status.className} hover-up w-100`} type="submit" disabled={status.disabled}>
				{status.label}
			</button>
		</form>
	);
};

export default PasswordChangeForm;
