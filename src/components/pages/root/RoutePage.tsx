'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { TbRouteSquare } from 'react-icons/tb';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): JSX.Element => {
	return <></>;
};

const Page: PageInterface = {
	id: 'route',
	href: '/route',
	icon: TbRouteSquare,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
