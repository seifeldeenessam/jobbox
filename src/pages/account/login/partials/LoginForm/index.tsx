import FormField from '@/components/common/FormField';
import { Routes } from '@/enums/routes';
import { handleLogin } from '@/services/accounts/handlers';
import { getFormStatus } from '@/utilities/forms';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {};

const LoginForm = (props: Props) => {
	const { mutation, form, inputs, handleSubmit } = handleLogin();

	useEffect(() => {
		const timeout = setTimeout(() => {
			mutation.reset();
			if (mutation.status === 'success') form.reset();
		}, 3000);

		return () => clearInterval(timeout);
	}, [mutation.status]);

	const status = getFormStatus(mutation.status, 'Login', form.formState.errors.root?.message!, 'Login Success, Redirecting...');

	return (
		<form className="login-register text-start mt-20" onSubmit={handleSubmit}>
			{inputs.map((input) => (
				<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
			))}
			<LoginFormActions />
			<div className="form-group">
				<button className={`btn ${status.className} hover-up w-100`} type="submit" disabled={status.disabled}>
					{status.label}
				</button>
			</div>
			<LoginFormExtraActions />
		</form>
	);
};

const LoginFormActions = () => {
	return (
		<div className="login_footer form-group d-flex justify-content-between">
			<label className="cb-container">
				<input type="checkbox" />
				<span className="text-small">Remember me</span>
				<span className="checkmark" />
			</label>
			<Link legacyBehavior href={Routes.ACCOUNT_RESET_PASSWORD}>
				<a className="text-muted">Forgot Password</a>
			</Link>
		</div>
	);
};

const LoginFormExtraActions = () => {
	return (
		<div className="text-muted text-center">
			Don't have an Account? &nbsp;
			<Link legacyBehavior href={Routes.ACCOUNT_REGISTER}>
				<a>Create a new one</a>
			</Link>
		</div>
	);
};

export default LoginForm;
