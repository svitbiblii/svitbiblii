// "use client";
 
//  import { Link } from "@/i18n/routing";
//  import { useTranslations } from "next-intl";
//  import { useState, useEffect, useRef } from "react";
//  import { ChevronFirst, ChevronLast } from "lucide-react";
//  import { About } from "@/components/about";
//  import History from "@/components/history";
 
//  export default function PsalmiPage() {
//     const t = useTranslations("BookContents");

//      const psalom138Ref = useRef<HTMLHeadingElement>(null);
//      const [showContent, setShowContent] = useState(false);
//      const [expanded, setExpanded] = useState(true);
//      const [isHighlighted, setIsHighlighted] = useState(false);

//   useEffect(() => {
//     const url = new URL(window.location.href);
//     const hash = url.hash;
//     const shouldScrollAndHighlight = hash.includes('#psalom138') && hash.includes('scroll=true');

//     if (shouldScrollAndHighlight) {
//       setIsHighlighted(true);
//     //   setTimeout(() => {
//     //     setIsHighlighted(false); 
//     //   }, 4000);

//       if (psalom138Ref.current) {
//         psalom138Ref.current.scrollIntoView({
//           behavior: 'smooth', 
//           block: 'start',   
//         });
//       }
//     } else {
//       setIsHighlighted(false);
//     }
//   }, []);

//      return (
//         <div className="h-min-full flex">
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

// <ul className="list-none bg-secondary pl-0">
// <li>
//     <Link href='/library/bible/psalmi/#section1' 
//         className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//         Псалом 137
//     </Link>
// </li>
// <li>
//     <Link href='/library/bible/psalmi/#section2' 
//         className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//             Псалом 138
//     </Link>
// </li>  
// <li>
//     <Link href='/library/bible/psalmi/#section3' 
//         className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
//             Псалом 139
//     </Link>
// </li> 
// </ul>  :
//                                  <History />}    
//                                  </div>
//                              </div>   
//                      </div> 
         
         
//                      <div className="relative h-full w-full px-4 pt-2 block">
                    
       
//        <div className="w-full">

//  <h2 className="pt-0">Книга Псалмів (переклад І. Огієнка)</h2>

//  <section id="section1" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
//       <h2>Псалом 137</h2>
//       <p>1. Прославляю Тебе цілим серцем своїм, перед богами співаю Тобі!</p>
//       <p>2. Вклоняюсь до храму святого Твого, і славлю Імення Твоє за Твоє милосердя й за правду Твою, бо звеличив Ти був над усе Своє Ймення та слово Своє!</p>
//       <p>3. Удень, як взиваю, почуєш мене, підбадьорюєш силою душу мою!</p>
//       <p>4. Усі земні царі прославлять Тебе, Господи, будуть, бо почують вони слово уст Твоїх,</p>
//       <p>5. і будуть співати про Господні дороги, бо слава Господня велика,</p>
//       <p>6. бо високий Господь, але бачить низького, а гордого Він пізнає іздалека!</p>
//       <p>7. Якщо серед тісноти піду, Ти оживиш мене, на лютість моїх ворогів пошлеш руку Свою, і правиця Твоя допоможе мені,</p>
//       <p>8. для мене Господь оце виконає! Твоя милість, о Господи, вічна, чинів Своєї руки не полиш!</p>
//     </section>
 
//  <section id="section2" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
//   <h2 id="psalom138" ref={psalom138Ref} className={isHighlighted ? 'text-blue-400': ''}>Псалом 138</h2>
//   <p>1. Господи, випробував Ти мене та й пізнав,</p>
//   <p>2. Ти знаєш сидіння моє та вставання моє, думку мою розумієш здалека.</p>
//   <p>3. Дорогу мою та лежання моє виміряєш, і Ти всі путі мої знаєш,</p>
//   <p>4. бо ще слова нема на моїм язиці, а вже, Господи, знаєш те все!</p>
//   <p>5. Оточив Ти мене ззаду й спереду, і руку Свою надо мною поклав.</p>
//   <p>6. Дивне знання над моє розуміння, високе воно, я його не подолаю!</p>
//   <p>7. Куди я від Духа Твого піду, і куди я втечу від Твого лиця?</p>
//   <p>8. Якщо я на небо зійду, то Ти там, або постелюся в шеолі ось Ти!</p>
//   <p>9. Понесуся на крилах зірниці, спочину я на кінці моря,</p>
//   <p>10. то рука Твоя й там попровадить мене, і мене буде тримати правиця Твоя!</p>
//   <p>11. Коли б я сказав: Тільки темрява вкриє мене, і ніч світло для мене,</p>
//   <p>12. то мене не закриє від Тебе і темрява, і ніч буде світити, як день, і темнота як світло!</p>
//   <p>13. Бо Ти вчинив нирки мої, Ти виткав мене в утробі матері моєї,</p>
//   <p>14. Прославляю Тебе, що я дивно утворений! Дивні діла Твої, і душа моя відає вельми про це!</p>
//   <p>15. І кості мої не сховались від Тебе, бо я вчинений був в укритті, я витканий був у глибинах землі!</p>
//   <p>16. Мого зародка бачили очі Твої, і до книги Твоєї записані всі мої члени та дні, що в них були вчинені, коли жодного з них не було...</p>
//   <p>17. Які дорогі мені стали думки Твої, Боже, як побільшилося їх число,</p>
//   <p>18. перелічую їх, численніші вони від піску! Як пробуджуюся, то я ще з Тобою.</p>
//   <p>19. Якби, Боже, вразив Ти безбожника, а ви, кровожерці, відступітесь від мене!</p>
//   <p>20. Вони називають підступно Тебе, Твої вороги на марноту пускаються!</p>
//   <p>21. Отож, ненавиджу Твоїх ненависників, Господи, і Твоїх заколотників бриджусь:</p>
//   <p>22. повною ненавистю я ненавиджу їх, вони стали мені ворогами!...</p>
//   <p>23. Випробуй, Боже, мене, і пізнай моє серце, досліди Ти мене, і пізнай мої задуми,</p>
//   <p>24. і побач, чи не йду я дорогою злою, і на вічну дорогу мене попровадь!</p>
// </section>

// <section id="section3" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 px-2 border border-gray-300 rounded-md">
//       <h2>Псалом 139</h2>
//       <p>1. Для дириґента хору. Псалом Давидів.</p>
//       <p>2. Визволь мене від людини лихої, о Господи, бережи мене від насильника,</p>
//       <p>3. що в серці своїм замишляють злі речі, що війни щодня викликають!</p>
//       <p>4. Вони гострять свого язика, як той вуж, отрута гадюча під їхніми устами! Села.</p>
//       <p>5. Пильнуй мене, Господи, від рук нечестивого, бережи мене від насильника, що задумали стопи мої захитати...</p>
//       <p>6. Чванливі сховали на мене тенета та шнури, розтягли свою сітку при стежці, сільця розмістили на мене! Села.</p>
//       <p>7. Я сказав Господеві: Ти Бог мій, почуй же, о Господи, голос благання мого!</p>
//       <p>8. Господи, Владико мій, сило мого спасіння, що в день бою покрив мою голову,</p>
//       <p>9. не виконай, Господи, бажань безбожного, не здійсни його задуму! Села.</p>
//       <p>10. Бодай голови не піднесли всі ті, хто мене оточив, бодай зло їхніх уст їх покрило!</p>
//       <p>11. Хай присок на них упаде, нехай кине Він їх до огню, до провалля, щоб не встали вони!...</p>
//       <p>12. Злоязична людина щоб міцною вона не була на землі, людина насильства бодай лихо спіймало її, щоб попхнути на погибіль!</p>
//       <p>13. Я знаю, що зробить Господь правосуддя убогому, присуд правдивий для бідних,</p>
//       <p>14. тільки праведні дякувати будуть Іменню Твоєму, невинні сидітимуть перед обличчям Твоїм!</p>
//     </section>
        
// </div>

// </div>
//          </div>  
//          );
//          }

"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import History from "@/components/history";

export default function PsalmiPage() {
  const t = useTranslations("BookContents");

  const psalom138Ref = useRef<HTMLHeadingElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    const shouldScrollAndHighlight = hash.includes('#psalom138') && hash.includes('scroll=true');

    if (shouldScrollAndHighlight) {
      setIsHighlighted(true);
      // setTimeout(() => {
      //   setIsHighlighted(false);
      // }, 4000);

      if (psalom138Ref.current) {
        psalom138Ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      setIsHighlighted(false);
    }
  }, []);

  return (
    <div className="h-min-full flex">
      <div className="relative">
        <button onClick={() => setExpanded(curr => !curr)}
          className={`absolute top-4 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      <div
        className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary pb-12 shadow-lg ${
          expanded ? "md:block" : "initial"
        }`}>
        <div>
          <About />

          <div className="bg-secondary px-6 pt-1 pb-8">
            <div className="py-2 flex justify-between font-medium">
              <button className={`w-1/2 ${showContent ? "" : "border-b-2 border-blue-500 text-blue-500"}`}
                onClick={() => { setShowContent(false) }}>
                {t('navigator')}
              </button>
              <button className={`w-1/2 ${showContent ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
                onClick={() => { setShowContent(true) }}>
                {t('content')}
              </button>
            </div>

            {showContent ?
              <ul className="list-none bg-secondary pl-0">
                <li>
                  <Link href='/library/bible/psalmi/#section1'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Псалом 137
                  </Link>
                </li>
                <li>
                  <Link href='/library/bible/psalmi/#section2'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Псалом 138
                  </Link>
                </li>
                <li>
                  <Link href='/library/bible/psalmi/#section3'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Псалом 139
                  </Link>
                </li>
              </ul> :
              <History />}
          </div>
        </div>
      </div>

      <div className="relative h-full w-full px-4 pt-2 block">

        <div className="w-full">

          <h2 className="pt-0">Книга Псалмів (новий переклад)</h2> {/* Змінив назву перекладу */}

          <section id="section1" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
            <h2>Псалом 137</h2>
            <p>1 Давида.</p>
            <p>Я буду дякувати, Господи, тобі з усього серця; перед богами буду тобі псалми співати.</p>
            <p>2 Упаду ниць перед твоїм святим храмом і буду дякувати імені твоєму за твою милість і твою правду, бо ти понад усяке ім’я возвеличив твоє слово.</p>
            <p>3 Тоді, як я візвав до тебе, ти вислухав мене, ти мене підбадьорив, вливши в мою душу силу.</p>
            <p>4 Усі царі землі, о Господи, будуть тобі дякувати, скоро почують слова уст твоїх.</p>
            <p>5 Будуть співати про путі Господні, велика бо Господня слава.</p>
            <p>6 Бо хоч Господь високо, покірного він бачить і гордого він пізнає здалека.</p>
            <p>7 Хоч я ходжу посеред лиха, ти мене оживляєш, Ти проти ворогів моїх шалених руку простягаєш і твоя десниця мене спасає.</p>
            <p>8 Господь почате доведе до краю задля мене. Милість твоя, о Господи, повіки; не покидай діла рук твоїх!</p>
          </section>

          <section id="section2" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
            <h2 id="psalom138" ref={psalom138Ref} className={isHighlighted ? 'text-blue-400' : ''}>Псалом 138</h2>
            <p>1 Провідникові хору. Псалом. Давида.</p>
            <p>Ти мене випробував, Господи, і знаєш.</p>
            <p>2 Знаєш мене, коли сиджу і встаю я. Думки мої здаля розумієш.</p>
            <p>3 Чи ходжу я, чи спочиваю, ти добре бачиш; тобі відомі всі мої дороги.</p>
            <p>4 Бо ще нема й слова на язиці у мене, а ти, Господи, вже все знаєш.</p>
            <p>5 Ти ззаду й спереду мене оточуєш, кладеш на мене твою руку.</p>
            <p>6 Що за предивне знання! Для мене занадто високе, недосяжне воно!</p>
            <p>7 Куди мені піти від духу твого? Куди мені втекти від обличчя твого?</p>
            <p>8 Зійшов би я на небо – ти там єси, ліг би я у Шеолі – і там ти.</p>
            <p>9 Взяв би крила зірниці, осівся б на край моря, –</p>
            <p>10 і там рука твоя мене б водила, і твоя десниця мене б тримала.</p>
            <p>11 Сказав би я: «Принаймні тьма нехай мене покриє, і світло, неначе ніч, мене сповиє», –</p>
            <p>12 та навіть темрява для тебе не занадто темна; і ніч, немов день, світить. Так темрява, як і світло!</p>
            <p>13 Ти створив моє нутро, ти мене виткав в утробі матері моєї.</p>
            <p>14 Хвалю тебе, що сотворив мене так дивно; діла твої предивні, ти душу мою знаєш вельми добре.</p>
            <p>15 Кості мої не були сховані від тебе, коли постав я таємничо, коли мене творено в землі глибоко.</p>
            <p>16 Очі твої бачили мої вчинки, усі вони записані у твоїй книзі; і дні, що ти мені призначив, коли ані одного із них іще не було.</p>
            <p>17 Як мені тяжко думки твої збагнути, Боже! Яка їх сила!</p>
            <p>18 Я полічив би їх, та їх від піску більше; якби й скінчив, я був би ще з тобою.</p>
            <p>19 Якби ж то ти, Боже, знищив нечестивця, і відступили геть від мене кровожерні,</p>
            <p>20 що обговорюють тебе підступно й лукаво повстають на тебе!</p>
            <p>21 Хіба я, Господи, не ненавиджу тих, що тебе ненавидять? Хіба я не гидую тими, що повстають на тебе?</p>
            <p>22 Я їх страшною ненавистю ненавиджу, вони моїми ворогами стали.</p>
            <p>23 Вивідай мене, о Боже, і спізнай моє серце, випробуй мене й спізнай мої задуми!</p>
            <p>24 І подивись, чи є в мені якась лиха дорога, і веди мене дорогою давньою.</p>
          </section>

          <section id="section3" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 px-2 border border-gray-300 rounded-md">
            <h2>Псалом 139</h2>
            <p>1 Провідникові хору. Псалом. Давида.</p>
            <p>2 Визволь мене, о Господи, від злого чоловіка, бережи мене від насильницького мужа!</p>
            <p>3 Від тих, що злобу в серці замишляють, щодня здіймають колотнечі,</p>
            <p>4 гострять язики свої, мов гадюка; отрута змії на устах їхніх.</p>
            <p>5 Сохрани мене, Господи, від руки нечестивця, бережи мене від насильницького мужа. Вони задумали мене з ніг збити.</p>
            <p>6 Горді сховали на мене тенета і мотуззя і розіп’яли сітку при дорозі, сильце поставили на мене.</p>
            <p>7 Я кажу Господеві: «Ти єси – Бог мій! Почуй, Господи, голос мого благання!»</p>
            <p>8 Господи, Боже мій, сило мого спасіння! Ти покриваєш голову мою в день бою.</p>
            <p>9 Не дай, Господи, щоб грішника бажання збулися, не потурай його лихим задумам.</p>
            <p>10 Хай не підносять голови ті, що мене обсіли, хай злоба власних губ їх вкриє.</p>
            <p>11 Нехай гаряче вугілля на них упаде, у прірви нехай їх кинуть, щоб не встали більше.</p>
            <p>12 Злоріка на землі не встоїться, насильника й злого будуть безнастанно гнати й бити.</p>
            <p>13 Я знаю, що Господь бідному вчинить правосуддя, і заступиться за право вбогих.</p>
            <p>14 І праведники твоє ім’я прославлятимуть, а праві житимуть перед тобою.</p>
          </section>

        </div>

      </div>
    </div>
  );
}