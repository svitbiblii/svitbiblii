"use client"

import Cookies from "js-cookie";
import { IBooks } from "@/books-data";
import { Link } from "@/i18n/routing";

const BooksList = ({
  books
}: {
  books: IBooks[]
}) => {
  // const setCookie = () => {
  //   Cookies.set('token', 'val')
  // }
  
  return (
<ul className="marker:text-blue-400">        
    {books.map((book) => (
        <li key={book.id}>
          <Link href={book.link} 
                onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                // setTimeout(() => {location.reload()}, 500)
              }} 
                className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
           <p className="mr-10">{book.author}</p>
           <p>{book.title}</p>
          </Link>
        </li>
    ))}
</ul>
)
}

export default BooksList;