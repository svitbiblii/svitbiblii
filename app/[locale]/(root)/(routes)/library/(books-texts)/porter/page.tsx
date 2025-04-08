"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import { useState } from "react";

export default function PorterPage() {
    const t = useTranslations("BookContents");

    const [expanded, setExpanded] = useState(true);
    const [showContent, setShowContent] = useState(false);
    
    return (
        <div className="h-min-full flex mt-16">
                                <div className="flex">
                        <div className="relative">
                            <button onClick={() => setExpanded(curr => !curr)}
                                    className={`absolute top-4 z-20 hover:bg-blue-200 ${expanded ? "left-56 dark:bg-secondary dark:hover:bg-blue-200" : "left-4 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg dark:color-white`}>
                                {expanded ? <ChevronFirst /> : <ChevronLast/>}
                            </button>
                        </div>
                        <div
                            className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary shadow-lg ${
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
                                         <Link href='/library/porter/#section1' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Глава 1
                                         </Link>
                                     </li> 
                                 </ul> :
                                 <History />}    
                             </div>   
                            </div>
                        </div>
                    </div>

                    <div className=" p-10  py-8 px-4  w-full mx-auto min-h-screen">
                        <h2>Поліанна Елеонор Портер</h2>
                        <section id="section1">
                            <h3>Міс Полі</h3>
                            <p>Того червневого ранку міс Полі Гаррінґтон квапливо увійшла до кухні. Зазвичай вона робила все поволі й пишалася своєю стриманістю. Але сьогодні вона поспішала. Справді поспішала.</p>
                            <p>Ненсі, миючи посуд у мийниці, здивовано підвела на неї очі. Ненсі працювала у міс Полі кухаркою лише два місяці, але вже звикла до того, що її господиня ніколи нікуди не поспішає. А тут?</p>
                            <p>– Ненсі</p>
                            <p>– Так, мем, – весело відповіла Ненсі, продовжуючи витирати глечик.</p>
                            <p>– Ненсі, – голос міс Полі став дуже суворим, – коли я звертаюся до тебе, я хочу, щоб ти припинила роботу і уважно мене вислухала.</p>
                            <p>Ненсі ніяково зашарілася. І як тримала глечик обгорнутим у рушник, так мерщій і поставила, ледве його не перекинувши, на стіл. Через це вона знітилася ще більше.</p>
                        </section>

                    </div>
        </div>
    )
}