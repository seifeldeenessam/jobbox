import { UseMutationResult } from '@tanstack/react-query';
import Link from 'next/link';
import FormField from '../../../components/common/FormField';
import { handleRegister } from '../../../services/accounts/handlers';

type Props = {};

const RegisterPage = (props: Props) => {
	const { mutation, form, inputs, handleSubmit } = handleRegister();

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
		<section className="pt-100 login-register">
			<div className="container">
				<div className="row login-register-cover">
					<div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
						<div className="text-center">
							<p className="font-sm text-brand-2">Register </p>
							<h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
							<p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
							<button className="btn social-login hover-up mb-20" disabled>
								<img src="/assets/imgs/template/icons/icon-google.svg" alt="Google logo" />
								<strong>Sign up with Google</strong>
							</button>
							<div className="divider-text-center">
								<span>Or continue with</span>
							</div>
						</div>
						<form className="login-register needs-validation text-start mt-20" onSubmit={handleSubmit}>
							{inputs.map((input) => (
								<FormField control={form.control} formState={form.formState} {...input} key={input.identifier} />
							))}
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
							<div className="form-group">{getFormStatus(mutation.status)}</div>
							<div className="text-muted text-center">
								Already have an account? &nbsp;
								<Link legacyBehavior href="/account/login">
									<a>Login in</a>
								</Link>
							</div>
						</form>
					</div>
					<div className="img-1 d-none d-lg-block">
						<img className="shape-1" src="/assets/imgs/page/login-register/img-1.svg" alt="JobBox" />
					</div>
					<div className="img-2">
						<img src="/assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
