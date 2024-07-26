import Layout from '@/components/common/Layout';
import { Cookies } from '@/enums/cookies';
import { Routes } from '@/enums/routes';
import { Session } from '@/types/session';
import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import LoginForm from './partials/LoginForm';

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

const LoginPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>JobBox | Login</title>
			</Head>
			<Layout>
				<section className="pt-100 login-register">
					<div className="container">
						<div className="row login-register-cover">
							<div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
								<div className="text-center">
									<p className="font-sm text-brand-2">Welcome back!</p>
									<h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
									<p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
								</div>
								<LoginForm />
							</div>
							<div className="img-1 d-none d-lg-block">
								<img className="shape-1" src="/app-assets/imgs/page/login-register/img-4.svg" alt="JobBox" />
							</div>
							<div className="img-2">
								<img src="/app-assets/imgs/page/login-register/img-3.svg" alt="JobBox" />
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default LoginPage;
