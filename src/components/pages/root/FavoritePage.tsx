'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { IoStarOutline } from 'react-icons/io5';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): JSX.Element => {
	return <></>;
};

const Page: PageInterface = {
	id: 'favorite',
	href: '/favorite',
	icon: IoStarOutline,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
