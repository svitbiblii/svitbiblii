"use client"

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState, useCallback, useEffect} from "react";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { BOOKS_DATA } from "@/books-data_for-del";
import Image from "next/image";
import { BookCard } from "@/components/book-card";

const Homepage = () => {
  const t = useTranslations("Homepage");

  const [inputValue, setInputValue] = useState<string>("");
  const [initialList] = useState(BOOKS_DATA);
  const [filteredList, setFilteredList] = useState(BOOKS_DATA);
  const [selectedTab, setSelectedTab] = useState(0);
  // const [storedBook, setStoredBook] = useState<string[]>([])
  // const [newId, setNewId] = useState('')

    // if (newId) {
    //   const findBookById = storedBook.find(item => item === newId)  
  
    //   if (findBookById === undefined) {
    //     sessionStorage.setItem('bookname', JSON.stringify([...storedBook, newId]))
    //     } 
    // }
  
    // useEffect(() => {
    //   const savedBooks = sessionStorage.getItem('bookname')
    //   if (savedBooks) {
    //     setStoredBook(JSON.parse(savedBooks))
    //   }
    // }, [])

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
        ( 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredList.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              link={book.link}
              anotation={book.anotation}
            />
          ))}
        </div>
      //     filteredList?.map((book) =>   
      //   //     <Link key={book.id} href={book.link} 
      //   //           onClick={() => {setNewId(`${book.id}`)}}
      //   //           className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-primary-lite dark:hover:text-stone-800 transition-colors duration-200">
      //   //             <div className="flex justify-between items-center hover:bg-primary-lite">
      //   //               <Image
      //   //                 className="mr-30 fit-picture block hover:bg-primary-lite"
      //   //                 src={book.icon}
      //   //                 width={20}
      //   //                 height={20}
      //   //                 alt=""/>
      //   //               <h3 className="mt-0 mb-2 text-2xl font-medium">{book.author} &rdquo;{book.title}&rdquo; <br/>
      //   //            {/* {book.id === "24" && (
      //   //   <span className="text-xl text-gray-500 text-sm ml-2"> 
      //   //     Видавництво &rdquo;Книги ХХІ&rdquo;/&rdquo;Чорні вівці&rdquo; (З дозволу директора Василя Дроняка)
      //   //   </span>
      //   // )}
      //   //                    {book.id === "28" && (
      //   //   <span className="text-xl text-gray-500 text-sm ml-2"> 
      //   //     Publishing House &rdquo;Books XXI&rdquo;/&rdquo;Black Sheep Publishing House&rdquo; (With the permission of Vasyl Droniak, director of the publishing house)
      //   //   </span>
      //   // )} */}
        
      //   //               </h3>
      //   //               <p></p>
      //   //             </div>
      //   //             <p className="mb-0 text-gray-600 dark:text-white">{book.anotation}</p>
      //   //     </Link>
      // )
    )) : <CreateRoute />
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
            // onClick={() => {setNewId(`${book.id}`)}}
            className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-primary-lite dark:hover:text-stone-800 transition-colors duration-200">
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
                // onClick={() => {setNewId(`${book.id}`)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-primary-lite dark:hover:text-stone-800 transition-colors duration-200">
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
                // onClick={() => {setNewId(`${book.id}`)}}
                className="block p-2 mb-6 border border-gray-200 shadow-sm rounded-lg hover:bg-primary-lite dark:hover:text-stone-800 transition-colors duration-200">
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
<div className="h-min-full flex">
    <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
        <Search inputValue={inputValue} setInputValue={setInputValue}/>
        <div className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab, index) => (
            <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`text-xs px-4 py-2 rounded-md ${
              selectedTab === index ? 'bg-primary text-primary-foreground hover:bg-primary-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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

  

