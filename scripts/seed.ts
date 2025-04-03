import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type BookSeed = {
    title: string;
    author: string;
    link: string;
    name?: string;
    content?: string;
    category?: string;
};

const books: BookSeed[] = [
    {
        title: "Bibl",
        author: "Author A",
        link: "/",
        content: "some content",
        category: "Bibl",
    },
    {
        title: "Cloud of biblical tradition",
        author: "Author B",
        link: "/",
        content: "something about cloud",
        category: "Cloud of biblical tradition"
    },
    {
        title: "Biblical Studies",
        author: "Author C",
        link: "/",
        content: "academic view",
        category: "Biblical Studies"
    },
    {
        title: "Patristics",
        author: "Author D",
        link: "/",
        content: "church fathers stuff",
        category: "Patristics"
    },
    {
        title: "Philosophy and History",
        author: "Author E",
        link: "/",
        content: "deep thoughts",
        category: "Philosophy and History"
    },
    {
        title: "Dictionaries and Encyclopedias",
        author: "Author F",
        link: "/",
        content: "reference materials",
        category: "Dictionaries and Encyclopedias",
    },
    {
        title: "Theology",
        author: "Author G",
        link: "/",
        content: "about God",
        category: "Theology"
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
