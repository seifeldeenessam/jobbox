import { UseMutationResult } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect } from 'react';
import FormField from '../../../../../components/common/FormField';
import { Routes } from '../../../../../enums/routes';
import { handleRegister } from '../../../../../services/accounts/handlers';

type Props = {};

const RegisterForm = (props: Props) => {
	const { mutation, form, inputs, handleSubmit } = handleRegister();

	useEffect(() => {
		const timeout = setTimeout(() => {
			mutation.reset();
			if (mutation.status === 'success') form.reset();
		}, 3000);

		return () => clearInterval(timeout);
	}, [mutation.status]);

	const getFormStatus = (status: UseMutationResult['status']) => {
		if (status === 'idle') {
			return (
				<button className="btn btn-brand-1 hover-up w-100" type="submit">
					Submit & Register
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
					Account Created
				</button>
			);
		}
	};

	return (
		<form className="login-register needs-validation text-start mt-20" onSubmit={handleSubmit}>
			{inputs.map((input) => (
				<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
			))}
			<RegisterFormActions />
			<div className="form-group">{getFormStatus(mutation.status)}</div>
			<RegisterFormExtraActions />
		</form>
	);
};

const RegisterFormActions = () => {
	return (
		<div className="login_footer form-group d-flex justify-content-between">
			<label className="cb-container">
				<input type="checkbox" />
				<span className="text-small">Agree our terms and policy</span>
				<span className="checkmark" />
			</label>
			<Link legacyBehavior href="/contact">
				<a className="text-muted">Lean more</a>
			</Link>
		</div>
	);
};

const RegisterFormExtraActions = () => {
	return (
		<div className="text-muted text-center">
			Already have an account? &nbsp;
			<Link legacyBehavior href={Routes.ACCOUNT_LOGIN}>
				<a>Login</a>
			</Link>
		</div>
	);
};

export default RegisterForm;
