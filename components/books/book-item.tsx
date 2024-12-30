import { IBooks } from "@/books-data";

const BookItem = ({ book }: { book: IBooks }) => {
    return (
        <div>    
            <p className="mr-10">{book.author}</p>
            <p>{book.title}</p>
        </div> 
    )
  }
  
  export default BookItem