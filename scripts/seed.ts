import {deprecatedEnvVarMap} from "@prisma/fetch-engine";

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try{
        await db.books.createMany({
            data: [
                { name: "Bibl", content: "some content", title: "Bibl", author: "Author A" },
                { name: "Cloud of biblical tradition", content: "something about cloud", title: "Bibl", author: "Author B" },
                { name: "Biblical Studies", content: "academic view", title: "Bibl", author: "Author C" },
                { name: "Patristics", content: "church fathers stuff", title: "Bibl", author: "Author D" },
                { name: "Philosophy and History", content: "deep thoughts", title: "Bibl", author: "Author E" },
                { name: "Dictionaries and Encyclopedias", content: "reference materials", title: "Bibl", author: "Author F" },
                { name: "Theology", content: "about God", title: "Bibl", author: "Author G" }
            ],
            skipDuplicates: true
        })
    }catch (error) {
        console.error("Error seeding default categories", error);
    }finally{
        await db.$disconnect();
    }
}

main();