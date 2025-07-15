'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/src/pages/root/PageInterface';
import { IoStarOutline } from 'react-icons/io5';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return <></>;
};

const Page: PageInterface = {
	id: 'favorite',
	href: '/favorite',
	icon: IoStarOutline,
	sidebarContent: outputSidebarContent(),
	content: outputContent,
};

export default Page;
