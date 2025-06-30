// app/api/get-book/[id]/route.ts (Server Route)  повертає дані з бази даних, включаючи шлях до файлу
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
	const { id } = params;

	try {
		const book = await prisma.library.findUnique({
			where: { id: parseInt(id, 10) },
		});

		if (!book) {
			return NextResponse.json({ error: 'Книга не знайдена' }, { status: 404 });
		}

		return NextResponse.json(book);
	} catch (error) {
		console.error('Помилка отримання даних про книгу:', error);
		return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
