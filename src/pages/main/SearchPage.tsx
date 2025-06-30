'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/src/pages/main/PageInterface';
import { IoSearchOutline } from 'react-icons/io5';
import SearchBox from '@/components/SearchBox';

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h2>Search and Filter</h2>
				<SearchBox className="w-2/6 shadow-md" />
			</div>
		</>
	);
};

const Page: PageInterface = {
	id: 'search',
	href: '/search',
	icon: IoSearchOutline,
	sidebarTitle: 'Search History',
	sidebarAlertMessage: 'Authorize to save your search history',
	sidebarContent: outputSidebarContent(),
	content: outputContent(),
};

export default Page;
