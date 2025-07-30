'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';

const outputIcon = (): ReactNode => {
	return <>123</>;
};

const outputContent = (): ReactNode => {
	return <>admin upload page</>;
};

const Page: PageInterface = {
	id: 'admin_upload',
	href: '/upload',
	icon: outputIcon,
	content: outputContent,
};

export default Page;
