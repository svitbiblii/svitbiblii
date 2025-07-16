import { BookDTO, BookSearchParams } from '@/src/types/book.dto';
import prismadb from '@/lib/prismadb';
import { Book } from '@prisma/client';
import { NotFoundError } from '@/services/service';

export default class BookService {
	static async get(id: BookDTO['id']): Promise<Book> {
		const book = await prismadb.book.findUnique({ where: { id } });
		if (!book) throw new NotFoundError('Could not find a book.');

		return book;
	}

	static async getAll(
		query: BookSearchParams['query'],
		category: BookSearchParams['category']
	): Promise<Book[]> {
		const where = {
			...(category && { category: category }),
			...(query && {
				OR: [
					{ title: { contains: query, mode: 'insensitive' as const } },
					{ author: { contains: query, mode: 'insensitive' as const } },
				],
			}),
		};

		return await prismadb.book.findMany({ where });
	}

	static toDTO(book: Book): BookDTO {
		return {
			id: book.id,
			title: book.title,
			author: book.author,
			link: book.link,
			content: book.content,
			category: book.category,
			format: book.format,
			filePath: book.filePath,
			slug: book.slug,
		};
	}
}
