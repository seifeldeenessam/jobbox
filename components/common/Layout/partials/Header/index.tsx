import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Routes } from '../../../../../enums/routes';
import { useAuthStore } from '../../../../../services/accounts/stores';

type Props = {
	handleOpen: () => void;
	handleRemove: () => void;
	openClass: string;
};

const Header = ({ handleOpen, handleRemove, openClass }: Props) => {
	const [shouldScroll, setShouldScroll] = useState(false);
	const { session } = useAuthStore();

	useEffect(() => {
		document.addEventListener('scroll', () => {
			setShouldScroll(window.scrollY > 100);
		});
	}, []);

	const handleMenuToggler = () => {
		handleOpen();
		handleRemove();
	};

	return (
		<header className={shouldScroll ? 'header sticky-bar stick' : 'header sticky-bar'}>
			<div className="container">
				<div className="main-header">
					<div className="header-left">
						<div className="header-logo">
							<Link legacyBehavior href={Routes.ROOT}>
								<a className="d-flex">
									<img alt="jobBox" src="/assets/imgs/template/jobhub-logo.svg" />
								</a>
							</Link>
						</div>
					</div>
					<div className="header-nav">
						<nav className="nav-main-menu">
							<ul className="main-menu">
								<li>
									<Link legacyBehavior href={Routes.ROOT}>
										<a className="active">Home</a>
									</Link>
								</li>
								<li className="has-children">
									<Link legacyBehavior href="/jobs-grid">
										<a>Find a Job</a>
									</Link>

									<ul className="sub-menu">
										<li>
											<Link legacyBehavior href="/jobs-grid">
												<a>Jobs Grid</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/jobs-list">
												<a>Jobs List</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/job-details">
												<a>Jobs Details</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/job-details-2">
												<a>Jobs Details 2 </a>
											</Link>
										</li>
									</ul>
								</li>
								<li className="has-children">
									<Link legacyBehavior href="/companies-grid">
										<a>Recruiters</a>
									</Link>

									<ul className="sub-menu">
										<li>
											<Link legacyBehavior href="/companies-grid">
												<a>Recruiters</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/company-details">
												<a>Company Details</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className="has-children">
									<Link legacyBehavior href="/candidates-grid">
										<a>Candidates</a>
									</Link>

									<ul className="sub-menu">
										<li>
											<Link legacyBehavior href="/candidates-grid">
												<a>Candidates Grid</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/candidate-details">
												<a>Candidate Details</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/candidate-profile">
												<a>Candidate Profile</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className="has-children">
									<Link legacyBehavior href="/blog-grid">
										<a>Pages</a>
									</Link>

									<ul className="sub-menu">
										<li>
											<Link legacyBehavior href="/about">
												<a>About Us</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/pricing">
												<a>Pricing Plan</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/contact">
												<a>Contact Us</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/register">
												<a>Register</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/login">
												<a>Login</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/reset-password">
												<a>Reset Password</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/content-protected">
												<a>Content Protected</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className="has-children">
									<Link legacyBehavior href="/blog-grid">
										<a>Blog</a>
									</Link>

									<ul className="sub-menu">
										<li>
											<Link legacyBehavior href="/blog-grid">
												<a>Blog Grid</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/blog-grid-2">
												<a>Blog Grid 2</a>
											</Link>
										</li>
										<li>
											<Link legacyBehavior href="/blog-details">
												<a>Blog Single</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link legacyBehavior href="/contact">
										<a>Contact</a>
									</Link>
								</li>
							</ul>
						</nav>
						<div className={`burger-icon burger-icon-white ${openClass && 'burger-close'}`} onClick={handleMenuToggler}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="header-right">
						{session ? (
							<Link legacyBehavior href={Routes.ACCOUNT_LOGIN}>
								<a className="btn btn-default btn-shadow ml-40 hover-up">My Profile</a>
							</Link>
						) : (
							<div className="block-signin">
								<Link legacyBehavior href={Routes.ACCOUNT_REGISTER}>
									<a className="text-link-bd-btom hover-up">Register</a>
								</Link>
								<Link legacyBehavior href={Routes.ACCOUNT_LOGIN}>
									<a className="btn btn-default btn-shadow ml-40 hover-up">Login</a>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
