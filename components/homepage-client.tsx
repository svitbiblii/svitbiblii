'use client';

import { useTranslations } from 'next-intl';
import { useState, useCallback, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Search } from '@/components/search';
import { CreateRoute } from '@/components/create-route';

interface Book {
	id: number;
	title: string;
	author: string;
	name?: string;
	content?: string;
	icon?: string;
	anotation?: string;
	type?: string;
	link?: string;
}

interface HomepageClientProps {
	books: Book[];
}

const HomepageClient = ({ books }: HomepageClientProps) => {
	const t = useTranslations('Homepage');

	const [inputValue, setInputValue] = useState<string>('');
	const [initialList] = useState<Book[]>(books);
	const [filteredList, setFilteredList] = useState<Book[]>(books);
	const [selectedTab, setSelectedTab] = useState(0);
	const [storedBook, setStoredBook] = useState<string[]>([]);
	const [newId, setNewId] = useState('');

	useEffect(() => {
		const savedBooks = sessionStorage.getItem('bookname');
		if (savedBooks) {
			setStoredBook(JSON.parse(savedBooks));
		}
	}, []);

	useEffect(() => {
		if (newId) {
			const findBookById = storedBook.find((item) => item === newId);
			if (findBookById === undefined) {
				sessionStorage.setItem('bookname', JSON.stringify([...storedBook, newId]));
			}
		}
	}, [newId, storedBook]);

	const searchHandler = useCallback(() => {
		const filteredData = initialList.filter((book) => {
			return (
				book.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
				book.author?.toLowerCase().includes(inputValue.toLowerCase())
			);
		});
		setFilteredList(filteredData);
	}, [initialList, inputValue]);

	useEffect(() => {
		const timer = setTimeout(() => {
			searchHandler();
		}, 500);
		return () => clearTimeout(timer);
	}, [searchHandler]);

	const fData = initialList.filter(
		(book) =>
			book.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
			book.author?.toLowerCase().includes(inputValue.toLowerCase())
	);

	const tabs = [
		{
			title: `${t('category')}`,
			content:
				inputValue.length !== 0 ? (
					filteredList.length === 0 ? (
						<div className="p-4 border border-gray-200 rounded-lg shadow-sm">
							<p className="text-gray-600 dark:text-white">{t('result')}</p>
						</div>
					) : (
						filteredList.map((book) => (
							<Link
								key={book.id}
								href={book.link || '#'}
								onClick={() => setNewId(`${book.id}`)}
								className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
							>
								<div className="flex justify-between items-center hover:bg-blue-200">
									<Image
										className="mr-30 fit-picture block hover:bg-blue-200"
										src={book.icon || '/book-icon.png'}
										width={20}
										height={20}
										alt=""
									/>
									<h3 className="mt-0 mb-2 text-lg font-medium">
										{book.author} {book.title}
									</h3>
								</div>
								<p className="mb-0 text-gray-600 dark:text-white">
									{book.anotation}
								</p>
							</Link>
						))
					)
				) : (
					<CreateRoute />
				),
		},
		{
			title: `${t('audio')}`,
			content:
				inputValue.length !== 0 ? (
					filteredList.length === 0 ? (
						<div className="p-4 border border-gray-200 rounded-lg shadow-sm">
							<p className="text-gray-600 dark:text-white">{t('result')}</p>
						</div>
					) : (
						fData
							.filter((book) => book.type === 'audio')
							.map((book) => (
								<Link
									key={book.id}
									href={book.link || '#'}
									onClick={() => setNewId(`${book.id}`)}
									className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
								>
									<div className="flex justify-between items-center">
										<Image
											className="mr-30 fit-picture block"
											src={book.icon || '/book-icon.png'}
											width={20}
											height={20}
											alt=""
										/>
										<h3 className="mt-0 mb-2 text-lg font-medium">
											{book.author} {book.title}
										</h3>
									</div>
									<p className="mb-0 text-gray-600 dark:text-white">
										{book.anotation}
									</p>
								</Link>
							))
					)
				) : (
					<CreateRoute />
				),
		},
		{
			title: `${t('video')}`,
			content:
				inputValue.length !== 0 ? (
					filteredList.length === 0 ? (
						<div className="p-4 border border-gray-200 rounded-lg shadow-sm">
							<p className="text-gray-600 dark:text-white">{t('result')}</p>
						</div>
					) : (
						fData
							.filter((book) => book.type === 'video')
							.map((book) => (
								<Link
									key={book.id}
									href={book.link || '#'}
									onClick={() => setNewId(`${book.id}`)}
									className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
								>
									<div className="flex justify-between items-center">
										<Image
											className="mr-30 fit-picture block"
											src={book.icon || '/book-icon.png'}
											width={20}
											height={20}
											alt=""
										/>
										<h3 className="mt-0 mb-2 text-lg font-medium">
											{book.author} {book.title}
										</h3>
									</div>
									<p className="mb-0 text-gray-600 dark:text-white">
										{book.anotation}
									</p>
								</Link>
							))
					)
				) : (
					<CreateRoute />
				),
		},
		{
			title: `${t('texts')}`,
			content:
				inputValue.length !== 0 ? (
					filteredList.length === 0 ? (
						<div className="p-4 border border-gray-200 rounded-lg shadow-sm">
							<p className="text-gray-600 dark:text-white">{t('result')}</p>
						</div>
					) : (
						fData
							.filter((book) => book.type === 'text')
							.map((book) => (
								<Link
									key={book.id}
									href={book.link || '#'}
									onClick={() => setNewId(`${book.id}`)}
									className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
								>
									<div className="flex justify-between items-center">
										<Image
											className="mr-30 fit-picture block"
											src={book.icon || '/book-icon.png'}
											width={20}
											height={20}
											alt=""
										/>
										<h3 className="mt-0 mb-2 text-lg font-medium">
											{book.author} {book.title}
										</h3>
									</div>
									<p className="mb-0 text-gray-600 dark:text-white">
										{book.anotation}
									</p>
								</Link>
							))
					)
				) : (
					<CreateRoute />
				),
		},
	];

	return (
		<div className="h-min-full flex mt-16">
			<div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
				<Search inputValue={inputValue} setInputValue={setInputValue} />
				<div className="flex justify-center space-x-4 mb-6">
					{tabs.map((tab, index) => (
						<button
							key={index}
							onClick={() => setSelectedTab(index)}
							className={`text-xs px-4 py-2 rounded-md ${
								selectedTab === index
									? 'bg-blue-500 text-white hover:bg-blue-600'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							} `}
						>
							{tab.title}
						</button>
					))}
				</div>
				<div className="bg-white p-2 rounded-xl dark:text-white dark:bg-background focus:outline-none">
					{tabs.map((tab, index) => (
						<div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
							{tab.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomepageClient;
