import Head from 'next/head';

type Props = {
	headTitle?: string;
};

const PageHead = ({ headTitle }: Props) => {
	return (
		<Head>
			<title>{headTitle ? headTitle : 'JobBox Dashboard - Job Portal HTML Template'}</title>
			<link rel="shortcut icon" href="//dashboard-assets/imgs/template/favicon.svg" />
			<link rel="preconnect" href="https://fonts.bunny.net" />
		</Head>
	);
};

export default PageHead;
