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
        <div className="h-min-full flex">
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
          <h3>Бог є в людині – людина в Бозі</h3>
          <p>
          <span id="imp">Одначе як я волатиму до Бога мого, Бога й Господа 
            мого?</span>  Бо ж, волаючи до Нього, я мов би прохатиму, щоб Він увійшов у мене. 
          І яке ж місце є в мені, в яке міг би увійти в мене Бог мій? Куди ж міг би увійти Бог у мене, 
          Бог, що створив небо і землю? Чи ж можливо, Господи Боже мій, щоб я мав щось,
           що вмістило б Тебе? 
           Чи обіймають Тебе «небо і земля», що Ти їх створив, і в лоні яких Ти створив і мене? 
           Чи, може, з того, що існує, виходить, що все суще охоплює Тебе? 
           Та якщо і я існую, то чому ж благаю Тебе, щоб Ти вступив в мене, у мене, що не існував би, 
           коли б Тебе не було в мені? Бо нема мене ще в підземеллі, а Ти й там є, 
           бо <Link href="/library/bible/psalmi/#section2" onClick={() => {setNewId('26')}} className="italic underline text-blue-500 hover:text-blue-700">
           «хоча б я зійшов і до Пекла, той там би знайшов Тебе».</Link>
          </p>
          <p>«Отже, я не існував би, Боже мій, не існував би взагалі, 
            якщо б Тебе не було б в мені. 
            Або, скоріше, я б не існував, коли б не був у 
            Тобі, <Link href="/library/bible/romans/#romans-11-32" 
            onClick={() => {setNewId('27')}} 
            className="italic underline text-blue-500 hover:text-blue-700">
                «з  Якого, через Якого і  в  Якому – усе»?
            </Link>
            </p>
            <p>«Так, так, Господи, так воно є. 
                Куди ж волаю до Тебе, коли я сам у Тобі? 
                Або звідкіля ввійшов би Ти в мене? 
                Бо куди ж я б мав відійти поза небо й землю, щоб звідтіля вступив у мене 
                Бог мій, що сказав: «Це я виповнюю небо й землю». </p>
          
          
</section>

         </div>

        </div>
         </div>  
         );
         }