import { IBooks } from "@/books-data";

import BookItem from "./book-item"

const BooksList = ({
  books
}: {
  books: IBooks[]
}) => {
  return (
<ul>        
    {books.map((book) => (
        <BookItem key={book.id} book={book} />
    ))}
</ul>
)
}

export default BooksList;