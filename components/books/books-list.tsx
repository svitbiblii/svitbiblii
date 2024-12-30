import { IBooks } from "@/books-data";
import { Link } from "@/i18n/routing";

import BookItem from "./book-item"

const BooksList = ({
  books
}: {
  books: IBooks[]
}) => {
  return (
<ul>        
    {books.map((book) => (
        <li>
          <Link key={book.id} href={book.link} className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
          <BookItem  book={book} />
        </Link>
        </li>
    ))}
</ul>
)
}

export default BooksList;