import { useEffect, useState } from 'react';

function BackToTop() {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		// Handle clean-up function
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	const onScroll = () => {
		setHasScrolled(window.scrollY >= window.innerHeight);
	};

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button id="scrollUp" onClick={handleScrollToTop} style={{ position: 'fixed', zIndex: 9999, transform: hasScrolled ? 'translateY(0) scale(1)' : 'translateY(100%) scale(0)' }}>
			<i className="fi-rr-arrow-small-up" />
		</button>
	);
}
export default BackToTop;
