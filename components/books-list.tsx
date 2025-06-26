'use client';

import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { CATEGORIES } from '@/components/categories';
import { Library } from '@prisma/client';

const BooksList = ({ books }: { books: (Library & { link: string })[] }) => {
	const [storedBook, setStoredBook] = useState<string[]>([]);
	const [newId, setNewId] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('all');

	useEffect(() => {
		const savedBooks = sessionStorage.getItem('bookname');
		if (savedBooks) {
			setStoredBook(JSON.parse(savedBooks));
		}
	}, []);

	useEffect(() => {
		if (newId && !storedBook.includes(newId)) {
			const updatedBooks = [...storedBook, newId];
			sessionStorage.setItem('bookname', JSON.stringify(updatedBooks));
			setStoredBook(updatedBooks);
		}
	}, [newId, storedBook]);

	const filteredBooks =
		selectedCategory === 'all'
			? books
			: books.filter((book) => book.category === selectedCategory);

	return (
		<div className="p-6">
			<div className="flex flex-wrap mb-6">
				{CATEGORIES().map(({ id, name }) => (
					<button
						key={id}
						onClick={() => setSelectedCategory(id)}
						className={`mb-2 mr-4 px-4 py-2 ${
							selectedCategory === id
								? 'bg-primary text-primary-foreground'
								: 'bg-gray-200 dark:text-black'
						}`}
					>
						{name}
					</button>
				))}
			</div>

			<ul className="pl-0">
				{filteredBooks.map((book) => (
					<li className="list-none mb-2" key={book.id}>
						<Link
							href={book.link}
							onClick={() => setNewId(book.id.toString())}
							className="block p-2 pl-0 rounded-lg hover:bg-primary-lite dark:hover:text-stone-800 transition-colors duration-200"
						>
							<p className="mr-10 italic">{book.author}</p>
							<p className="mr-10 font-bold">{book.title}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BooksList;
