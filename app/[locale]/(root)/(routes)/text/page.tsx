// // import React from 'react';
// // import { Link } from "@/i18n/routing";

// // const TextPage = () => {
// //   return (
// // <section>
// //     <p>
// //         Ян же був затятий, він ніяк не хтів миритись
// //         із батьковою недугою. Очі
// //         йому
// //         пекли, коли бачив Йована з кипарисовою
// //         палицею.
// //     </p>
// //     <blockquote>
// //         <p>
// //             — <Link href="https://www.bible.com/uk/bible/160/job.2.10.ukrainian1905" id="book-of-job-2-10" className="italic text-blue-500 underline hover:text-blue-700">Коли
// //             приймаємо добре, чи ж злого не приймемо?</Link>
// //             — щораз повторював
// //             батько.
// //         </p>
// //     </blockquote>
// //     <p>
// //         «Ні!»
// //         — кричало все Янове нутро. І він надумав
// //         щодня ходити до моря
// //         вудити<Link href="" id="book-of-tobit-6-2-9" className="italic text-blue-500 underline hover:text-blue-700">дивну
// //         рибу, що повертає зір.</Link>
// //     </p>
// //     <p>
// //         — Якщо
// //         вмитися тією рибою, то полуда впаде з
// //         очей і невидющий бачитиме,
// //         як і перше.
// //     </p>
// //     <p>
// //         Йован
// //         із сумом ворушив коротко стрижене синове
// //         волосся. Він пам’ятав,
// //         що воно темне, але з білим пасмом, як і
// //         в Іво. Авреля завжди казала,
// //         що
// //         хтось дуже світлий торкнувся її синів.
// //     </p>
// //     <blockquote>
// //         <p>
// //             — Непримиренний
// //             мій Яне, ти ж рибу як слід не вмієш вудити,
// //             а що
// //             за
// //             дивину собі вигадав. Хоч ти не любиш
// //             моря, і зовні спокійний — ніхто
// //             й не розбере твоєї думки, але <Link href="" id="confessions-of-augustine" className="italic text-blue-500 underline hover:text-blue-700">зсередини
// //             ти збурений</Link>,
// //             мов бідою. Що
// //             з
// //             тебе буде, сину?
// //         </p>
// //     </blockquote>
// //     <p>
// //         Ян
// //         нікого не слухав. Зранку, лишень замріло,
// //         він узяв батькову вудку, волок
// //         і пішов до моря. Але дорогою на самому
// //         березі знову стрів супутника,
// //         того,
// //         що кілька років тому вчив його слухати<Link href="" id="psalm-150" className="italic text-blue-500 underline hover:text-blue-700">співи
// //         всього, що дихає.</Link>Був
// //         той
// //         чоловік якийсь дивак. Вдітий по-давньому
// //         — у хітоні
// //         синій гіматій
// //         через
// //         плече. Мав він із собою торбу, як
// //         мандрівець, і гостру палицю, схожу
// //         на спис. Нею він знову <Link href="" id="john-8-6" className="italic text-blue-500 underline hover:text-blue-700">щось
// //         креслив на піску.</Link>
// //     </p>
// //     <p>
// //         — Я
// //         не розберу, що ти малюєш, — спинився
// //         коло нього Ян. Очі завжди
// //         хотілося
// //         примружити, бо той ніби зумисно ставав
// //         проти сонця.
// //     </p>
// //     <p>
// //         — Рибу,
// //         ти ж прийшов по неї.
// //     </p>
// //     <p>
// //         — Мені
// //         треба справжньої, а ця лише креслена на
// //         піску. — То злови.
// //     </p>
// //     <p>
// //         — Будь
// //         певен — зловлю, і мій батько бачитиме!
// //     </p>
// //     <p>
// //         Хлопець
// //         витяг вудку й волок, але дати раду з тим
// //         він як слід не вмів, тому
// //         хапав
// //         рибу голіруч. Силувався втримати,
// //         борсався між хвиль. Бо знав, що
// //         мати
// //         не спить зрання, і чекає на нього біля
// //         кипарисів. Чекає з надією, що
// //         він
// //         якось вернеться із <Link href="" id="book-of-tobit-6-3" className="italic text-blue-500 underline hover:text-blue-700">цілющою
// //         рибою</Link>і
// //         Йован знову побачить цей, витятий
// //         із голосу та слова, світ.
// //     </p>
// //     <p>
// //         Так
// //         ходив Ян вудити щоранку багато днів, а
// //         дивна риба все тікала з його
// //         рук.
// //     </p>
// // </section>
// //   );
// // };

// // export default TextPage;

// "use client";
 
//  import { Link } from "@/i18n/routing";
//  import { useTranslations } from "next-intl";
//  import { useState, useEffect } from "react";
// //  import { ChevronDown, ChevronUp, CircleX } from "lucide-react";
//  import { ChevronFirst, ChevronLast } from "lucide-react";
//  import { About } from "@/components/about";
//  import History from "@/components/history";
 
//  export default function ChadwickPage() {
//     const t = useTranslations("BookContents");

//     //  const [showPage, setShowPage] = useState(false);
//      const [showContent, setShowContent] = useState(false);
//      const [expanded, setExpanded] = useState(true);
//     //  const [expanded1, setExpanded1] = useState(false);
//     //  const [expanded2, setExpanded2] = useState(false);
//      const [storedBook, setStoredBook] = useState<string[]>([])
//      const [newId, setNewId] = useState('')
 
//        if (newId) {
//          const findBookById = storedBook.find(item => item === newId)  
 
//          if (findBookById === undefined) {
//              sessionStorage.setItem('bookname', JSON.stringify([...storedBook, newId]))
//            } 
//        }
 
//        useEffect(() => {
//          const savedBooks = sessionStorage.getItem('bookname')
//          if (savedBooks) {
//            setStoredBook(JSON.parse(savedBooks))
//          }
//        }, [])
 
//     //    const togglePage = () => {
//     //      setShowPage(!showPage)
//     //  };  
 
//      return (
//         <div className="h-min-full flex mt-16">
//              <div className="relative">
//                          <button onClick={() => setExpanded(curr => !curr)}
//                                  className={`absolute top-4 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
//                              {expanded ? <ChevronFirst/> : <ChevronLast/>}
//                          </button>
//                      </div>
         
//                      <div
//                          className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary pb-12 shadow-lg ${
//                              expanded ? "md:block" : "initial"
//                          }`}>
//                              <div>
//                              <About/>
                                 
//                                  <div className="bg-secondary px-6 pt-1 pb-8">
//                                      <div className="py-2 flex justify-between font-medium">
//                                          <button className={`w-1/2 ${showContent ? "" : "border-b-2 border-blue-500 text-blue-500"}`}  
//                                              onClick={() => {setShowContent(false)}}>
//                                                  {t('navigator')}
//                                          </button>
//                                          <button className={`w-1/2 ${showContent ? "border-b-2 border-blue-500 text-blue-500" : ""}`} 
//                                              onClick={() => {setShowContent(true)}}>
//                                                  {t('content')}
//                                          </button>
//                                      </div>
             
//                                  {showContent ? 
//                                  <ul className="list-none bg-secondary pl-0">
//                                      <li>
//                                          <Link href='/library/chadwick/#section1' 
//                                              className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//                                              Частина 1
//                                          </Link>
//                                      </li>
//                                      <li>
//                                          <Link href='/library/chadwick/#section2' 
//                                              className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//                                                  Частина 2
//                                          </Link>
//                                      </li>  
//                                  </ul> :
//                                  <History />}    
//                                  </div>
//                              </div>   
//                      </div> 
         
         
//          <div className="relative h-full w-full px-4 pt-2 block">
       
//                 <div className="w-full">
 
//                 <h2 className="pt-0">«Сім днів перед Різдвом» Наталка Данькова</h2>

//           <section id="section1">
//             <h3>Частина 1 (ст.18)</h3>
//     <p>
//         Ян же був затятий, він ніяк не хтів миритись
//         із батьковою недугою. Очі
//         йому
//         пекли, коли бачив Йована з кипарисовою
//         палицею.
//     </p>
//     <blockquote>
//         <p>
//             — <Link href="/library/yova#quote-2-10" className="italic text-blue-500 underline hover:text-blue-700">Коли
//             приймаємо добре, чи ж злого не приймемо?</Link>
//             — щораз повторював
//             батько.
//         </p>
//     </blockquote>
//     <p>
//         «Ні!»
//         — кричало все Янове нутро. І він надумав
//         щодня ходити до моря
//         вудити <Link href="/library/tovita#quote-6-2-9" className="italic text-blue-500 underline hover:text-blue-700">дивну
//         рибу, що повертає зір.</Link>
//     </p>
//     <p>
//         — Якщо
//         вмитися тією рибою, то полуда впаде з
//         очей і невидющий бачитиме,
//         як і перше.
//     </p>
//     <p>
//         Йован
//         із сумом ворушив коротко стрижене синове
//         волосся. Він пам’ятав,
//         що воно темне, але з білим пасмом, як і
//         в Іво. Авреля завжди казала,
//         що
//         хтось дуже світлий торкнувся її синів.
//     </p>
//     <blockquote>
//         <p>
//             — Непримиренний
//             мій Яне, ти ж рибу як слід не вмієш вудити,
//             а що
//             за
//             дивину собі вигадав. Хоч ти не любиш
//             моря, і зовні спокійний — ніхто
//             й не розбере твоєї думки, але <Link href="/library/augustine#quote-4-3" className="italic text-blue-500 underline hover:text-blue-700">зсередини
//             ти збурений</Link>,
//             мов бідою. Що
//             з
//             тебе буде, сину?
//         </p>
//     </blockquote>
//     <p>
//         Ян
//         нікого не слухав. Зранку, лишень замріло,
//         він узяв батькову вудку, волок
//         і пішов до моря. Але дорогою на самому
//         березі знову стрів супутника,
//         того,
//         що кілька років тому вчив його слухати <Link href="/library/psaltyr#quote-psalom-150-6" className="italic text-blue-500 underline hover:text-blue-700">співи
//         всього, що дихає.</Link> Був
//         той
//         чоловік якийсь дивак. Вдітий по-давньому
//         — у хітоні
//         синій гіматій
//         через
//         плече. Мав він із собою торбу, як
//         мандрівець, і гостру палицю, схожу
//         на спис. Нею він знову <Link href="/library/john#quote-8-6" className="italic text-blue-500 underline hover:text-blue-700">щось
//         креслив на піску.</Link>
//     </p>
//     <p>
//         — Я
//         не розберу, що ти малюєш, — спинився
//         коло нього Ян. Очі завжди
//         хотілося
//         примружити, бо той ніби зумисно ставав
//         проти сонця.
//     </p>
//     <p>
//         — Рибу,
//         ти ж прийшов по неї.
//     </p>
//     <p>
//         — Мені
//         треба справжньої, а ця лише креслена на
//         піску. — То злови.
//     </p>
//     <p>
//         — Будь
//         певен — зловлю, і мій батько бачитиме!
//     </p>
//     <p>
//         Хлопець
//         витяг вудку й волок, але дати раду з тим
//         він як слід не вмів, тому
//         хапав
//         рибу голіруч. Силувався втримати,
//         борсався між хвиль. Бо знав, що
//         мати
//         не спить зрання, і чекає на нього біля
//         кипарисів. Чекає з надією, що
//         він
//         якось вернеться із <Link href="/library/tovita#quote-6-3" className="italic text-blue-500 underline hover:text-blue-700">цілющою
//         рибою</Link> і
//         Йован знову побачить цей, витятий
//         із голосу та слова, світ.
//     </p>
//     <p>
//         Так
//         ходив Ян вудити щоранку багато днів, а
//         дивна риба все тікала з його
//         рук.
//     </p>
// </section>

//          </div>
//          </div>
//          </div>  
//          );
//          }