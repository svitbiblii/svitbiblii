import { NextRequest, NextResponse } from 'next/server';
import BookService from '@/services/book.service';

interface ParamsType {
	book_id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsType }) {
	try {
		const book = await BookService.get(+params.book_id);

		const dto = BookService.toDTO(book);

		return NextResponse.json(dto);
	} catch (e: unknown) {
		if (e instanceof Error) {
			return NextResponse.json({ error: e.message }, { status: 404 });
		}
	}
}
