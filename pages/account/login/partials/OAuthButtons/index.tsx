type Props = {};

const OAuthButtons = (props: Props) => {
	return (
		<div className="text-center">
			<p className="font-sm text-brand-2">Welcome back! </p>
			<h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
			<p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
			<button className="btn social-login hover-up mb-20">
				<img src="/assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
				<strong>Sign in with Google</strong>
			</button>
			<div className="divider-text-center">
				<span>Or continue with</span>
			</div>
		</div>
	);
};

export default OAuthButtons;
