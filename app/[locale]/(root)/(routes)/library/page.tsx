// // import Link from "next/link";
// import { useTranslations } from "next-intl";
// import BooksList from "@/components/books-list";
// import { BOOKS_DATA } from "@/books-data";
// import History from "@/components/history";

// const LibraryPage = () => {
//     const t = useTranslations("Library");

//     return (
//         <div className="p-8 max-w-3xl mx-auto min-h-screen">
//             <h2>{t('title')}</h2>
//             {/* <ul className="space-y-2 list-none pl-0">
//                 <li>
//                     <Link href="/bibliya">{t('bibliya')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/biblical-tradition-cloud">{t('cloud')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/biblical">{t('biblical')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/patristics">{t('patristics')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/philosophy-and-history">{t('philosophy')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/dictionaries-and-encyclopedias">{t('dictionaries')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/fiction">{t('literature')}</Link>
//                 </li>
//                 <li>
//                     <Link href="/theology">{t('theology')}</Link>
//                 </li>
//             </ul> */}
// <History />

//             <BooksList books={BOOKS_DATA}/>

//         </div>
//     );
// }
// export default LibraryPage;

"use client";

import { useTranslations } from "next-intl";
import BooksList from "@/components/books-list";
import { BOOKS_DATA } from "@/books-data";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import { useState } from "react";

const LibraryPage = () => {
    const t = useTranslations("Library");

    const [expanded, setExpanded] = useState(true);

    return (
                <div className="h-min-full flex">
                    <div className="flex">
                        <div className="relative">
                            <button onClick={() => setExpanded(curr => !curr)}
                                    className={`absolute top-4 z-20 hover:bg-blue-200 ${expanded ? "left-56 dark:bg-secondary dark:hover:bg-blue-200" : "left-4 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg dark:color-white`}>
                                {expanded ? <ChevronFirst /> : <ChevronLast/>}
                            </button>
                        </div>
                        <div
                            className={`hidden  h-screen w-72 min-w-72 overflow-y-auto bg-white dark:bg-secondary shadow-lg                    ${
                                expanded ? "md:block" : "initial"
                            }`}>
                            <div>
                                <About/>
                                <History />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto min-h-screen">
                        <h2>{t('title')}</h2>
                        <BooksList books={BOOKS_DATA}/>
                    </div>
                </div>
    );
}

export default LibraryPage;

  