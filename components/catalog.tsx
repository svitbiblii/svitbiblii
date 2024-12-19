import { IBooks } from "@/types/books";

interface CatalogProps {
    books: IBooks[];
  }

  const Catalog: React.FC<CatalogProps> = ({ books }) => {

    return (
  


            <ul>

          
                {books.map((book) => (
                   
                        <li key={book.id} className="hover:{book.anotation}">    <span className="mr-10">{book.author}</span>
                                <span>{book.title}</span>
                                {/* <span>{book.anotation}</span> */}
                        </li>
                  
                    // <p key={book.id}>
                    //     <span>{book.author}</span>
                    //     <span>{book.title}</span>
                    //     <span>{book.anotation}</span>
                    // </p>
                ))}
            </ul>
      
    );
}
export default Catalog;

