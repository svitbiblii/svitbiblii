// // scripts/addEpubPath.js
// import { PrismaClient } from '@prisma/client';
// // import path from 'path';

// async function main() {
//   const prisma = new PrismaClient();

//   try {
//     const epubFilePath = '/uploads/Novii_Zavit.epub';

//     const existingBook = await prisma.library.findUnique({
//       where: { id: 9 },
//     });

//     if (existingBook) {
//       await prisma.library.update({
//         where: { id: 9 },
//         data: {
//           format: 'epub',
//           filePath: epubFilePath,
//         },
//       });
//       console.log(`Шлях до ePub файлу оновлено для книги з ID 9: ${epubFilePath}`);
//     } else {
//       await prisma.library.create({
//         data: {
//           format: 'epub',
//           filePath: epubFilePath,
//           title: 'Новий Завіт',
//         },
//       });
//       console.log(`Книгу з ID 9 додано з шляхом до ePub файлу: ${epubFilePath}`);
//     }
//   } catch (error) {
//     console.error('Помилка додавання шляху до ePub:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();

// scripts/addEpubPath.mjs
import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

  try {
    const bookId = 23; // ID книги, яку потрібно оновити
    const bookLink = '/library/bible/new-testament-new'; // Посилання, яке ви хочете додати

    const existingBook = await prisma.library.findUnique({
      where: { id: bookId },
    });

    if (existingBook) {
      await prisma.library.update({
        where: { id: bookId },
        data: {
          link: bookLink, // Додаємо або оновлюємо поле link
        },
      });
      console.log(`Посилання додано/оновлено для книги з ID ${bookId}: ${bookLink}`);
    } else {
      console.log(`Книгу з ID ${bookId} не знайдено.`);
    }
  } catch (error) {
    console.error('Помилка додавання/оновлення посилання:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();