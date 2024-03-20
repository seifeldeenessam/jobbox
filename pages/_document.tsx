import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<title>JobBox</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
