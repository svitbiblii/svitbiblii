// import Link from "next/link";
import { useTranslations } from "next-intl";
import books from "@/books.json"
import Catalog from "@/components/catalog";

const CatalogPage = () => {
    const t = useTranslations("Library");

    return (
        <div className="p-8 max-w-3xl mx-auto min-h-screen">
            <h2>{t('title')}</h2>
            {/* <ul className="space-y-2 list-none pl-0">
                <li>
                    <Link href="/bibliya">{t('bibliya')}</Link>
                </li>
                <li>
                    <Link href="/biblical-tradition-cloud">{t('cloud')}</Link>
                </li>
                <li>
                    <Link href="/biblical">{t('biblical')}</Link>
                </li>
                <li>
                    <Link href="/patristics">{t('patristics')}</Link>
                </li>
                <li>
                    <Link href="/philosophy-and-history">{t('philosophy')}</Link>
                </li>
                <li>
                    <Link href="/dictionaries-and-encyclopedias">{t('dictionaries')}</Link>
                </li>
                <li>
                    <Link href="/fiction">{t('literature')}</Link>
                </li>
                <li>
                    <Link href="/theology">{t('theology')}</Link>
                </li>
            </ul> */}

            <Catalog books={books}/>

        </div>
    );
}
export default CatalogPage;






// ========================================================================

// import { getAllBooks } from "@/app/[locale]/(server)/api";

// export default async function CatalogPage() {
//     const allBooks = await getAllBooks();

//     return (
//         <>
//         {allBooks.map((book) => (
//             <li key={book.id}>{book.author}</li>
//         ))}
//         </>
//     )
// } 

  