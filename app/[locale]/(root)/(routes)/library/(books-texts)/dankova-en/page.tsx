"use client";
 
 import { Link } from "@/i18n/routing";
 import { useTranslations } from "next-intl";
 import { useState, useEffect, useRef } from "react";
 import { ChevronDown, ChevronUp, CircleX } from "lucide-react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function DankovaEnPage() {
    const t = useTranslations("BookContents");
    const section1EnRef = useRef<HTMLDivElement>(null);
  const bookContentEnRef = useRef<HTMLDivElement>(null);

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
        const savedBooks = sessionStorage.getItem('bookname');
        if (savedBooks) {
          setStoredBook(JSON.parse(savedBooks));
        }
    
        const url = new URL(window.location.href);
        const hash = url.hash;
        const shouldScrollToSection = hash.includes('#section1') && hash.includes('scroll=true');
    
        if (shouldScrollToSection && section1EnRef.current) {
          const mainElement = document.querySelector('main');
    
          // Спочатку переходимо на початок книги (прокручуємо main до верху)
          if (mainElement) {
            mainElement.scrollTop = 0;
          }
    
          // Затримка перед початком плавної прокрутки до section1
          setTimeout(() => {
            section1EnRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start', // Щоб верх секції був на початку видимої області
            });
          }, 1500);
        }
    
        // Відновлення позиції прокрутки внутрішнього div
        if (showPage && bookContentEnRef.current) {
          const savedMainScrollPosition = sessionStorage.getItem('mainScrollPosition_dankova-en');
          if (savedMainScrollPosition) {
            bookContentEnRef.current.scrollTop = parseInt(savedMainScrollPosition, 10);
            sessionStorage.removeItem('mainScrollPosition_dankova-en');
          }
        }
    
        const mainElement = document.querySelector('main'); // Отримуємо елемент main за селектором
    
        const handleBeforeUnload = () => {
          if (mainElement) {
            sessionStorage.setItem('mainScrollPosition_dankova-en', String(mainElement.scrollTop));
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeUnload', handleBeforeUnload);
        };
      }, [showPage]);
    
      const togglePage = () => {
        const mainElement = document.querySelector('main'); // Отримуємо елемент main при кожному кліку
        if (mainElement && !showPage) {
          sessionStorage.setItem('mainScrollPosition_dankova-en', String(mainElement.scrollTop));
        }
        setShowPage(!showPage);
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
    <Link href='/library/dankova-en/#section1' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 1
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section2' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 2
    </Link>
</li>  
<li>
    <Link href='/library/dankova-en/#section3' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 3
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section4' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 4
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section5' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 5
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section6' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 6
    </Link>
</li>  
<li>
    <Link href='/library/dankova-en/#section7' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 7
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section8' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 8
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section9' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 9
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section10' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 10
    </Link>
</li>  
<li>
    <Link href='/library/dankova-en/#section11' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 11
    </Link>
</li>
<li>
    <Link href='/library/dankova-en/#section12' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
            Chapter 12
    </Link>
</li>
</ul>  :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
                     
                     <div className={`relative h-full w-full px-4 pt-2 flexscroll ${showPage ? "md:flex md:h-screen block" : "block"} `}
                     ref={bookContentEnRef} style={{ overflowY: 'auto' }}>
       
       <div className={`  ${showPage ? "px-3 mb-3 md:mb-0 border-2 border-blue-200 rounded-lg md:border-none md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>
 <h2 className="pt-0">&rdquo;Seven Nights Before Christmas&rdquo; by N. Dankova</h2>
<h3>Publisher &rdquo;Books XXI&rdquo;/&rdquo;Black Sheep Publishing House&rdquo; (With the permission of Vasyl Droniak, director of the publishing house)</h3>

<section id="section3">
  {/* <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 66-68</span>
  </p> */}
  <p>
    The gray house, narrow with three windows, subtly hid around the corner of a busy street. Jan had passed it
    thousands of times before and never once noticed that these forged doors opened in the evening for those who
    held a yellow envelope with a valuable seal. They opened before him too, slowly and with a creak. He stepped into a
    cramped corridor, and then into a spacious gallery.
  </p>
  <p>
    It was hard to explain, but from the inside, the house was enormous; Jan couldn&#39;t fathom how these halls, arches, gardens,
    passages, stairs, and hundreds of rooms fit into a house with three windows. A thousand-eyed gray house. In the gallery, two
    footmen took his outerwear, sweater, and even his shoes. In Nero’s abode, one walked barefoot.
  </p>
  <p>
    Instead of carpets and parquet, sand was scattered on the floor. Red and sticky. They say it’s good for the feet,
    especially for flat feet. The emperor suffered from that ailment. And nothing was visible on the crimson sand.
  </p>
  <p>
    Jan passed about a dozen rooms before he reached the marble hall. Grains of sand slipped between his toes and bounced aside
    — he walked impatiently.
  </p>
  <p>
    Few had seen the emperor&#39;s face. He rarely appeared in public, always from a distance, surrounded by a dense
    circle of loyal companions. And his face was always shadowed by a hood or a hat.
  </p>
  <p>
    The attendant pointed him to the entrance of the hall and left. But Jan looked aside: he was drawn by narrow, spiral stairs. From there,
    he heard lively singing and followed it. Down. To where it called from. Everything that breathes sings on strings and organ.
  </p>
  <p>
    Bare feet slid down the stairs, eyes strained into the gloom, adjusting. A door. Not tightly closed. A room lower than
    the ground, with ten people inside.
  </p>
  <p>
    They sat along the wall, bound by ropes and darkness. Their faces, clothes, and bodies — smeared with clay. Their jars
    broken in half. Red sand oozed from them. Clay blood, sleeplessness from clay, and mad,
    clay-like madness. And (this struck Jan the most) in one of them, he recognized Abel&#39;s eyes. Such strange, almost transparent
    eyes he had seen in shepherds when he was in the mountains. They watched over sheep where the world forgot about them. Jan lowered his gaze
    and went back upstairs.
  </p>
  <p>
    The marble hall had no corners or ceiling. Round, with a star-studded vault, like a coliseum. Instead of doors, two trees grew at the entrance.
    And instead of windows, a thousand slits. When the sun shone too brightly from outside, servants lowered a veil
    of curtains. The sun was not allowed to disturb the peace in the three-window house!
  </p>
  <p>
    Stars instead of a ceiling twinkled and pleased the emperor&#39;s eye, who loved all things beautiful. In a semicircle in the marble hall
    stood 75 chairs, and set apart from them — a stone armchair.
  </p>
  <p>
    — This stone saw the flood. It stood firm when water swallowed the highest mountains. In it is my might and strength.
  </p>
  <p>
    Jan turned — the emperor entered silently. Neroni looked like a youth, though he was much older.
    Handsome, slender, with dark hair and sharp cheekbones, dressed in a gray velvet suit
    with a high collar. He watched his guest intently and seemed ready to catch the slightest movement of thought. But
    his beautiful gray eyes were motionless. As if cast from Venetian glass.
  </p>
  <blockquote>
    <p>— The heart is visible from the eyes. Mine doesn&#39;t beat, — Nero placed his hand on his chest. Quietly. Firmly.</p>
  </blockquote>
  <p>
    The emperor suffered from an incurable affliction — a stone heart. He acquired it on a journey to the Island of Chimeras. Three hunters fell by
    his hand, but at the last moment, they shot him in the chest. He should have turned to stone, but he stood firm; three arrows broke against his heart.
    Since then, joy was superfluous, pain distant, sorrow unknown, fear deaf. It wasn&#39;t such a misfortune. But the affliction
    spread, extending over his whole body. Sometimes, a leg, arm, or neck would turn to stone overnight. Of course, that quickly passed,
    after an hour or two, the body warmed, and trembling and blood returned. But the weakness did not let go. And only
    beauty could quell it.
  </p>
  <blockquote>
    <p>— I love all beautiful things, — the emperor sat in the armchair. He favored it to get used to the stone every day and not to fear it.</p>
  </blockquote>
  <p>
    Nero sought to fill the emptiness in his chest with desired beauty. Only it allowed him to feel. He took everything
    that caught his eye: a flower, an ornament, a woman, music, or a smile. He drank everything insatiably, swallowed, emptied,
    broke. And lived. For even stone can live no worse than a human of flesh and blood.
  </p>
</section>

<section id="section4">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 79</span>
  </p>
  <p>
    In the morning, as soon as it dawned, Jan went to the shore without a fishing rod or net to catch fish that had eluded his grasp his entire life.
    He took off his shirt, rolled up his trousers, and entered the water. After a moment, the sea stirred, a white fish leaped from the waves and grabbed
    his leg, and Jan clung to its head, holding it with all his might barehanded until he pulled it ashore.
  </p>
  <p>
    The fish sang, he listened and transcribed its song nearby in the sand. Then he washed his brother&#39;s shirt in saltwater, took
    the catch, and brought it to his mother to prepare delicious dishes — those his father loved.
  </p>
  <p>
    Jovan lay in a wide boat that served as his bed. While he could still see, he had carved it from oak and tarred it
    inside and out. Since then, he made his bed in it and heard the familiar whisper of the sea. Every day it grew closer.
  </p>
  <p>
    — Our son has arrived, — Aurelia said softly and drew back the curtains on the windows.
  </p>
  <p>
    — Ivo! — he raised himself as much as he could on trembling elbows.
  </p>
  <p>
    — Yes, father, — Jan entered and introduced himself as his brother. He wore his shirt, he stole salt from the sea.
  </p>
  <p>
    His father didn&#39;t recognize him and rejoiced. He ate baked fish, and his sight returned to his faded eyes.
  </p>
  <p>
    He saw so far that even the eyes of an eagle couldn&#39;t reach those lands, he heard words that lips don&#39;t know, he
    walked a path that bypasses the world.
  </p>
  <blockquote>
    <p>«Boy, my Ivo, you know how to catch fish. If only your brother could…» — Jovan looked at him so sadly, as if he
    saw everything and understood everything.</p>
  </blockquote>
  <p>
    Jan kissed him; he smelled of the sea. And his father blessed him instead of Ivo, and gave him his blessing, and
    placed it into Jan&#39;s heart. Like dew from Heaven, wind from the sea, fullness from the earth.
  </p>
  <p>
    — Father, I love you very much.
  </p>
  <blockquote>
    <p>«Ivo, my good, sincere boy. Take care of your brother, for he is uncertain, there is little faith in his heart. Faith and Christmas.»</p>
  </blockquote>
  <p>
    Jan knelt before him and didn&#39;t let go of his hand. Aurelia lay down in the boat, next to her husband, leaned
    on his shoulder, and fell asleep.
  </p>
  <p>
    Jan&#39;s parents passed away from him on the same day. They left as they lived — holding hands tightly.
  </p>
</section>

<section id="section5">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 82</span>
  </p>
  <p>
    The third shepherd looked at the boy slyly, as if testing him. He knew that the boy came to the mountains to drink
    their freedom, to touch the space that stops time.
  </p>
  <blockquote>
    <p>«To be free, one must know how to give.»</p>
  </blockquote>
  <p>— What?</p>
  <blockquote>
    <p>«Everything.»</p>
  </blockquote>
  <blockquote>
    <p>«And you, Jan, are a cunning and rich young man,» — he winked at him and packed strong tobacco into his pipe. And the first
    shepherd gave him fire.</p>
  </blockquote>
  <p>— Am I so rich? I have no more small change in my pocket than you. And I don&#39;t regret it if I lose it. I&#39;m indifferent to that, and if something runs out, I&#39;ll take up my violin, play, and I&#39;ll have it. And if not, I&#39;ll be content anyway.</p>
  <blockquote>
    <p>«Is that just a trifle? How can you be a beggar when you skillfully pluck the strings, so much so that even the moon in the darkness bows
    to our mountain?»</p>
  </blockquote>
  <p>— Does anyone bury what they have in the ground? When you find one talent, multiply them to ten, and even a hundred!</p>
  <p>Abel&#39;s pale eyes pierced him through.</p>
  <blockquote>
    <p>«And will you give all these hundred or ten to Him who first gave one? Are you truly thirsty to go for water through a ravine
    as wide as the eye of a needle? With it, everything is possible, you won&#39;t desire anything else, but that water is very expensive. My cunning
    boy, your eye is proud, because out of ten talents — nine are yours, because “your Master is harsh, reaping where he did not sow, and gathering
    where he did not scatter.”»</p>
  </blockquote>
  <p>At dawn, the third shepherd went to plant seeds. And Jan saw how at his word the mountain moved. The boy knew that if the shepherd told it:
  «Cast yourself into the sea,» — it would dive without hesitation.</p>
  <blockquote>
    <p>«Only with one word, small, mustard-like, for it is living.»</p>
  </blockquote>
</section>

<section id="section6">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 97</span>
  </p>
  <p>
    A voice that doesn&#39;t drown or burn.
  </p>
  <blockquote>
    <p>«Torn from the shore, from the mainland… Cold ice floes are increasingly binding the shore… Only by flight and
    by boat, which are not afraid of icy “shuga,” can one reach us,» — the voice said. Perhaps he too once
    held such a lion in his hands.</p>
  </blockquote>
  <p>Eva again lit the floor lamp in the corridor, and greenish light smokily seeped through the door crack. Zlata squinted harder
  and listened:</p>
  <blockquote>
    <p>«Recently, I woke up late at night. Everyone else was sleeping… a dark, stuffy barrack with a flickering lantern
    under the ceiling. Bodies clustered together. Many, many people. A familiar, well-known scene, a familiar feeling from many
    nights of these two years… And in my heart, a terrible loneliness, a childish and unspeakable helplessness…»</p>
  </blockquote>
  <p>Listening to the voice was difficult — intense tension permeated the entire body from the slightest touch to this, brought from who knows where,
  exhibit:</p>
  <blockquote>
    <p>«Life passes monotonously… In the rainy gray twilight, the beginning and end of the day are lost, and the middle drowns in monotonous
    work, standing for long hours in a huge barrack with your knife and mallet before baskets… The soul somehow
    freezes, coarsens from this constant brutality around: wildness, madness, swearing, and condemnation.»</p>
  </blockquote>
  <p>The voice loved to look at the sky, loved to wander by the sea and lakes, loved birds and even the clouds that fell on his forehead:</p>
  <blockquote>
    <p>«Years pass in memory… Some — like clouds, illuminated by rays. Others — like blue, blue clouds… Thirds — like clouds
    stormy, dark, leaden, terrifying… Here I am alone in a hospital, in prison…»</p>
  </blockquote>
  <p>Fr. A. Zh. — the voice had its initials, and its own life too:</p>
  <blockquote>
    <p>«…here I am completely alone. There are no close ones here at all… And here so close, eternally close is He…»</p>
  </blockquote>
</section>

<section id="section7">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 101</span>
  </p>
  <p>
    The girl rejoiced, splashed the spring, plunged her hands to the very bottom — three
    small frogs jumped into her palms. Bluish-grey, like water.
  </p>
  <p>— Look, Zlata! — Helia told her how she once ran away from her nanny and fell asleep by a spring near a willow. But
    she fell asleep strangely, for she saw three frogs: the first sat on her head and took all her memories; the second jumped
    onto her heart and took her thoughts, and the third stood aside and said:</p>
  <blockquote>
    <p>«You are evil.»</p>
  </blockquote>
  <p>Then all three frogs jumped back into the water.</p>
  <blockquote>
    <p>«In that spring, my memories and thoughts are visible. Everything good and evil I have done, everything I have seen, and even my
    dreams.»</p>
  </blockquote>
</section>

<section id="section8">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 112</span>
  </p>
  <p>
    You created man from dust and woman from his rib. Jan squinted, but in vain — his chest burned. Three
    singers did not ascend to the choir loft but stood nearby.
  </p>
  <blockquote>
    <p>«Yoan…»</p>
  </blockquote>
  <p>— Father Stakhiy&#39;s voice echoed from afar. Jan and Ivo shared one name, for both are shortened from the same.</p>
  <blockquote>
    <p>«Yoan, have you not promised yourself to another?»</p>
  </blockquote>
  <p>To another… Perhaps he would have wanted another, but there is no other, when only one is in his eyes. This woman, shrouded in a smile, came to
  him without a choice. The only one in the whole world. Against truth, conscience, brother…</p>
  <blockquote>
    <p>«Like Abraham and Sarah, like Isaac and Rebekah, like Jacob and Rachel, like Joseph and Asenath, like Moses and Zipporah…»</p>
  </blockquote>
  <p>He put a silver ring on her finger. When they left the church, the day was so dazzling that it seemed
  white. They couldn&#39;t drink enough of that day; they circled it: from afternoon till dusk. And that day was round for them,
  like a nut. Jan took that nut and hid it in his grandfather&#39;s box, so that it wouldn&#39;t accidentally fall and split in half.</p>
  <p>They stood by the window. The wind lifted the curtains like birds&#39; wings. A sailboat sailed to distant shores.</p>
  <blockquote>
    <p>«From what cloth should its sails be sewn?»</p>
  </blockquote>
  <blockquote>
    <p>«If you sew them from white, I will sail far, beyond the horizon, past seven islands. And if you sew them from black, I will not drown anyway,
    I will overcome all seven deaths anyway and return to you in seven years. But if you meet a rudderless boat, do not ask
    from what cloth it once had sails.»</p>
  </blockquote>
</section>

<section id="section9">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 116</span>
  </p>
  <p>
    Helia interrupted his story and continued her own. She ran a tortoise-shell comb through Zlatka&#39;s braids and then
    recounted a poem about the strange city of «Yelu-Salim,» and about the terrible giant-Circassian whom the brave
    knight Tancred defeated. But in the duel, he suffered mortal wounds and was barely alive when the princess found him. Erminia, daughter of the Saracen ruler.
    She cut off her miraculous hair and bandaged Tancred&#39;s wounds.
  </p>
  <blockquote>
    <p>«Does such a thing happen, Zlata? Golden braids — healing, like honey…»</p>
  </blockquote>
</section>

<section id="section10">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 133</span>
  </p>
  <p>
    The girl listened and fell asleep. Zlata left her in bed. She put on a sweater and went to the window — skinny cows. They had recently come to the
    city. Ugly in appearance: triangular shoulders, skin and bones, and their tongues sharp as a blade, as a dagger, as a
    scream. They hid in empty houses, and at night they walked the streets and peered into windows. Their gaze is hard to
    endure; it is yellow, like everything around.
  </p>
  <p>
    People covered windows with curtains, drapes, black cloth, and if there was none — they nailed boards over the panes, and poured
    wax into their ears so as not to hear their roar. They said they did not exist, and never had. And if you see them, do not look;
    if someone recognizes them — do not believe your eyes.
  </p>
  <p>
    Skinny cows eat everything they see, and cannot be satisfied, they eat again: wheat, bread, vegetables, everything that falls, green
    sprouts, last year&#39;s leaves, tree bark, and even rotten things. They devoured everything clean, and are still insatiable, still eating…
  </p>
  <p>
    Summer did not come. It had been the third month since the thaw. Slush, wet snow, or rain. The sun froze and did not warm, trees froze
    and nothing grew on the ground. Grass, seeds, and greens — everything that had sprouted from under the snow, the cows had
    already eaten long ago, and continued to eat what people hid from them. Not to believe in them was becoming harder and harder; they now often
    walked the streets even during the day.
  </p>
  <blockquote>
    <p>«I saw a dragon, but they are scarier.»</p>
  </blockquote>
  <p>It is rumored that outside the city they have already swallowed other cows, sheep, and horses. When not a crumb is left, will they eat
  people?</p>
  <p>Ugly in appearance, skinny in body. Tongue like a knife, triangular shoulders and eyes — charred fires. Tears stagnate in them, and days grow dim.</p>
</section>

<section id="section11">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 152</span>
  </p>
  <p>
    He smiled — his eyes were glass! — and thanked his wife for the charming guest.
  </p>
  <blockquote>
    <p>«My emperor, I will be pleased today. For you will forget about me, and tonight you will peck not my neck and
    drink not my blood,» — she nervously tugged her high collar and left.</p>
  </blockquote>
  <p>Zlata put the key back where she had taken it from. Nero turned on the light — and from all the mirrors, they stared at her: jackals and snakes,
  frogs and crocodiles, monkeys and dogs. A stone heart thirsty for beauty. Only she was not afraid; she had already seen all the
  heads of these beasts in Jan&#39;s well of memories. She already knew all of Nero&#39;s gods. And the Creator judged them when
  He split the sea in half. But why did He not drown all the white islands in it!</p>
  <blockquote>
    <p>«Sit down, my beautiful guest, I will tell you about my son,» — Nero led her to the edge of the couch. — «He is capable, but I
    worry about him. This is understandable; like every father, I watch over his soul and body. And once he lost
    sleep. By day, he walks pale, unable to memorize any of the books. He became more sensitive to laughter,
    somehow learned about earthly joy and pain. What happened to my indifferent boy? Someone is stealing his
    sleep! And I had to find the thief. Seven nights in a row, my most loyal officers guarded his door. And none could
    resist — at midnight they succumbed to sleep. Then I myself stood guard. And what did I see? In his hand was a
    feather of an unknown bird. It glowed with warmth, not heat. And my boy couldn&#39;t stop, wouldn&#39;t sleep, but watched
    it all night. In the morning, I pulled from his box — a firebird&#39;s feather? — a lock of hair! Then I demanded
    a woman with such hair for myself. I will swallow bitter honey or fire, or perhaps I will drink.»</p>
  </blockquote>
  <p>The emperor took her hand, and suddenly the silver ring burned his palm. His glass eyes cracked and trembled —
  he felt pain again… The rock shuddered, a merciless hammer struck it — a mad knocking was heard
  from his stone chest. He began to see and hear so clearly, as if transformed into a beast or one of the birds. The crimson sand
  raised wild cries at him, his heart trembled like the sky on a stormy day. A forgotten feeling — his hand burned,
  scorched by some trifle. Earthly pain is lowly, it is devoid of beauty.</p>
  <blockquote>
    <p>«Witch!»</p>
  </blockquote>
</section>

<section id="section12">
  <p>
    <span className="page-number text-gray-500 text-sm italic mr-2">Pp 160</span>
  </p>
  <p>
    Jan walked away from her with a heart of stone. He walked so as not to look back, to leave. Thorn bushes under the snow, bare larches, mighty oaks.
    Last night, a strange camp stood beneath them. No traces remained; they walk without a trace here, only near the trees are full
    of ladders. Tall and slender, reaching to the very sky if needed — they will reach, if needed — they will ascend. From top to bottom, from bottom to top
    only those who can walk without a trace, and others who go at the call of the star, will step on those high rungs.
    Their steps are noticeable, adorned in gold, fragrant as incense, as myrrh, sad.
  </p>
  <p>
    Jan passes that camp, turns onto the path. It&#39;s already clouding over; in winter, it gets dark so quickly. He wandered for a long time, a hermit in the
    forest, until he saw a companion walking by the river. A chiton, sandals — how does he not get cold? — a spear-staff and a bag
    over his shoulder. He walked at a distance, circumventing. But Jan quickly turned to him, jumped into the river, and cut across his path.
  </p>
  <blockquote>
    <p>«Step aside.»</p>
  </blockquote>
  <p>Jan replied:</p>
  <blockquote>
    <p>«I won&#39;t let go until you tell me how to turn back time.»</p>
  </blockquote>
  <p>The companion paid no attention and wanted to continue. He stepped into the river — instantly the water covered with ice. Obediently. As on every night
  before Christmas. Jan caught up, grabbed his hand, and wrestled with him in the middle of the frozen river. He wrestled all night, until
  dawn.</p>
  <p>The companion saw he couldn&#39;t prevail:</p>
  <blockquote>
    <p>«Let go, for it is already dawning.»</p>
  </blockquote>
  <blockquote>
    <p>«But I won&#39;t let go until you reveal to me the way to the White Island.»</p>
  </blockquote>
  <blockquote>
    <p>«Why do you want to return there? Because you promised the ruler, the most unworthy of men? Why do you so mourn for a word
    you gave him on a rainy day?»</p>
  </blockquote>
  <blockquote>
    <p>«I promised, but not to him. To Him who is above me and above him. I promised Him much — seven years for the one I stole from my brother.»</p>
  </blockquote>
  <blockquote>
    <p>«Let go!»</p>
  </blockquote>
  <p>— the companion was not going to yield. Night was already passing. They both were cold, their bodies intertwined in struggle, their breaths close. And Jan
  couldn&#39;t resist:</p>
  <blockquote>
    <p>«At least tell me your name.»</p>
  </blockquote>
  <p>The companion was surprised:</p>
  <blockquote>
    <p>«I have been with you for so long, and you do not know My name?»</p>
  </blockquote>
  <blockquote>
    <p>«Then… Then bless me on the path I will take.»</p>
  </blockquote>
  <blockquote>
    <p>«Are you sure of this? Do you truly want to? Can you go?»</p>
  </blockquote>
  <blockquote>
    <p>«I won&#39;t let go until you bless me!»</p>
  </blockquote>
  <p>Then the companion struck him in the leg with his spear, right on the thigh; a second time he struck the hard ice. And left. Jan fell, and the ice
  broke. Fish jumped from the river, and he drowned in it.</p>
</section>

 <section id="section1" ref={section1EnRef}>
  <p>
    Jan was ardent; he could not bear his father&#39;s affliction. His eyes burned when he saw Jovan leaning on a cypress stick.
  </p>
  <blockquote>
    <p className="group relative">
      — <span className="relative italic text-blue-500 hover:text-blue-700">Shall we accept good, and not accept adversity?
        <div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
          <p className="underline">Bible, book of Job, chapter 2, verse 10</p>
        </div>
      </span>
      — the father repeated each time.
    </p>

  </blockquote>
  <p className="group relative">
    «No!»
    — Everything inside Jan screamed. He resolved to go to the sea every day, <span className="relative italic text-blue-500 hover:text-blue-700">to catch a strange fish. If one washes with that fish, the scales fall from one’s eyes, and the blind see as they once did....
      <div className="absolute bottom-full left-[10%] -translate-x-[10%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
        <p className="underline">Zebrafish that restores vision.</p>
        <p className="underline">Bible, book of Tobit, chapter 6, verses 6-9.</p>
      </div>
    </span>
  </p>
  <p>
    Jovan moved his son&#39;s short-cropped hair with sorrow. He remembered how dark it was, streaked with white, just like Ivo’s. Aurelia had always said that someone radiant had touched her sons.
  </p>
  <blockquote>
    <p className="group relative">
      — My rebellious Jan, you don’t even know how to fish properly—what a strange thing you’ve taken upon yourself. You never loved the sea, and on the outside, you’re so calm that no one can guess what stirs within 
      you. But <span className="relative italic text-blue-500 hover:text-blue-700">inside, you’re restless, 
        <div className="absolute bottom-full left-[21%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
          <button onClick={togglePage} className="underline">Blessed Augustine «Confession»</button>
        </div>
      </span> as if marked by sorrow.
      What is there in store for you, son?
    </p>
  </blockquote>
  <p>
    Jan listened to no one. At dawn, as frost still clung to the ground, he took his father’s fishing rod, the dragnet, and set off for the sea. But on the way, right at the shoreline, he once again encountered the strange wanderer, the one who, years ago, had taught him to hear the song of all living things. The man was something of an eccentric. He wore a chiton, with a blue himation draped over one shoulder. Slung at his side was a bag like a traveler’s, [cite: 37]
    and he carried a sharp staff, like a spear, in his hand. Once again, he was drawing in the sand with it. [cite: 38]
  </p>
  <p>
    — I can&#39;t tell what you&#39;re drawing, — Jan said, pausing near him. The sun was in his eyes; the man always seemed to stand deliberately against the light. [cite: 38]
  </p>
  <p className="group relative">
    <span className="relative italic text-blue-500 hover:text-blue-700">
      — Fish, [cite: 38]
      <div className="absolute bottom-full left-[60%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
        <p className="underline">Article «Ichthys (fish)», Wikipedia [cite: 39]</p>
      </div>
    </span>
    since that’s what you’ve come for. [cite: 38]
  </p>
  <p>
    — I need a real one, and this one is merely drawn in the sand. — Then go and catch it. [cite: 39]
  </p>
  <p>
    — Be sure — I will catch it, and my father will see again! [cite: 40]
  </p>
  <p className="group relative">
    The man pulled out a fishing rod and a dragnet, but he didn’t know how to handle them properly, so he grabbed the fish with his bare hands. He tried to hold on to it, struggling amid the waves. He knew his mother wasn’t sleeping that morning; she was waiting for him near the cypresses. She waited with hope that he would somehow return with the healing fish—and that Jovan would once again see this, <span
      className="relative italic text-blue-500 hover:text-blue-700">
      world carved from voice and word. [cite: 41]
      <div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
        <Link href="/library/bible/gospel-of-john/#gospel-of-john-1-1&scroll=true"
          onClick={() => { setNewId('28') }}
          className="underline">Gospel of John, <br /> chapter 1, verses 1-5 [cite: 42]</Link>
      </div>
    </span>
  </p>
  <p className="group relative">
    So Jan went there every morning for many days, and the <span className="relative italic text-blue-500 hover:text-blue-700">
      strange fish kept running away from his hands. [cite: 47]
      <div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
        <p className="underline">Article «Ichthys (fish)», Wikipedia [cite: 48]</p>
      </div>
    </span>
  </p>
</section>

<section id="section2">
  {/* <p>
  <span className="page-number text-gray-500 text-sm italic mr-2">Pp 33-34</span>
  </p> */}
  <p>
    The dim light in St. Peter&#39;s kirche resembled matted glass, for his eyes dimmed and his legs somehow ached. In the packed
    hall, they listened to the organ.
  </p>
  <p>
    But it wasn&#39;t an organist playing it. It was the **Pied Piper!** The colorful Pied Piper from the town of Hamelin.
  </p>
  <p>
    He called those who listened to him, with him, and they went across the bridge, through the gate, out of the city. Along the enchanted path, to the cliff,
    there, where they drown in the river, where the river resembles the throat of a snake.
  </p>
  <p>
    They approached the edge and quieted. The current from within urged them. With wind — windy, with light — dim, with pain —
    crushed. The glass music shattered like a broken mirror, flying into someone&#39;s hand, someone&#39;s head, someone&#39;s eye.
  </p>
  <blockquote>
    <p>«When he tells them: “Jump from the cliff!” — they will fall down without hesitation.»</p>
  </blockquote>
  <p>
    Theophilus Zichter looked at the faces around. And saw only one missing — Jan&#39;s.
  </p>
  <p>
    But he heard him. The Piper! The Mockingbird… The music stole his will and he too followed him. Unless one pours wax into one&#39;s chest,
    otherwise, you cannot but go!
  </p>
  <p>
    Theophilus stood up and stepped out into the street to get some air. But the organ was clearly audible from outside too. Passersby stopped.
    Affected. And only he saw how small stones rolled down the ridge of the roof. Of that kirche where he had played for so many years
    in glory!
  </p>
  <p>
    He looked at these trembling walls, the wounded roof, but was not surprised. For he had noticed before that this happened when
    Jan took to the organ. And once during his playing, lightning struck three towers of the temple across the road from the concert
    hall. Theophilus Zichter felt such an intense fatigue, as if he had walked a hundred miles, worn out a hundred pairs of shoes, and a hundred feet.
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
            <Link   href='/library/avgustine-en/#confes-part1-ch2&scroll=true'
                    onClick={() => {setNewId('29')}}
                    >
                 <span className="text-blue-500 underline">And how shall I call upon my God — my God and my Lord?</span>
                <span className="text-black ml-2 dark:text-white">in the book &rdquo;Confession&rdquo; Blessed Augustine</span>
            </Link>

            <button onClick={() => setExpanded1(curr => !curr)}
                    className="">
                {expanded1 ? <ChevronUp/> : <ChevronDown/>}
            </button>
        </div>
        <p className={`text-gray-700 mt-5 ${expanded1 ? "" : "hidden"}`}>
        «St. Augustine (354–430) was a Christian theologian, Doctor of the Church, philosopher, rhetorician, and bishop. According to his own testimony, he wrote 232 books; in addition, 224 letters and more than 500 sermon texts have survived. The structure and style of these works reflect the restless nature of their author. It has been said of him that no great thinker embodied such extremes—that among the saints of the Church, he was the least holy and the most human. <br />
        «Confessions» is an autobiographical work in which Augustine, in the form of a prayer, recounts his life, marked by anxiety, a constant search for truth, and many errors, as the journey of a sinner who ultimately found the path to God. In Him, Augustine discovered everything he had long sought. He believed that &rdquo;
there are no saints without a past, no sinners without a future.&rdquo; In his youth, Augustine lost his faith in God, underwent a profound spiritual transformation, and only later returned to the Church, where he was ultimately recognized as a model of Christian life and ministry.»</p> 
    </li>
    </ul>
</div> }
</div>
         </div>  
         );
         }