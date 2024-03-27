import Link from 'next/link';

type Props = {};

const PopularSearches = (props: Props) => {
	return (
		<div className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
			<strong>Popular Searches:</strong>
			<Link legacyBehavior href="#">
				<a>Designer, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>Web, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>IOS, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>Developer, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>PHP, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>Senior, </a>
			</Link>
			<Link legacyBehavior href="#">
				<a>Engineer, </a>
			</Link>
		</div>
	);
};

export default PopularSearches;
