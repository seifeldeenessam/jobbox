import ProfileLayout from '@/components/common/ProfileLayout';
import VacancyChart from '@/components/elements/VacancyChart';
import BrandSlider from '@/components/sliders/BrandSlider';
import { Cookies } from '@/enums/cookies';
import { Routes } from '@/enums/routes';
import { PrivatePageProps } from '@/types/app';
import { Session } from '@/types/session';
import { Menu } from '@headlessui/react';
import { CookieValueTypes } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import LatestJobs from './partials/LatestJobs';
import TopCandidates from './partials/TopCandidates';
import TopRecruiters from './partials/TopRecruiters';

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
	return (
		<>
			<ProfileLayout breadcrumbTitle="Dashboard" breadcrumbActive="Dashboard">
				<div className="col-xxl-8 col-xl-7 col-lg-7">
					<div className="section-box">
						<div className="row">
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/computer.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												1568
												<span className="font-sm status up">
													25<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Interview Schedules</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/bank.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												284
												<span className="font-sm status up">
													5<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Applied Jobs</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/lamp.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												136
												<span className="font-sm status up">
													12<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Task Bids Won</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/headphone.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												985
												<span className="font-sm status up">
													5<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Application Sent</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/look.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												165
												<span className="font-sm status up">
													15<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Profile Viewed</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/open-file.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												2356<span className="font-sm status down">- 2%</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">New Messages</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/doc.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												254
												<span className="font-sm status up">
													2<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">Articles Added</p>
									</div>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
								<div className="card-style-1 hover-up">
									<div className="card-image">
										<img src="/dashboard-assets/imgs/page/dashboard/man.svg" alt="jobBox" />
									</div>
									<div className="card-info">
										<div className="card-title">
											<h3>
												548
												<span className="font-sm status up">
													48<span>%</span>
												</span>
											</h3>
										</div>
										<p className="color-text-paragraph-2">CV Added</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-box">
						<div className="container">
							<div className="panel-white">
								<div className="panel-head">
									<h5>Vacancy Stats</h5>
									<Menu as="div">
										<Menu.Button as="a" className="menudrop" />
										<Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: '0', left: 'auto' }}>
											<li>
												<Link className="dropdown-item active" href="#">
													Add new
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="#">
													Settings
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="#">
													Actions
												</Link>
											</li>
										</Menu.Items>
									</Menu>
								</div>
								<div className="panel-body">
									<VacancyChart />
								</div>
							</div>
						</div>
					</div>
					<LatestJobs />
				</div>
				<div className="col-xxl-4 col-xl-5 col-lg-5">
					<TopCandidates />
					<TopRecruiters />
					<div className="section-box">
						<div className="container">
							<div className="panel-white">
								<div className="panel-head">
									<h5>Queries by search</h5>
									<Menu as="div">
										<Menu.Button as="a" className="menudrop" />
										<Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: '0', left: 'auto' }}>
											<li>
												<Link className="dropdown-item active" href="#">
													Add new
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="#">
													Settings
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" href="#">
													Actions
												</Link>
											</li>
										</Menu.Items>
									</Menu>
								</div>
								<div className="panel-body">
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Developer</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">2635</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '100%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">UI/Ux Designer</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">1658</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '90%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Marketing</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">1452</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '80%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Content manager</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">1325</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '70%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Ruby on rain</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">985</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '60%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Human hunter</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">920</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '50%' }} />
											</div>
										</div>
									</div>
									<div className="card-style-5 hover-up">
										<div className="card-title">
											<h6 className="font-sm">Finance</h6>
										</div>
										<div className="card-progress">
											<div className="number font-sm">853</div>
											<div className="progress">
												<div className="progress-bar" style={{ width: '40%' }} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<div className="section-box">
						<div className="container">
							<div className="panel-white pt-30 pb-30 pl-15 pr-15">
								<div className="box-swiper">
									<div className="swiper-container swiper-group-10">
										<BrandSlider />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default ProfilePage;
