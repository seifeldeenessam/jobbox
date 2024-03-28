import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../public/assets/css/style.css';
import '../public/dashboard-assets/css/style.css';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }));

	useEffect(() => {
		require('../public/scripts/bootstrap.bundle.min.js');
	}, []);

	// TODO: Handle hydration (<Hydrate></Hydrate> component)

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />;
		</QueryClientProvider>
	);
}

export default MyApp;
