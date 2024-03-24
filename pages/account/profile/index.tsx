import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../../../components/common/Layout';
import { Cookies } from '../../../enums/cookies';
import { Routes } from '../../../enums/routes';
import { handleLogout } from '../../../services/accounts/handlers';
import { useAuthStore } from '../../../services/accounts/stores';
import { PrivatePageProps } from '../../../types/app';
import { Session } from '../../../types/session';
import Loading from './Loading';

const ProfileTab = dynamic(() => import('./partials/ProfileTab'), { ssr: false, loading: () => <Loading /> });
const JobsTab = dynamic(() => import('./partials/JobsTab'), { ssr: false, loading: () => <Loading /> });
const SavedJobsTab = dynamic(() => import('./partials/SavedJobsTab'), { ssr: false, loading: () => <Loading /> });

const tabs = [
	{ icon: 'about-us', title: 'My Profile', element: <ProfileTab /> },
	{ icon: 'recruitment', title: 'My Job', element: <JobsTab /> },
	{ icon: 'people', title: 'Saved Jobs', element: <SavedJobsTab /> }
];

export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
	const { getCookie } = await import('cookies-next');

	const sessionCookie: CookieValueTypes = getCookie(Cookies.SESSION, { req, res });
	const session: Session | null = sessionCookie ? JSON.parse(sessionCookie as string) : null;

	if (!session) return { redirect: { destination: Routes.ROOT, permanent: true } };

	// TODO: Handle data prefetching

	return {
		props: { session }
	};
};

const ProfilePage: NextPage<PrivatePageProps> = ({ session }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const { setSession } = useAuthStore.getState();

	useEffect(() => {
		setSession(session);
	}, [session]); // eslint-disable-line react-hooks/exhaustive-deps

	const renderTabs = () => {
		const handleOnClick = (index: number) => {
			setActiveIndex(index);
		};

		return tabs.map((tab, index) => {
			const active = index === activeIndex;

			return (
				<li key={index}>
					<a className={`btn btn-border ${tab.icon}-icon mb-20 ${active ? 'active' : ''}`} onClick={() => handleOnClick(index)}>
						{tab.title}
					</a>
				</li>
			);
		});
	};

	return (
		<>
			<Head>
				<title>JobBox | Profile</title>
			</Head>
			<Layout>
				<div>
					<section className="section-box-2">
						<div className="container">
							<div className="banner-hero banner-image-single">
								<img src="/assets/imgs/page/candidates/img.png" alt="jobbox" />
								<a className="btn-editor" href="#" />
							</div>
							<div className="box-company-profile">
								<div className="image-compay">
									<img src="/assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
								</div>
								<div className="row mt-10">
									<div className="col-lg-8 col-md-12">
										<h5 className="f-18">
											Steven Jobs <span className="card-location font-regular ml-20">New York, US</span>
										</h5>
										<p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
									</div>
									<div className="col-lg-4 col-md-12 text-lg-end">
										<Link legacyBehavior href="page-contact">
											<a className="btn btn-preview-icon btn-apply btn-apply-big">Preview</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="border-bottom pt-10 pb-10" />
						</div>
					</section>
					<section className="section-box mt-50">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-4 col-sm-12">
									<div className="box-nav-tabs nav-tabs-profile mb-5">
										<ul className="nav" role="tablist">
											{renderTabs()}
											<li>
												<button className={`btn btn-border btn-logout mb-20`} onClick={handleLogout}>
													Logout
												</button>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
									<div className="content-single">
										<div className="tab-content">{tabs[activeIndex].element}</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box mt-50 mb-20">
						<div className="container">
							<div className="box-newsletter">
								<div className="row">
									<div className="col-xl-3 col-12 text-center d-none d-xl-block">
										<img src="/assets/imgs/template/newsletter-left.png" alt="joxBox" />
									</div>
									<div className="col-lg-12 col-xl-6 col-12">
										<h2 className="text-md-newsletter text-center">
											New Things Will Always
											<br /> Update Regularly
										</h2>
										<div className="box-form-newsletter mt-40">
											<form className="form-newsletter">
												<input className="input-newsletter" type="text" placeholder="Enter your email here" />
												<button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
											</form>
										</div>
									</div>
									<div className="col-xl-3 col-12 text-center d-none d-xl-block">
										<img src="/assets/imgs/template/newsletter-right.png" alt="joxBox" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
};

export default ProfilePage;
