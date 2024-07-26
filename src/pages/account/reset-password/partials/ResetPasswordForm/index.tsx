import FormField from '@/components/common/FormField';
import { Routes } from '@/enums/routes';
import { handleResetPassword } from '@/services/accounts/handlers';
import { getFormStatus } from '@/utilities/forms';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
	token: string;
};

const ResetPasswordForm = ({ token }: Props) => {
	const router = useRouter();
	const { resetPassword } = handleResetPassword();
	const { mutation, form, inputs, handleSubmit } = resetPassword(token);

	useEffect(() => {
		const timeout = setTimeout(() => {
			mutation.reset();

			if (mutation.status === 'success') {
				router.push(Routes.ACCOUNT_LOGIN);
			}
		}, 3000);

		return () => clearInterval(timeout);
	}, [mutation.status]);

	const status = getFormStatus(mutation.status, 'Save', form.formState.errors.root?.message!, 'Password Updated, Redirecting...');

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

export default ResetPasswordForm;
