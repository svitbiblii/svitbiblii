import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type BookSeed = {
    title: string;
    author: string;
    link: string;
    name?: string;
    content?: string;
};

const books: BookSeed[] = [
    {
        name: "Bibl",
        content: "some content",
        title: "Bibl1",
        author: "Author A",
        link: "/"
    },
    {
        name: "Cloud of biblical tradition",
        content: "something about cloud",
        title: "Cloud of biblical tradition",
        author: "Author B",
        link: "/"
    },
    {
        name: "Biblical Studies",
        content: "academic view",
        title: "Biblical Studies",
        author: "Author C",
        link: "/"
    },
    {
        name: "Patristics",
        content: "church fathers stuff",
        title: "Patristics",
        author: "Author D",
        link: "/"
    },
    {
        name: "Philosophy and History",
        content: "deep thoughts",
        title: "Philosophy and History",
        author: "Author E",
        link: "/"
    },
    {
        name: "Dictionaries and Encyclopedias",
        content: "reference materials",
        title: "Dictionaries and Encyclopedias",
        author: "Author F",
        link: "/"
    },
    {
        name: "Theology",
        content: "about God",
        title: "Theology",
        author: "Author G",
        link: "/"
    }
];

async function main() {
    try {
        await db.books.deleteMany(); // 🧹 Очистка таблицы перед вставкой
        await db.books.createMany({
            data: books,
            skipDuplicates: true
        });
        console.log("✅ Books seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding books:", error);
    } finally {
        await db.$disconnect();
    }
}

main();
