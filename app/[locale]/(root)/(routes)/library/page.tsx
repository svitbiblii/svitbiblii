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
        <div className="h-min-full flex mt-16">
            <div className="flex">
                <div className="relative">
                    <button onClick={() => setExpanded(curr => !curr)}
                            className={`absolute top-4 z-20 hover:bg-blue-200 ${expanded ? "left-56 dark:bg-secondary dark:hover:bg-blue-200" : "left-4 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg dark:color-white`}>
                        {expanded ? <ChevronFirst /> : <ChevronLast/>}
                    </button>
                </div>
                <div
                    className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary shadow-lg ${
                        expanded ? "md:block" : "initial"
                    }`}>
                    <div className="">
                        <About/>
                        <div className="bg-secondary px-6 pt-1 pb-8">
                            <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p>
                            <History />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
                <h2>{t('title')}</h2>
                <BooksList books={BOOKS_DATA}/>
            </div>
        </div>
    );
}

export default LibraryPage;

  