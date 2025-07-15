'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/src/pages/root/PageInterface';
import { LiaUserShieldSolid } from 'react-icons/lia';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return <>admin</>;
};

const Page: PageInterface = {
	id: 'admin',
	href: '/admin',
	icon: LiaUserShieldSolid,
	sidebarAlertMessage: 'admin',
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
