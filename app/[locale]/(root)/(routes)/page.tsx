"use client"

import { useTranslations } from "next-intl";
import { useState, useCallback, useEffect} from "react";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { BOOKS_DATA } from "@/books-data";

const Homepage = () => {
  const t = useTranslations("Homepage");

  const [inputValue, setInputValue] = useState<string>("");
  const [initialList] = useState(BOOKS_DATA);
  const [filteredList, setFilteredList] = useState(BOOKS_DATA);

  // Search Handler
  const searchHandler = useCallback(() => {
    const filteredData = initialList.filter((book) => {
      return book.title.toLowerCase().includes(inputValue.toLowerCase())||
              book.author.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredList(filteredData)
  }, [initialList, inputValue])

  // EFFECT: Search Handler
  useEffect(() => {
    // Debounce search handler
    const timer = setTimeout(() => {
      searchHandler()
    }, 500)

    // Cleanup
    return () => {
      clearTimeout(timer)
    }
  }, [searchHandler])


  return (
      <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
        <Search inputValue={inputValue} setInputValue={setInputValue}/>

        {inputValue.length !== 0 ? (  filteredList.length == 0 ? 
        (
              <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                <p className="text-gray-600 dark:text-white">{t('result')}</p>
              </div>
        ):
      ( filteredList?.map((book) =>   
      <div key={book.id}  className="space-y-4 mb-10">
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium">{book.author}
           <span className="ml-5">{book.title}</span>
          </h3>
          <p className="text-gray-600 dark:text-white">{book.anotation}</p>
      </div>
     </div> 
    ))) : <div></div>
    }
    
        <CreateRoute/>
      </div>
    );
  }
  
export default Homepage;

  
