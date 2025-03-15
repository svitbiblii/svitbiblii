"use client"

import { useTranslations } from "next-intl";
// import Cookies from "js-cookie";
import { Link } from "@/i18n/routing";
import { useState, useCallback, useEffect} from "react";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { BOOKS_DATA } from "@/books-data";
import Image from "next/image";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";

const Homepage = () => {
  const t = useTranslations("Homepage");

  const [inputValue, setInputValue] = useState<string>("");
  const [initialList] = useState(BOOKS_DATA);
  const [filteredList, setFilteredList] = useState(BOOKS_DATA);
  const [selectedTab, setSelectedTab] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [storedBook, setStoredBook] = useState<string[]>([])
  const [newId, setNewId] = useState('')

    if (newId) {
      const findBookById = storedBook.find(item => item === newId)  
  
      if (findBookById === undefined) {
        sessionStorage.setItem('bookname', JSON.stringify([...storedBook, newId]))
        } 
    }
  
    useEffect(() => {
      const savedBooks = sessionStorage.getItem('bookname')
      if (savedBooks) {
        setStoredBook(JSON.parse(savedBooks))
      }
    }, [])

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
                  // onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                  //                 // setTimeout(() => {location.reload()}, 500)
                  //               }}
                  onClick={() => {setNewId(`${book.id}`)}}
                  className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    <div className="flex justify-between items-center hover:bg-blue-200">
                      <Image
                        className="mr-30 fit-picture block hover:bg-blue-200"
                        src={book.icon}
                        width={20}
                        height={20}
                        alt=""/>
                      <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
                      <p></p>
                    </div>
                    <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
            </Link>
      ))) : <CreateRoute />
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
            // onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
            //         setTimeout(() => {location.reload()}, 500)}}
            onClick={() => {setNewId(`${book.id}`)}}
            className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <Image
          className="mr-30 fit-picture block"
          src={book.icon}
          width={20}
          height={20}
          alt=""/>
        <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
        <p></p>
      </div>
      <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
      </Link>
  ))) : <CreateRoute />
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
                // onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                //         setTimeout(() => {location.reload()}, 500)}}
                onClick={() => {setNewId(`${book.id}`)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
          <div className="flex justify-between items-center">
            <Image
              className="mr-30 fit-picture block"
              src={book.icon}
              width={20}
              height={20}
              alt=""/>
            <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
            <p></p>
          </div>
          <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
          </Link>
      ))) : <CreateRoute />
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
                // onClick={() => {Cookies.set(`${book.id}`, `${book.author}-${book.title}`)
                //         setTimeout(() => {location.reload()}, 500)}}
                onClick={() => {setNewId(`${book.id}`)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
          <div className="flex justify-between items-center">
            <Image
              className="mr-30 fit-picture block"
              src={book.icon}
              width={20}
              height={20}
              alt=""/>
            <h3 className="mt-0 mb-2 text-lg font-medium">{book.author} {book.title}</h3>
            <p></p>
          </div>
          <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
          </Link>
      ))) : <CreateRoute />
      ),
    },
  ];

  return (
<div className="flex">
    <div className="relative">
        <button onClick={() => setExpanded(curr => !curr)}
                        className={`absolute top-4 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
                    {expanded ? <ChevronFirst/> : <ChevronLast/>}
        </button>
    </div>
    <div className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary pb-12 shadow-lg ${
            expanded ? "md:block" : "initial"
        }`}>
        <div>
            <About/>
            <div className="bg-secondary px-6 pt-1 pb-8">
              <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">{t('navigator')}</p>
              <History />
            </div>
        </div>
    </div>
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
            <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
              {tab.content}
            </div>
          ))}
        </div>
    </div>
</div>
    );
  }
  
export default Homepage;

  

