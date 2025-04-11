import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';

const prisma = new PrismaClient();

async function main() {
  try {
    const filePath = process.argv[2]; // Отримуємо шлях до файлу
    const title = process.argv[3];    // Отримуємо назву книги

    if (!filePath || !title) {
      console.error('Будь ласка, вкажіть шлях до файлу та назву книги як аргументи.');
      return;
    }

    const text = await fs.readFile(filePath, 'utf-8');

    const libraryItem = await prisma.library.create({
      data: {
        title: title,
        content: text,
      },
    });

    console.log(`Книга "${libraryItem.title}" успішно додана до бібліотеки з ID: ${libraryItem.id}`);
  } catch (error) {
    console.error('Помилка при імпорті книги:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();