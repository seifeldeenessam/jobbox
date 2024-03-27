import Link from 'next/link';
import { Routes } from '../../../../../enums/routes';
import { handleLogout } from '../../../../../services/accounts/handlers';
import { useAuthStore } from '../../../../../services/accounts/stores';

type Props = {
	openClass: string;
};

const SideBar = ({ openClass }: Props) => {
	const { session } = useAuthStore();

	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-search mobile-header-border mb-30">
								<form action="#">
									<input type="text" placeholder="Search…" />
									<i className="fi-rr-search" />
								</form>
							</div>
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading">
										<li>
											<Link legacyBehavior href={Routes.ROOT}>
												<a>Home</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.JOBS}>
												<a>Find a Job</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.RECRUITERS}>
												<a>Recruiters</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.CANDIDATES}>
												<a>Candidates</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.BLOG}>
												<a>Blog</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.CONTACT}>
												<a>Contact</a>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div className="mobile-account">
								<h6 className="mb-10">Your Account</h6>
								{session ? (
									<ul className="mobile-menu font-heading">
										<li>
											<Link legacyBehavior href={Routes.ACCOUNT_PROFILE}>
												<a>Profile</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="#">
												<a>Work Preferences</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="#">
												<a>Account Settings</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="#">
												<a>Go Pro</a>
											</Link>
										</li>
										<li>
											<button onClick={handleLogout}>Logout</button>
										</li>
									</ul>
								) : (
									<ul className="mobile-menu font-heading">
										<li>
											<Link legacyBehavior href={Routes.ACCOUNT_REGISTER}>
												<a>Register</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href={Routes.ACCOUNT_LOGIN}>
												<a>Login</a>
											</Link>
										</li>
									</ul>
								)}
							</div>
							<div className="site-copyright">
								<p>Copyright 2022 © JobBox.</p>
								<small>Designed by AliThemes.</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
