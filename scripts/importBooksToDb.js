// scripts/importBooksToDb.js
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Допоміжна функція для генерації slug
function generateSlug(title) {
	if (!title) return '';
	// Проста функція для транслітерації та перетворення на slug
	// Можна використовувати бібліотеки, наприклад 'slugify', але для базових потреб цього достатньо
	let slug = title
		.toLowerCase()
		.trim()
		.replace(/і/g, 'i') // Транслітерація українських літер
		.replace(/ї/g, 'yi')
		.replace(/є/g, 'ye')
		.replace(/а/g, 'a')
		.replace(/б/g, 'b')
		.replace(/в/g, 'v')
		.replace(/г/g, 'g')
		.replace(/д/g, 'd')
		.replace(/е/g, 'e')
		.replace(/ж/g, 'zh')
		.replace(/з/g, 'z')
		.replace(/и/g, 'y')
		.replace(/й/g, 'y')
		.replace(/к/g, 'k')
		.replace(/л/g, 'l')
		.replace(/м/g, 'm')
		.replace(/н/g, 'n')
		.replace(/о/g, 'o')
		.replace(/п/g, 'p')
		.replace(/р/g, 'r')
		.replace(/с/g, 's')
		.replace(/т/g, 't')
		.replace(/у/g, 'u')
		.replace(/ф/g, 'f')
		.replace(/х/g, 'kh')
		.replace(/ц/g, 'ts')
		.replace(/ч/g, 'ch')
		.replace(/ш/g, 'sh')
		.replace(/щ/g, 'shch')
		.replace(/ь/g, '')
		.replace(/ю/g, 'yu')
		.replace(/я/g, 'ya')
		.replace(/’/g, '') // Видалення апострофа
		.replace(/\s+/g, '-') // Замінити пробіли на дефіси
		.replace(/[^\w-]+/g, '') // Видалити всі не-алфавітно-цифрові символи крім дефісів
		.replace(/--+/g, '-'); // Замінити кілька дефісів на один

	// Додаємо випадковий хеш, якщо slug вже існує (для гарантії унікальності)
	// Це дуже важливо, якщо у вас є книги з однаковими назвами.
	// Цей хеш можна додати, якщо upsert згенерує помилку унікальності, але для простоти
	// краще, щоб slug був унікальним з самого початку.
	// Для цього скрипту просто генеруємо його, а Prisma перевірить унікальність.
	// Якщо буде помилка, то треба буде вручну перевірити дублікати або додати більш складну логіку генерації.

	return slug;
}

async function importBooks() {
	try {
		// Шлях до вашого JSON-файлу. Припустимо, він знаходиться в корені проєкту.
		const jsonFilePath = path.join(process.cwd(), 'books.json'); // process.cwd() дає кореневий шлях проєкту
		const booksData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

		console.log(`Starting import of ${booksData.length} books...`);

		console.log('Clearing existing books from the database...');
		await prisma.library.deleteMany({}); // !!! ВИДАЛИТИ ВСІ ЗАПИСИ !!!
		console.log('Database cleared.');

		for (const book of booksData) {
			// Генерація slug, якщо його немає, або використання існуючого
			const finalSlug = book.slug || generateSlug(book.title);

			// Перевірка, чи всі необхідні поля присутні
			if (!book.id || !book.title || !finalSlug) {
				console.warn(
					`Skipping book due to missing required fields: ${JSON.stringify(book)}`
				);
				continue; // Пропустити поточну книгу, якщо немає ID, title або slug
			}

			await prisma.library.upsert({
				where: { id: book.id }, // Використовуємо 'id' з JSON як унікальний ідентифікатор
				update: {
					title: book.title,
					author: book.author,
					link: book.link,
					content: book.content,
					category: book.category,
					slug: finalSlug, // Обов'язково передаємо згенерований/існуючий slug
				},
				create: {
					id: book.id, // Передаємо id з JSON
					title: book.title,
					author: book.author,
					link: book.link,
					content: book.content,
					category: book.category,
					slug: finalSlug, // Обов'язково передаємо згенерований/існуючий slug
				},
			});
			console.log(`Upserted book: ${book.title} (ID: ${book.id}, Slug: ${finalSlug})`);
		}

		console.log('All books imported successfully!');
	} catch (error) {
		console.error('Error importing books:', error);
		if (error.code === 'P2002') {
			// Prisma Client error code for unique constraint violation
			console.error(
				'Unique constraint violation. This often means a duplicate ID or slug was found.'
			);
			console.error(
				'Check your JSON data for duplicate IDs or slugs, or ensure the slug generation is robust.'
			);
		}
	} finally {
		await prisma.$disconnect();
	}
}

importBooks();
