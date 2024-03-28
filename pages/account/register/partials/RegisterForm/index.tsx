import Link from 'next/link';
import { useEffect } from 'react';
import FormField from '../../../../../components/common/FormField';
import { Routes } from '../../../../../enums/routes';
import { handleRegister } from '../../../../../services/accounts/handlers';
import { getFormStatus } from '../../../../../utilities/forms';

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

	const status = getFormStatus(mutation.status, 'Submit & Register', form.formState.errors.root?.message!, 'Account Created, Redirecting...');

	return (
		<form className="login-register needs-validation text-start mt-20" onSubmit={handleSubmit}>
			{inputs.map((input) => (
				<FormField control={form.control} watch={form.watch} setValue={form.setValue} formState={form.formState} {...input} key={input.identifier} />
			))}
			<RegisterFormActions />
			<div className="form-group">
				<button className={`btn ${status.className} hover-up w-100`} type="submit" disabled={status.disabled}>
					{status.label}
				</button>
			</div>
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
