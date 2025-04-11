import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const book = await prisma.library.findUnique({
      where: {
        id: parseInt(id, 10), // Використовуємо десяткову систему числення
      },
    });

    if (!book) {
      return NextResponse.json({ error: 'Книга не знайдена' }, { status: 404 });
    }

    return NextResponse.json(book);
  } catch (error) {
    console.error('Помилка отримання книги:', error);
    return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}