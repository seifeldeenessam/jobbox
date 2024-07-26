/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [{ hostname: '15.237.249.15' }, { hostname: 'placehold.co' }]
	}
};

module.exports = nextConfig;
