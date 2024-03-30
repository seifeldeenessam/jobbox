import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
	const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }));

	useEffect(() => {
		require('../public/scripts/bootstrap.bundle.min.js');
	}, []);

	useEffect(() => {
		const isDashboardPage = router.pathname.includes('profile');

		if (isDashboardPage) {
			require('../public/dashboard-assets/css/style.css');
		} else {
			require('../public/assets/css/style.css');
		}
	}, [router.pathname]);

	// TODO: Handle hydration (<Hydrate></Hydrate> component)

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />;
		</QueryClientProvider>
	);
}

export default MyApp;
