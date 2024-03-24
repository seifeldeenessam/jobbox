import { UseMutationResult } from '@tanstack/react-query';
import Link from 'next/link';
import FormField from '../../../../../components/common/FormField';
import { Routes } from '../../../../../enums/routes';
import { handleLogin } from '../../../../../services/accounts/handlers/login';

type Props = {};

const LoginForm = (props: Props) => {
	const { mutation, form, inputs, handleSubmit } = handleLogin();

	const getFormStatus = (status: UseMutationResult['status']) => {
		if (status === 'idle') {
			return (
				<button className="btn btn-brand-1 hover-up w-100" type="submit">
					Login
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
				<button className="btn btn-brand-error hover-up w-100" type="submit">
					{form.formState.errors.root?.message}
				</button>
			);
		} else {
			return (
				<button className="btn btn-brand-success hover-up w-100" type="submit">
					Login Success
				</button>
			);
		}
	};

	return (
		<form className="login-register text-start mt-20" onSubmit={handleSubmit}>
			{inputs.map((input) => (
				<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
			))}
			<LoginFormActions />
			<div className="form-group">{getFormStatus(mutation.status)}</div>
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
