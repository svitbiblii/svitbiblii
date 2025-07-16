'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { IoBookmarkOutline } from 'react-icons/io5';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return <></>;
};

const Page: PageInterface = {
	id: 'bookmark',
	href: '/bookmark',
	icon: IoBookmarkOutline,
	sidebarAlertMessage: 'Authroize to save your bookmarks',
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
