import books from "./db.json";
import { delayed } from "./delay";


export function getAllBooks() {
    return delayed(books, {timeout: 500, })
}