// app/pages/library/page.tsx
import prismadb from "@/lib/prismadb";
import LibraryClient from "@/components/library-client";

/*import { books as PrismaBook } from "@prisma/client";
// Тип, где мы гарантируем наличие `link`
type BookWithLink = PrismaBook & { link: string };
interface LibraryClientProps {
    books: BookWithLink[];
}*/

import { books as BookType } from "@prisma/client";

const LibraryPage = async () => {
    const books: BookType[] = await prismadb.books.findMany();

    const safeBooks = books.map((book) => ({
        ...book,
        link: book.link ?? "/",
        createdAt: book.createdAt?.toISOString?.() ?? null,
        updatedAt: book.updatedAt?.toISOString?.() ?? null,
    }));

    return (
        <div className="m-2">
            <LibraryClient books={safeBooks} />
        </div>
    );

};

export default LibraryPage;