import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['app', 'components', 'i18n', 'lib', 'scripts'],
		files: [],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
			},
		],
	},
};
 
export default withNextIntl(nextConfig);

// import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
 
// export default withNextIntl(nextConfig);

