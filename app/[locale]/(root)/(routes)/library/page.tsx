// app/pages/library/page.tsx
import prismadb from "@/lib/prismadb";
import LibraryClient from "@/components/library-client";

const LibraryPage = async () => {
    const books = await prismadb.books.findMany();

    const safeBooks = books.map((book) => ({
        ...book,
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