import Link from 'next/link';
import { useRouter } from 'next/router';
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
	const router = useRouter();

	useEffect(() => {
		document.addEventListener('scroll', () => {
			setShouldScroll(window.scrollY > 100);
		});
	}, []);

	const getActiveLink = (link: string) => {
		return router.pathname === link ? 'active' : undefined;
	};

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
										<a className={getActiveLink(Routes.ROOT)}>Home</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href={Routes.JOBS}>
										<a className={getActiveLink(Routes.JOBS)}>Find a Job</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href={Routes.RECRUITERS}>
										<a className={getActiveLink(Routes.RECRUITERS)}>Recruiters</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href={Routes.CANDIDATES}>
										<a className={getActiveLink(Routes.CANDIDATES)}>Candidates</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href={Routes.BLOG}>
										<a className={getActiveLink(Routes.BLOG)}>Blog</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href={Routes.CONTACT}>
										<a className={getActiveLink(Routes.CONTACT)}>Contact</a>
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
								<a className="btn btn-default btn-shadow ml-40 hover-up">Profile</a>
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
