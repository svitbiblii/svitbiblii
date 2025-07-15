'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { BookDTO } from '../types/book.dto';

interface BookProps {
	book: BookDTO;
	variant: 'large' | 'small';
}

const Book: React.FC<BookProps> = ({ book, variant }) => {
	const [isContentExpanded, setIsContentExpanded] = useState(false);
	const MAX_CONTENT_LENGTH = 150;
	const commonCardClasses =
		'bg-white dark:bg-gray-800 rounded-lg shadow-card-soft overflow-hidden flex';

	if (!book) {
		console.error('Book component received an undefined or null book prop.');
		return null;
	}

	if (variant === 'large') {
		const showExpandButton = book.content && book.content.length > MAX_CONTENT_LENGTH;
		const displayedContent =
			showExpandButton && !isContentExpanded
				? `${book.content!.substring(0, MAX_CONTENT_LENGTH)}...`
				: book.content;

		return (
			<div className={`${commonCardClasses} h-auto max-w-2xl mx-auto`}>
				<div className="p-4 flex flex-col justify-between flex-grow w-2/3">
					<div className="mb-4">
						<p className="text-left font-semibold text-gray-900 border-b border-gray-300 dark:text-white line-clamp-2">
							{book.title}
						</p>
						{book.author && (
							<p className="text-gray-600 dark:text-gray-400 line-clamp-1">
								{book.author}
							</p>
						)}
					</div>

					<div>
						{book.content && (
							<>
								<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
									{displayedContent}
								</p>
								{showExpandButton && (
									<button
										onClick={() => setIsContentExpanded(!isContentExpanded)}
										className="text-primary hover:text-primary-dark font-medium focus:outline-none"
									>
										{isContentExpanded ? 'Згорнути' : 'Розгорнути'}
									</button>
								)}
							</>
						)}
					</div>

					<div className="mt-4 flex">
						{book.link && (
							<>
								<Link
									href={book.link}
									className="inline-flex items-center px-4 py-2 mr-10 border-2 border-primary font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
								>
									Читати
								</Link>
								<Link
									href={book.link}
									className="inline-flex items-center px-4 py-2 border-2 border-primary font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
								>
									Слухати
								</Link>
							</>
						)}
					</div>
				</div>

				<div className="relative w-1/4 flex-shrink-0 p-2">
					<div className="flex items-center justify-center w-full h-full">
						<div className="absolute inset-y-4 right-4 w-[calc(100%-1rem)] h-[calc(100%-2rem)] bg-primary rounded-lg shadow-lg flex flex-col items-center justify-center text-primary-foreground p-2 text-center">
							<p className="font-bold leading-tight mb-10 line-clamp-3">
								{book.author}
							</p>
							<p className="font-bold leading-tight line-clamp-3">{book.title}</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className={`${commonCardClasses} w-48 md:w-56 lg:w-64 transform transition duration-300 hover:scale-105 flex-col`}
			>
				<div className="p-4 flex flex-col flex-grow">
					<p className="italic text-gray-600">{book.author}</p>
					<p className="font-bold text-gray-600">{book.title}</p>
				</div>
			</div>
		);
	}
};

export default Book;
