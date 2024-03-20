import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../components/common/Layout';
import '../public/assets/css/style.css';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require('../public/assets/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;
