'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';

const outputIcon = (): ReactNode => {
	return <i>intro</i>;
};

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return <></>;
};

const Page: PageInterface = {
	id: 'intro',
	href: '/intro',
	icon: outputIcon,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
