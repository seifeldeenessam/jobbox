import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../public/assets/css/style.css';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require('../public/assets/js/bootstrap.bundle.min.js');
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
