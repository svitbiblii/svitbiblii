'use client';

import { ReactNode, useState } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { IoSearchOutline } from 'react-icons/io5';
import SearchBox from '@/components/SearchBox';
import { BookDTO } from '@/types/book.dto';
import Book from '@/components/Book';

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

			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{books.map((book) => (
					<Book key={book.id} book={book} variant="large" className="w-full" />
				))}
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
	sidebarContent: OutputSidebarContent,
	content: OutputContent,
};

export default Page;
