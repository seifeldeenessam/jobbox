import { UseMutationResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import FormField from '../../../../../../../components/common/FormField';
import { handleChangePassword } from '../../../../../../../services/accounts/handlers';

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

	const getFormStatus = (status: UseMutationResult['status']) => {
		if (status === 'idle') {
			return (
				<button className="btn btn-brand-1 hover-up w-100" type="submit" disabled={!canSubmit}>
					Change
				</button>
			);
		} else if (status === 'pending') {
			return (
				<button className="btn btn-brand-1 hover-up w-100" type="submit" disabled>
					Loading...
				</button>
			);
		} else if (status === 'error') {
			return (
				<button className="btn btn-brand-error hover-up w-100" type="submit" disabled={!canSubmit}>
					{form.formState.errors.root?.message}
				</button>
			);
		} else {
			return (
				<button className="btn btn-brand-success hover-up w-100" type="submit" disabled={!canSubmit}>
					Password Changed
				</button>
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h6 className="color-orange mb-20">Change your password</h6>
			<div className="d-flex gap-4">
				{inputs.map((input) => (
					<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
				))}
			</div>
			{getFormStatus(mutation.status)}
		</form>
	);
};

export default PasswordChangeForm;
