import OAuthButtons from './partials/OAuthButtons';
import RegisterForm from './partials/RegisterForm';

type Props = {};

const RegisterPage = (props: Props) => {
	return (
		<section className="pt-100 login-register">
			<div className="container">
				<div className="row login-register-cover">
					<div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
						<OAuthButtons />
						<RegisterForm />
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
