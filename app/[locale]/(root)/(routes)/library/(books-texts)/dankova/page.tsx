"use client";
 
 import { Link } from "@/i18n/routing";
 import { useTranslations } from "next-intl";
 import { useState, useEffect } from "react";
 import { ChevronDown, ChevronUp, CircleX } from "lucide-react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function DankovaPage() {
    const t = useTranslations("BookContents");

     const [showPage, setShowPage] = useState(false);
     const [showContent, setShowContent] = useState(false);
     const [expanded, setExpanded] = useState(true);
     const [expanded1, setExpanded1] = useState(true);
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
 
       const togglePage = () => {
         setShowPage(!showPage)
     }; 
     
  
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
    <Link href='/library/dankova/#section1' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 1
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section2' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 2
    </Link>
</li>  
<li>
    <Link href='/library/dankova/#section3' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 3
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section4' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 4
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section5' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 5
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section6' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 6
    </Link>
</li>  
<li>
    <Link href='/library/dankova/#section7' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 7
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section8' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 8
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section9' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 9
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section10' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 10
    </Link>
</li>  
<li>
    <Link href='/library/dankova/#section11' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Частина 11
    </Link>
</li>
<li>
    <Link href='/library/dankova/#section12' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Частина 12
    </Link>
</li>
</ul>  :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
         
                     <div className={`relative h-full w-full px-4 pt-2  ${showPage ? "md:flex md:h-screen block" : "block"} `}>
       
       <div className={`  ${showPage ? "px-3 mb-3 md:mb-0 border-2 border-blue-200 rounded-lg md:border-none md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>

 <h2 className="pt-0">«Сім ночей перед Різдвом» Н.Данькова</h2>
 <h3>Видавництво &rdquo;Книги ХХІ&rdquo;/&rdquo;Чорні вівці&rdquo; (З дозволу директора Василя Дроняка)</h3>
 
 <section id="section1">
             <p>
    Ян же був затятий, він ніяк не хтів миритись
    із батьковою недугою. Очі
    йому
    пекли, коли бачив Йована з кипарисовою
    палицею.
  </p>
  <blockquote>
    <p>
      — <span className="italic underline text-blue-500 hover:text-blue-700">Коли
        приймаємо добре, чи ж злого не приймемо?</span>
      — щораз повторював
      батько.
    </p>
  </blockquote>
    <p>
        «Ні!»
        — кричало все Янове нутро. І він надумав
        щодня ходити до моря
        вудити <span className="italic underline text-blue-500 hover:text-blue-700">дивну
        рибу, що повертає зір. Якщо вмитися тією рибою, то полуда впаде з очей і невидющий бачитиме, як і перше.</span>
    </p>
    <p>
        Йован
        із сумом ворушив коротко стрижене синове
        волосся. Він пам’ятав,
        що воно темне, але з білим пасмом, як і
        в Іво. Авреля завжди казала,
        що
        хтось дуже світлий торкнувся її синів.
    </p>
    <blockquote>
        <p>
            — Непримиренний 
            мій Яне, ти ж рибу як слід не вмієш вудити,
            а що
            за
            дивину собі вигадав. Хоч ти не любиш
            моря, і зовні спокійний — ніхто
            й не розбере твоєї думки, але <button onClick={togglePage} className="italic underline text-blue-500 hover:text-blue-700">зсередини
            ти збурений</button>,
            мов бідою. Що
            з
            тебе буде, сину?
        </p>
    </blockquote>
    <p>
        Ян
        нікого не слухав. Зранку, лишень замріло,
        він узяв батькову вудку, волок
        і пішов до моря. Але дорогою на самому
        березі знову стрів супутника,
        того,
        що кілька років тому вчив його слухати <span className="italic underline text-blue-500 hover:text-blue-700">співи
        всього, що дихає.</span> Був
        той
        чоловік якийсь дивак. Вдітий по-давньому
        — у хітоні
        синій гіматій
        через
        плече. Мав він із собою торбу, як
        мандрівець, і гостру палицю, схожу
        на спис. Нею він знову щось
        креслив на піску.
    </p>
    <p>
        — Я
        не розберу, що ти малюєш, — спинився
        коло нього Ян. Очі завжди
        хотілося
        примружити, бо той ніби зумисно ставав
        проти сонця.
    </p>
    <p>
        <span className="italic underline text-blue-500 hover:text-blue-700">
        — Рибу, 
        </span>  ти ж прийшов по неї.
    </p>
    <p>
        — Мені
        треба справжньої, а ця лише креслена на
        піску. — То злови.
    </p>
    <p>
        — Будь
        певен — зловлю, і мій батько бачитиме!
    </p>
    <p>
        Хлопець
        витяг вудку й волок, але дати раду з тим
        він як слід не вмів, тому
        хапав
        рибу голіруч. Силувався втримати,
        борсався між хвиль. Бо знав, що
        мати
        не спить зрання, і чекає на нього біля
        кипарисів. Чекає з надією, що
        він
        якось вернеться із цілющою
        рибою і
        Йован знову побачить цей, <Link href="/library/bible/gospel-of-john/#section1" 
        onClick={() => {setNewId('28')}} 
        className="italic underline text-blue-500 hover:text-blue-700">
        витятий
        із голосу та слова, світ.
        </Link>
    </p>
    <p>
        Так
        ходив Ян вудити щоранку багато днів, а <span className="italic underline text-blue-500 hover:text-blue-700">
        дивна риба все тікала з його
        рук.
        </span>
    </p>
</section>
        
</div>

{showPage && 
<div className={`${showPage ? "px-3 md:pt-0 pt-3 border-2 border-blue-200 rounded-lg md:border-none md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>
<button className="float-right text-gray-700 hover:text-blue-400 transition-colors duration-200" 
    onClick={() => {setShowPage(false)}}>
    <CircleX/>
</button>
<ul className="pl-0 pt-10 w-full ">
    <li className="mb-3 block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        <div className="flex justify-between items-start">
            <Link   href='/library/avgustine/#imp'  
                    onClick={() => {setNewId('25')}}
                    >
                 <span className="text-blue-500 underline">Одначе як я волатиму до Бога мого, Бога й Господа мого?</span>
                <span className="text-black ml-2 dark:text-white">в книзі &rdquo;Сповідь&rdquo; блаженного Августина</span>
            </Link>

            <button onClick={() => setExpanded1(curr => !curr)}
                    className="">
                {expanded1 ? <ChevronUp/> : <ChevronDown/>}
            </button>
        </div>
        <p className={`text-gray-700 mt-5 ${expanded1 ? "" : "hidden"}`}>
        «Святий Авґустин (354—430) — християнський теолог, вчитель Церкви, філософ, ритор, єпископ. За його власними свідченнями, ним було створено 232 книги; збереглися також 224 листи і понад 500 текстів проповідей. Спосіб викладу матеріалу в цих працях відповідає бурхливому, неспокійному характеру автора. Про нього говорили, що ні в кого з великих мислителів не було таких перепадів між найвищим і найнижчим, що серед церковних святих він був найменш святим і найбільше людиною. <br />
        «Сповідь» — автобіографічний твір, у якому Авґустин у формі молитви розповідає про своє життя, що відрізнялося занепокоєнням, постійним пошуком і багатьма помилками, про свій досвід грішника, котрий відкрив шлях до Бога, саме у Ньому віднайшов усе, чого шукав. Він вважав, що нема святих без минулого, нема грішників без майбутнього. У молодому віці Авґустин втратив віру в Бога, переживав духовну еволюцію і лише згодом повернувся до Церкви і був визнаний взірцем християнського способу життя і служіння».</p> 
    </li>

    

    </ul>
</div> }
</div>
         </div>  
         );
         }