import Layout from '@/components/common/Layout';
import { Cookies } from '@/enums/cookies';
import { Routes } from '@/enums/routes';
import { Session } from '@/types/session';
import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import ResetPasswordForm from './partials/ResetPasswordForm';
import ValidateTokenForm from './partials/ValidateTokenForm';

const SendTokenForm = dynamic(() => import('./partials/SendTokenForm'));

export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
	const { getCookie } = await import('cookies-next');

	const sessionCookie: CookieValueTypes = getCookie(Cookies.SESSION, { req, res });
	const session: Session | null = sessionCookie ? JSON.parse(sessionCookie as string) : null;

	if (session) return { redirect: { destination: Routes.ACCOUNT_PROFILE, permanent: true } };

	// TODO: Handle data prefetching

	return {
		props: {}
	};
};

const ResetPasswordPage: NextPage = () => {
	const [step, setStep] = useState<'send_otp' | 'validate_otp' | 'reset_password'>('send_otp');
	const [token, setToken] = useState<string | null>(null);

	const steps = {
		send_otp: <SendTokenForm onSuccess={setStep} />,
		validate_otp: <ValidateTokenForm onSuccess={[setStep, setToken]} />,
		reset_password: token === null ? undefined : <ResetPasswordForm token={token} />
	};

	return (
		<>
			<Head>
				<title>JobBox | Reset Password</title>
			</Head>
			<Layout>
				<section className="pt-100 login-register">
					<div className="container">
						<div className="row login-register-cover">
							<div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
								<div className="text-center">
									<p className="font-sm text-brand-2">Forgot Password</p>
									<h2 className="mt-10 mb-5 text-brand-1">Reset Your Password</h2>
									<p className="font-sm text-muted mb-30">Enter email address associated with your account and we'll send you a link to reset your password</p>
								</div>
								{steps[step]}
							</div>
							<div className="img-1 d-none d-lg-block">
								<img className="shape-1" src="/assets/imgs/page/login-register/img-5.svg" alt="JobBox" />
							</div>
							<div className="img-2">
								<img src="/assets/imgs/page/login-register/img-3.svg" alt="JobBox" />
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default ResetPasswordPage;
