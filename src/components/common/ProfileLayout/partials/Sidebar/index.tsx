import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { handleLogout } from '../../../../../services/accounts/handlers';
import { links } from './static';

type Props = {};

const percentage = 67;

const Sidebar = (props: Props) => {
	const [isToggled, setToggled] = useState(true);
	const toggleTrueFalse = () => setToggled(!isToggled);
	const router = useRouter();

	return (
		<>
			<div className={`nav ${isToggled ? 'close-nav' : ''}`}>
				<a className={`btn btn-expanded ${isToggled ? 'btn-collapsed' : ''}`} onClick={toggleTrueFalse} />
				<nav className="nav-main-menu">
					<ul className="main-menu">
						{links.map((link) => {
							const active: boolean = router.pathname === link.path;

							return (
								<li key={link.id}>
									<Link className={active ? 'active' : undefined} href={link.path}>
										<img src={`/dashboard-assets/imgs/page/dashboard/${link.icon}`} alt={link.label} />
										<span className="name">{link.label}</span>
									</Link>
								</li>
							);
						})}
						<li>
							<button onClick={handleLogout}>
								<img src="/dashboard-assets/imgs/page/dashboard/logout.svg" alt="jobBox" />
								<span className="name">Logout</span>
							</button>
						</li>
					</ul>
				</nav>
				<div className="border-bottom mb-20 mt-20" />
				<div className="box-profile-completed text-center mb-30">
					<div style={{ width: '50%', margin: '0 auto' }} className="mt-30 mb-30">
						<CircularProgressbar
							value={percentage}
							text={`${percentage}%`}
							background
							backgroundPadding={0}
							styles={buildStyles({
								backgroundColor: '#D8E0FD',
								textColor: '#05264E',
								pathColor: '#3498DB',
								trailColor: 'transparent',
								strokeLinecap: 'butt'
							})}
						/>
					</div>
					<h6 className="mb-10">Profile Completed</h6>
					<p className="font-xs color-text-mutted">Please add detailed information to your profile. This will help you develop your career more quickly.</p>
				</div>
				<div className="sidebar-border-bg mt-50">
					<span className="text-grey">WE ARE</span>
					<span className="text-hiring">HIRING</span>
					<p className="font-xxs color-text-paragraph mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto</p>
					<div className="mt-15">
						<Link className="btn btn-paragraph-2" href="#">
							Know More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
