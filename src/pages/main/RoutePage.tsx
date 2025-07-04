'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/src/pages/main/PageInterface';
import { TbRouteSquare } from 'react-icons/tb';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return <></>;
};

const Page: PageInterface = {
	id: 'route',
	href: '/route',
	icon: TbRouteSquare,
	sidebarContent: outputSidebarContent(),
	content: outputContent,
};

export default Page;
