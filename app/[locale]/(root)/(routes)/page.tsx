"use client"

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState, useCallback, useEffect} from "react";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { BOOKS_DATA } from "@/books-data";

const Homepage = () => {
  const t = useTranslations("Homepage");

  const [inputValue, setInputValue] = useState<string>("");
  const [initialList] = useState(BOOKS_DATA);
  const [filteredList, setFilteredList] = useState(BOOKS_DATA);
  const [selectedTab, setSelectedTab] = useState(0);

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


  const tabs = [
    {
      title: `${t('category')}`,
      content: (
        inputValue.length !== 0 ? (  filteredList.length == 0 ? 
          (
                <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                  <p className="text-gray-600 dark:text-white">{t('result')}</p>
                </div>
          ):
        ( filteredList?.map((book) =>   
          <Link key={book.id} href={book.link} className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            <div   className="space-y-4 mb-10">
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">{book.author}
             <span className="ml-5">{book.title}</span>
            </h3>
            <p className="text-gray-600 dark:text-white">{book.anotation}</p>
        </div>
       </div>
          </Link>
      ))) : <div></div>
      ),
    },
    {
      title: `${t('audio')}`,
      content: (
      //   inputValue.length !== 0 ? (  filteredList.length == 0 ? 
      //     (
      //           <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      //             <p className="text-gray-600 dark:text-white">{t('result')}</p>
      //           </div>
      //     ):
      //   ( filteredList?.map((book) =>   
      //   <div key={book.id}  className="space-y-4 mb-10">
      //   <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      //       {/* <h3 className="text-lg font-medium">{book.author}
      //        <span className="ml-5">{book.title}</span>
      //       </h3> */}
      //       <p className="text-gray-600 dark:text-white">{book.type}</p>
      //       <p className="text-gray-600 dark:text-white">Тут будуть тульки аудіо-файли</p>
      //   </div>
      //  </div> 
      // ))) : <div></div>

      <div className='border-2 border-blue-400 rounded-lg p-4'>
      <h1 className='text-3xl text-blue-600'>Title Test 2</h1>
      <p>
      Тут будуть тільки аудіо
      </p>
    </div>
      ),
    },
    {
      title: `${t('video')}`,
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 3</h1>
          <p>
          Тут будуть тільки відео-файли
          </p>
        </div>
      ),
    },
    {
      title: `${t('texts')}`,
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 4</h1>
          <p>
          Тут будуть тільки книги
          </p>
        </div>
      ),
    },
  ];


  return (
      <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
        <Search inputValue={inputValue} setInputValue={setInputValue}/>

            <div className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`text-xs px-4 py-2 rounded-md ${
                  selectedTab === index ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } `}
              >
              {tab.title}
              </button>
            ))}
            </div>

        <div className='bg-white p-2 rounded-xl'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? '' : 'hidden'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>

        <CreateRoute/>
      </div>
    );
  }
  
export default Homepage;

  

