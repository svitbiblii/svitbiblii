// app/pages/library/page.tsx
import prismadb from "@/lib/prismadb";
import LibraryClient from "@/components/library-client";
import { Library as LibraryType } from "@prisma/client";


const LibraryPage = async () => {
    const library: LibraryType[] = await prismadb.library.findMany();

    const books = library.map((book) => ({
        ...book,
        link: book.link ?? "/",
    }));

    return (
        <div className="m-2">
            <LibraryClient books={books} />
        </div>
    );
};

export default LibraryPage;
