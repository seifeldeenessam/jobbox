import { Menu } from '@headlessui/react';
import Link from 'next/link';

type HeaderMenuProps = {};

type HeaderProps = {};

const HeaderMenu = (props: HeaderMenuProps) => {
	return (
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
	);
};

const Header = (props: HeaderProps) => {
	return (
		<div className="panel-head">
			<h5>Top Recruiters</h5>
			<HeaderMenu />
		</div>
	);
};

export default Header;
