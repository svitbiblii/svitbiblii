import { IBooks } from "@/books-data";

const BookItem = ({ book }: { book: IBooks }) => {
    return (
        <li>    
            <p className="mr-10">{book.author}</p>
            <p>{book.title}</p>
        </li> 
    )
  }
  
  export default BookItem