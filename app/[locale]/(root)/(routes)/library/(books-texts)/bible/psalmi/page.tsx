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
            <p>1 Ти мене випробував, Господи, і знаєш.</p>
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