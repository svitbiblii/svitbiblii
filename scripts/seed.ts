import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type LibrarySeed = {
    title: string;
    author?: string;
    link?: string;
    content?: string;
    category?: string;
};

const libraries: LibrarySeed[] = [
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
        await db.library.deleteMany(); // Очистка таблицы перед вставкой
        await db.library.createMany({
            data: libraries,
            skipDuplicates: true
        });
        console.log("✅ Libraries seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding Libraries:", error);
    } finally {
        await db.$disconnect();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
