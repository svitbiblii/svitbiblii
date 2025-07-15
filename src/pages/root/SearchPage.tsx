'use client';

import { ReactNode, useState } from 'react';
import { PageInterface } from '@/src/pages/main/PageInterface';
import { IoSearchOutline } from 'react-icons/io5';
import SearchBox from '@/components/SearchBox';
import { BookDTO } from '../../types/book.dto';

const OutputSidebarContent = (): ReactNode => {
	return <>Here I have to write the code to display the browsing history</>;
};

const OutputContent = (): ReactNode => {
	const [books, setBooks] = useState<BookDTO[]>([]);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h2>Search and Filter</h2>
				<SearchBox className="w-2/6 shadow-md" setSearchResult={setBooks} />
			</div>
			{books.map((book) => book.title)}
		</>
	);
};

const Page: PageInterface = {
	id: 'search',
	href: '/search',
	icon: IoSearchOutline,
	sidebarTitle: 'Search History',
	sidebarAlertMessage: 'Authorize to save your search history',
	sidebarContent: OutputSidebarContent(),
	content: OutputContent,
};

export default Page;
