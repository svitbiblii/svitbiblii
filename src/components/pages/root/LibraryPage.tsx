'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { IoLibraryOutline } from 'react-icons/io5';
// import { BiSolidBible } from "react-icons/bi";

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): JSX.Element => {
	return <></>;
};

const Page: PageInterface = {
	id: 'library',
	href: '/library',
	icon: IoLibraryOutline,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
