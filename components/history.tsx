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
        <div>

            {copy.length > 0 ? copy.reverse().map((item) =>
                    <ul key={item?.id} className="space-y-2 list-none pl-0">
                        <li>
                            <Link   href={item.link}
                                    onClick={() => {setSelectedBook(item.id)}}
                                    className={`block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200 ${selectedBook === item.id ? "bg-blue-600" : "bg-gray-200"}`}
                                // className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
                            >
                                <p>{item?.author} - {item?.title}</p>
                            </Link>
                        </li>
                    </ul>
                ) :
                <div>
                    {/* <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p> */}
                    <p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('history')}</p>
                </div>
//         <div className="bg-secondary px-6 pt-1 pb-8">
//         <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p>
// <p className="space-y-2 p-2 text-gray-600 dark:text-white">Тут буде історія переходів</p>
//     </div>

            }

            {/* <div className="bg-secondary px-6 pt-1 pb-8">
<p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p>
{copy.length > 0 ? copy.reverse().map(item => 
    <ul key={item?.id} className="space-y-2 list-none pl-0">
        <li>
            <Link  href={item.link} className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                <p>{item?.author} - {item?.title}</p>
            </Link>
        </li>
    </ul>
) : (<p className="space-y-2 p-2 text-gray-600 dark:text-white">Тут буде історія переходів</p>)}
</div> */}

        </div>




    );
}

export default History;


{/* <div className="bg-secondary px-6 pt-1 pb-8">
<p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p>
{copy.length > 0 ? copy.reverse().map(item => 
    <ul key={item?.id} className="space-y-2 list-none pl-0">
        <li>
            <Link  href={item.link} className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                <p>{item?.author} - {item?.title}</p>
            </Link>
        </li>
    </ul>
) : (<p className="space-y-2 p-2 text-gray-600 dark:text-white">Тут буде історія переходів</p>)}
</div> */}


// import { cookies } from "next/headers";
// import { BOOKS_DATA } from "@/books-data";
// import { Link } from "@/i18n/routing";


// function History(){
//     const cookie = cookies();

//     const cookieData = cookie.getAll().map((cookie)=> {
//         return cookie.name
//     })

// const copy = [];
// for (let i = 1; i < cookieData.length; i += 1) {
//     const findData = BOOKS_DATA.find(item => item.id === cookieData[i])
//     if (findData !== undefined) {
//     copy.push(findData)};
// }

//     return (
//         <div className="bg-secondary shadow-lg px-6 pt-1 pb-8">
//             <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">Навігатор</p>
//             {copy.length > 0 ? copy.reverse().map(item => 
//                 <ul key={item?.id} className="space-y-2 list-none pl-0">
//                     <li>
//                         <Link  href={item.link} className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//                             <p>{item?.author} - {item?.title}</p>
//                         </Link>
//                     </li>
//                 </ul>
//             ) : (<p className="space-y-2 p-2 text-gray-600 dark:text-white">Тут буде історія переходів</p>)}
//         </div>
//     );
// }

// export default History;