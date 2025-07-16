import { NextRequest, NextResponse } from 'next/server';
import BookService from '@/services/book.service';
import { BookSearchParams } from '../../../types/book.dto';

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;

	const bookSearchParams: BookSearchParams = {
		query: searchParams.get('query'),
		category: searchParams.get('category'),
	};

	const books = await BookService.getAll(bookSearchParams.query, bookSearchParams.category);

	const dto = books.map(BookService.toDTO);

	return NextResponse.json(dto);
}
