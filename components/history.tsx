"use client"

import { useTranslations } from "next-intl";
import { BOOKS_DATA } from "@/books-data_for-del";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from 'react'
import { usePathname } from "@/i18n/routing";


function History(){
    const t = useTranslations("HistoryComponent");

    const [historyBook, setHistoryBook] = useState<string[]>([]);

    const pathname = usePathname();
    const isActive = (path:string) => path === pathname;
  
    useEffect(() => {
      const savedBooks = sessionStorage.getItem('bookname')

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

    return (
<ul>

{copy.length > 0 ? copy.reverse().map((item) => 
                <li key={item?.id} className="space-y-2 list-none pl-0">
                    <Link   href={item.link} 
                            className={`block py-1 px-3 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200 ${
                                isActive(item.link) ? 'text-blue-500' : ''
                            }`}
                            >
                                <p className="italic">{item?.author}</p>
                                <p className="font-bold">- {item?.title}</p>
                    </Link>
                </li>
        ) :
        <div>
<p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('history')}</p>
    </div> }
</ul>
    );
}

export default History;