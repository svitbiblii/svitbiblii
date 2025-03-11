"use client"

// import Cookies from "js-cookie";
import { IBooks } from "@/books-data";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { CATEGORIES } from "@/components/categories";

const BooksList = ({ books }: { books: IBooks[] }) => {
    const [storedBook, setStoredBook] = useState<string[]>([]);
    const [newId, setNewId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const savedBooks = sessionStorage.getItem("bookname");
        if (savedBooks) {
            setStoredBook(JSON.parse(savedBooks));
        }
    }, []);

    useEffect(() => {
        if (newId && !storedBook.includes(newId)) {
            const updatedBooks = [...storedBook, newId];
            sessionStorage.setItem("bookname", JSON.stringify(updatedBooks));
            setStoredBook(updatedBooks);
        }
    }, [newId]);

    // Filter books by selected category
    const filteredBooks =
        selectedCategory === "all"
            ? books
            : books.filter((book) => book.kategory === selectedCategory);

  return (
      /*<ul>
      {books.map((book) => (
          <li className="list-none" key={book.id}>
            <Link href={book.link}
            // onClick={() => {
            //   localStorage.setItem('bookname', JSON.stringify([...storedBook, `${book.id}`]))}}

                onClick={() => {setNewId(`${book.id}`)}}
                className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
             <p className="mr-10 italic">{book.author}</p>
              <p className="mr-10 font-bold">{book.title}</p>
            </Link>
          </li>
        ))}
      </ul>*/

      <div className="p-6">
          {/* Buttons for selecting a category */}
          <div className="flex flex-wrap  mb-6">
              {CATEGORIES.map(({id, name}) => (
                  <button
                      key={id}
                      onClick={() => setSelectedCategory(id)}
                      className={`mb-2 mr-4 px-4 py-2 ${
                          selectedCategory === id ? " bg-blue-500 text-white" : "bg-gray-200"
                      }`}
                  >
                      {name}
                  </button>
              ))}
          </div>

          {/* List of books */}
          <ul className="pl-0">
              {filteredBooks.map((book) => (
                  <li className="list-none mb-2" key={book.id}>
                      <Link
                          href={book.link}
                          onClick={() => setNewId(book.id)}
                          className="block p-2 pl-0 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200"
                      >
                          <p className="mr-10 italic">{book.author}</p>
                          <p className="mr-10 font-bold">{book.title}</p>
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default BooksList;

// "use client"

// import Cookies from "js-cookie";
// import { IBooks } from "@/books-data";
// import { Link } from "@/i18n/routing";

// const BooksList = ({
//   books
// }: {
//   books: IBooks[]
// }) => {
//   // const setCookie = () => {
//   //   Cookies.set('token', 'val')
//   // }

//   return (
// <ul className="marker:text-blue-400">        
//     {books.map((book) => (
//         <li key={book.id}>
//           <Link href={book.link} 
//                 onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
//                 // setTimeout(() => {location.reload()}, 500)
//               }} 
//                 className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//            <p className="mr-10">{book.author}</p>
//            <p>{book.title}</p>
//           </Link>
//         </li>
//     ))}
// </ul>
// )
// }

// export default BooksList;