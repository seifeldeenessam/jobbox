import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

const QUERY_CLIENT_CONFIG: QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
};

function App({ Component, pageProps, router }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_CONFIG));

	useEffect(() => {
		const isDashboardPage = router.pathname.includes('profile');

		if (isDashboardPage) require('@public/dashboard-assets/css/style.css');
		else require('@public/app-assets/css/style.css');
	}, [router.pathname]);

	// TODO: Handle hydration (<Hydrate></Hydrate> component)

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />;
		</QueryClientProvider>
	);
}

export default App;
