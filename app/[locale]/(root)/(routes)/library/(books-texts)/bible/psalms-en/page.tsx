"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import History from "@/components/history";

export default function PsalmsENPage() {
  const t = useTranslations("BookContents");

  const psalomEn138Ref = useRef<HTMLHeadingElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    const shouldScrollAndHighlight = hash.includes('#psalomEn138') && hash.includes('scroll=true');

    if (shouldScrollAndHighlight) {
      setIsHighlighted(true);
      // setTimeout(() => {
      //   setIsHighlighted(false);
      // }, 4000);

      if (psalomEn138Ref.current) {
        psalomEn138Ref.current.scrollIntoView({
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
                  <Link href='/library/bible/psalms-en/#section1'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Psalm 137
                  </Link>
                </li>
                <li>
                  <Link href='/library/bible/psalms-en/#section2'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Psalm 138
                  </Link>
                </li>
                <li>
                  <Link href='/library/bible/psalms-en/#section3'
                    className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Psalm 139
                  </Link>
                </li>
              </ul> :
              <History />}
          </div>
        </div>
      </div>

      <div className="relative h-full w-full px-4 pt-2 block">

        <div className="w-full">

          <h2 className="pt-0">The Book of Psalms (trans. New King James Version)</h2>

          <section id="section1" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
            <h2>Psalm  137</h2>
<p>1 I will praise You with my whole heart; before the gods I will sing praises to You.</p>
<p>2 I will worship toward Your holy temple, and praise Your name for Your lovingkindness and Your truth; for You have magnified Your word above all Your name.</p>
<p>3 In the day when I cried out, You answered me, and made me bold with strength in my soul.</p>
<p>4 All the kings of the earth shall praise You, O Lord, when they hear the words of Your mouth.</p>
<p>5 Yes, they shall sing of the ways of the Lord, for great is the glory of the Lord.</p>
<p>6 Though the Lord is on high, yet He regards the lowly; but the proud He knows from afar.</p>
<p>7 Though I walk in the midst of trouble, You will revive me; You will stretch out Your hand against the wrath of my enemies, and Your right hand will save me.</p>
<p>8 The Lord will perfect that which concerns me; Your mercy, O Lord, endures forever; do not forsake the works of Your hands.</p>
          </section>

          <section id="section2" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
            <h2 id="psalomEn138" ref={psalomEn138Ref}>Psalm 138</h2>
<p>1 <span className={isHighlighted ? 'bg-blue-300 ': ''}>O Lord, You have searched me and known me.</span></p>
<p>2 <span className={isHighlighted ? 'bg-blue-300 ': ''}>You know my sitting down and my rising up You understand my thou;ght afar off.</span></p>
<p>3 <span className={isHighlighted ? 'bg-blue-300 ': ''}>You comprehend my path and my lying down,and are acquainted with  all my ways.</span></p>
<p>4 <span className={isHighlighted ? 'bg-blue-300 ': ''}>For there is not a word on my tongue, butbehold, O Lord, You kno w it altogether.</span></p>
<p>5 <span className={isHighlighted ? 'bg-blue-300 ': ''}>You have hedged me behind and before, andlaid Your hand upon me. </span></p>
<p>6 <span className={isHighlighted ? 'bg-blue-300 ': ''}>Such knowledge is too wonderful for me; i is high, I cannot attatin it.</span></p>
<p>7 <span className={isHighlighted ? 'bg-blue-300 ': ''}>Where can I go from Your Spirit? Or wherecan I flee from Your pr esence?</span></p>
<p>8 <span className={isHighlighted ? 'bg-blue-300 ': ''}>If I ascend into heaven, You are there; i I make my bed in hell,f behold, You are there.</span></p>
<p>9 <span className={isHighlighted ? 'bg-blue-300 ': ''}>If I take the wings of the morning, and dell in the uttermost pawrts of the sea,</span></p>
<p>10<span className={isHighlighted ? 'bg-blue-300 ': ''}> even there Your hand shall lead me, and our right hand shall hoYld me.</span></p>
<p>11 If I say, “Surely the darkness shall fall on me,” even the night shall be light about me;</p>
<p>12 indeed, the darkness shall not hide from You, but the night shines as the day; the darkness and the light are both alike to You.</p>
<p>13 For You formed my inward parts; You covered me in my mother’s womb.</p>
<p>14 I will praise You, for I am fearfully and wonderfully made; marvelous are Your works, and that my soul knows very well.</p>
<p>15 My frame was not hidden from You, when I was made in secret, and skillfully wrought in the lowest parts of the earth.</p>
<p>16 Your eyes saw my substance, being yet unformed. And in Your book they all were written, the days fashioned for me, when as yet there were none of them.</p>
<p>17 How precious also are Your thoughts to me, O God! How great is the sum of them!</p>
<p>18 If I should count them, they would be more in number than the sand; when I awake, I am still with You.</p>
<p>19 Oh, that You would slay the wicked, O God! Depart from me, therefore, you bloodthirsty men.</p>
<p>20 For they speak against You wickedly; Your enemies take Your name in vain.</p>
<p>21 Do I not hate them, O Lord, who hate You? And do I not loathe those who rise up against You?</p>
<p>22 I hate them with perfect hatred; I count them my enemies.</p>
<p>23 Search me, O God, and know my heart; try me, and know my anxieties;</p>
<p>24 And see if there is any wicked way in me, and lead me in the way everlasting.</p>
          </section>

          <section id="section3" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 px-2 border border-gray-300 rounded-md">
            <h2>Psalm 139</h2>
<p>1 To the Chief Musician. A Psalm of David.</p>
<p>2 Deliver me, O Lord, from the evil man; preserve me from the violent man,</p>
<p>3 who devises evil things in their hearts; continually they gather together for war.</p>
<p>4 They sharpen their tongues like a serpent; the poison of asps is under their lips. Selah</p>
<p>5 Keep me, O Lord, from the hands of the wicked; preserve me from the violent man, who have purposed to make my steps stumble.</p>
<p>6 The proud have hidden a snare for me, and cords; they have spread a net by the wayside; they have set traps for me. Selah</p>
<p>7 I said to the Lord, “You are my God; hear the voice of my supplications, O Lord.”</p>
<p>8 O Lord God, the strength of my salvation, You have covered my head in the day of battle.</p>
<p>9 Do not grant, O Lord, the desires of the wicked; do not further their wicked schemes, lest they be exalted. Selah</p>
<p>10 As for the head of those who surround me, let the mischief of their own lips cover them;</p>
<p>11 let burning coals fall on them; let them be cast into the fire, into deep pits, that they rise not up again.</p>
<p>12 Let not a slanderer be established in the earth; let evil hunt the violent man to overthrow him.</p>
<p>13 I know that the Lord will maintain the cause of the afflicted, and justice for the poor.</p>
<p>14 Surely the righteous shall give thanks to Your name; the upright shall dwell in Your presence.</p>
          </section>

        </div>

      </div>
    </div>
  );
}