import { ReactNode, useState } from 'react';
import BackToTop from './partials/BackToTop';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Sidebar from './partials/SideBar';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	const [openClass, setOpenClass] = useState('');

	const handleOpen = () => {
		document.body.classList.add('mobile-menu-active');
		setOpenClass('sidebar-visible');
	};

	const handleRemove = () => {
		if (openClass === 'sidebar-visible') {
			setOpenClass('');
			document.body.classList.remove('mobile-menu-active');
		}
	};

	return (
		<>
			<div className="body-overlay-1" onClick={handleRemove} />
			<Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} />
			<Sidebar openClass={openClass} />
			<main className="main">{children}</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default Layout;
