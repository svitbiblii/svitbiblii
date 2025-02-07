"use client"

import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { Link } from "@/i18n/routing";
import { useState, useCallback, useEffect} from "react";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { BOOKS_DATA } from "@/books-data";
// import Image from "next/image";

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

  const fData = initialList.filter((book) => book.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())||
                  book.author.toLowerCase().includes(inputValue.toLowerCase()))
  
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
          <Link key={book.id} href={book.link} 
                onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                                setTimeout(() => {location.reload()}, 500)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
            <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
          </Link>

//       <Link key={book.id} href={book.link} 
//       className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//   <div className="flex justify-between items-center">
//       <Image
//                         className="mr-30 fit-picture block"
//                         src={book.icon}
//                         width={20}
//                         height={20}
//                         alt=""/>
//       <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
//       <p></p>
  
//   </div>
//   <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
// </Link>
      ))) : <div></div>
      ),
    },
    {
      title: `${t('audio')}`,
      content: (
    inputValue.length !== 0 ? (  filteredList.length == 0 ? 
      (
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-white">{t('result')}</p>
            </div>
      ):
    ( fData.filter((book) => book.type === 'audio').map((book) =>   
      <Link key={book.id} href={book.link}
            onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                            setTimeout(() => {location.reload()}, 200)}} 
            className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
        <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
      </Link>
  ))) : <div></div>
      ),
    },
    {
      title: `${t('video')}`,
      content: (
         inputValue.length !== 0 ? (  filteredList.length == 0 ? 
          (
                <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                  <p className="text-gray-600 dark:text-white">{t('result')}</p>
                </div>
          ):
        ( fData.filter((book) => book.type === 'video').map((book) =>   
          <Link key={book.id} href={book.link} 
                onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                                setTimeout(() => {location.reload()}, 200)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
            <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
          </Link>
      ))) : <div></div>
      ),
    },
    {
      title: `${t('texts')}`,
      content: (
        inputValue.length !== 0 ? (  filteredList.length == 0 ? 
          (
                <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                  <p className="text-gray-600 dark:text-white">{t('result')}</p>
                </div>
          ):
        ( fData.filter((book) => book.type === 'text').map((book) =>   
          <Link key={book.id} href={book.link} 
                onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                                setTimeout(() => {location.reload()}, 200)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
            <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
          </Link>
      ))) : <div></div>
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

        <div className='bg-white p-2 rounded-xl dark:text-white dark:bg-background focus:outline-none'>
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

  

