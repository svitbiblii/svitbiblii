'use client';

import { ReactNode, useState  } from 'react';
import SearchBox from '@/src/components/SearchBox';
import { BookDTO } from '@/src/types/book.dto';
import Book from '@/src/components/Book';

export default function SearchPage(): ReactNode {
	const [books, setBooks] = useState<BookDTO[]>([]);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h2>Search and Filter</h2>
				<SearchBox className="w-2/6 shadow-md" setSearchResult={setBooks} />
			</div>

			<div className="mt-4 grid grid-cols-3 gap-4">
				{books.map((book) => (
					<Book key={book.id} book={book} variant="large" className="w-full" />
				))}
			</div>
		</>
	);
}