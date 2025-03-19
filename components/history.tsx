"use client"

import { useTranslations } from "next-intl";
import { BOOKS_DATA } from "@/books-data";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from 'react'


function History(){
    const t = useTranslations("HistoryComponent");

    const [historyBook, setHistoryBook] = useState<string[]>([])
    const [selectedBook, setSelectedBook] = useState<string>("0")

    console.log("selectedBook", selectedBook)

    useEffect(() => {
        const savedBooks = sessionStorage.getItem('bookname')

        console.log("savedBooks", savedBooks)

        if (savedBooks) {
            setHistoryBook(JSON.parse(savedBooks))
        }
    }, [])

    const copy = [];
    if(historyBook) {
        for (let i = 0; i < historyBook.length; i += 1) {
            const findData = BOOKS_DATA.find(item => item.id === historyBook[i])
            if (findData !== undefined) {
                copy.push(findData)};
        }
    }

    console.log("copy", copy)

    return (
        <ul className="p-0">
            {copy.length > 0 ? copy.reverse().map((item) =>
                <li key={item?.id} className="space-y-3 list-none pl-0">
                        <Link
                            href={item.link}
                            onClick={() => {setSelectedBook(item.id)}}
                            className={`block py-1 px-3 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200 ${selectedBook === item.id ? "bg-blue-600" : "bg-gray-200"}`}>
                            <p className="italic">{item?.author}</p>
                            <p className="font-bold">- {item?.title}</p>
                        </Link>
                </li>
                ) :
                <div>
                    <p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('history')}</p>
                </div>
            }
        </ul>
    );
}

export default History;