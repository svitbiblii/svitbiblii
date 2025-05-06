"use client";
 
 import { Link } from "@/i18n/routing";
 import { useTranslations } from "next-intl";
 import { useState, useEffect } from "react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function AvgustinePage() {
    const t = useTranslations("BookContents");

     const [showContent, setShowContent] = useState(false);
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
 
     return (
        <div className="h-min-full flex mt-16">
             <div className="relative">
                         <button onClick={() => setExpanded(curr => !curr)}
                                 className={`absolute top-4 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
                             {expanded ? <ChevronFirst/> : <ChevronLast/>}
                         </button>
                     </div>
         
                     <div
                         className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary pb-12 shadow-lg ${
                             expanded ? "md:block" : "initial"
                         }`}>
                             <div>
                             <About/>
                                 
                                 <div className="bg-secondary px-6 pt-1 pb-8">
                                     <div className="py-2 flex justify-between font-medium">
                                         <button className={`w-1/2 ${showContent ? "" : "border-b-2 border-blue-500 text-blue-500"}`}  
                                             onClick={() => {setShowContent(false)}}>
                                                 {t('navigator')}
                                         </button>
                                         <button className={`w-1/2 ${showContent ? "border-b-2 border-blue-500 text-blue-500" : ""}`} 
                                             onClick={() => {setShowContent(true)}}>
                                                 {t('content')}
                                         </button>
                                     </div>
             
                                 {showContent ? 
                                 <ul className="list-none bg-secondary pl-0">
                                     <li>
                                         <Link href='/library/chadwick/#section1' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Частина 1
                                         </Link>
                                     </li>
                                     <li>
                                         <Link href='/library/chadwick/#section2' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                                 Частина 2
                                         </Link>
                                     </li>  
                                 </ul> :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
         
         <div className="relative h-full w-full px-4 pt-2 block">
       
                <div className="w-full">
 
                <h2 className="pt-0">Блаженний Августин Сповідь </h2>

          <section id="section1">
    
 <Link href='' onClick={() => {setNewId('25')}}>Nggggggggggggggggggggggggggggg</Link>
</section>

         </div>

        </div>
         </div>  
         );
         }