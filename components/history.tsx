"use client"

import { BOOKS_DATA } from "@/books-data";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from 'react'


function History(){
    const [historyBook, setHistoryBook] = useState<string[]>([])

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
        <div className="bg-secondary shadow-lg px-6 pt-1 pb-8">
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
        </div>
    );
}

export default History;


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