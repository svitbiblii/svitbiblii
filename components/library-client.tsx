'use client';

import { useTranslations } from 'next-intl';
import BooksList from '@/components/books-list';
import { Library } from '@prisma/client';

interface LibraryClientProps {
	books: (Library & { link: string })[];
}

const LibraryClient = ({ books }: LibraryClientProps) => {
	const t = useTranslations('Library');

	return (
		<div className="h-min-full flex mt-16">
			<div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
				<h2>{t('title')}</h2>
				<BooksList books={books} />
			</div>
		</div>
	);
};

export default LibraryClient;
