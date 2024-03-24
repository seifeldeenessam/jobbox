import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../../../components/common/Layout';
import { Cookies } from '../../../enums/cookies';
import { Routes } from '../../../enums/routes';
import { Session } from '../../../types/session';
import OAuthButtons from './partials/OAuthButtons';
import RegisterForm from './partials/RegisterForm';

type Props = {};

export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
	const { getCookie } = await import('cookies-next');

	const sessionCookie: CookieValueTypes = getCookie(Cookies.SESSION, { req, res });
	const session: Session | null = sessionCookie ? JSON.parse(sessionCookie as string) : null;

	if (session) return { redirect: { destination: Routes.ACCOUNT_PROFILE, permanent: true } };

	// TODO: Handle data prefetching

	return {
		props: { session }
	};
};

const RegisterPage = (props: Props) => {
	return (
		<Layout>
			<Head>
				<title>JobBox | Register</title>
			</Head>
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
		</Layout>
	);
};

export default RegisterPage;
