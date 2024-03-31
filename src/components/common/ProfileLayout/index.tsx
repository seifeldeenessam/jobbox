import { ReactNode, useState } from 'react';
import Breadcrumb from './partials/Breadcrumb';
import BurgerIcon from './partials/BurgerIcon';
import Footer from './partials/Footer';
import Header from './partials/Header';
import MobileMenu from './partials/MobileMenu';
import PageHead from './partials/PageHead';
import Sidebar from './partials/Sidebar';

type Props = {
	headTitle?: string;
	breadcrumbTitle: string;
	breadcrumbActive: string;
	children?: ReactNode;
};

const ProfileLayout = ({ headTitle, breadcrumbTitle, breadcrumbActive, children }: Props) => {
	const [isToggled, setToggled] = useState(false);

	const handleToggle = () => {
		setToggled(!isToggled);
		!isToggled ? document.body.classList.add('mobile-menu-active') : document.body.classList.remove('mobile-menu-active');
	};

	// useEffect(() => {
	// 	const WOW = require('wowjs');
	// 	window.wow = new WOW.WOW({
	// 		live: false
	// 	});
	// 	window.wow.init();
	// },[]);

	return (
		<>
			<PageHead headTitle={headTitle} />
			<div className="body-overlay-1" onClick={handleToggle} />
			<Header />
			<BurgerIcon handleToggle={handleToggle} isToggled={isToggled} />
			<MobileMenu handleToggle={handleToggle} isToggled={isToggled} />
			<main className="main">
				<Sidebar />
				<div className="box-content">
					{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbActive={breadcrumbActive} />}
					<div className="row">{children}</div>
					<Footer />
				</div>
			</main>
		</>
	);
};

export default ProfileLayout;
