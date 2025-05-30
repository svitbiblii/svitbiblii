"use client";
 
 import { Link } from "@/i18n/routing";
 import { useTranslations } from "next-intl";
 import { useState, useEffect, useRef } from "react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function AvgustineEnPage() {
    const t = useTranslations("BookContents");

    const confesPart1Ch2Ref = useRef<HTMLHeadingElement>(null);
     const [showContent, setShowContent] = useState(false);
     const [expanded, setExpanded] = useState(true);
     const [storedBook, setStoredBook] = useState<string[]>([])
     const [newId, setNewId] = useState('');
     const [isHighlighted, setIsHighlighted] = useState(false);
 
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

         const url = new URL(window.location.href);
        const hash = url.hash;
        const shouldScrollToSection = hash.includes('#confes-part1-ch2') && hash.includes('scroll=true');

  if (shouldScrollToSection && confesPart1Ch2Ref.current) {
    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.scrollTop = 0;
    }

    setIsHighlighted(true); 

    setTimeout(() => {
      setIsHighlighted(false); 
    }, 4000);

    setTimeout(() => {
      confesPart1Ch2Ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 1500);
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
                                         <Link href='/library/avgustine-en/#section1' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Chapter І
                                         </Link>
                                     </li>
                                     <li>
                                         <Link href='/library/avgustine-en/#section2' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Chapter ІІ
                                         </Link>
                                     </li> 
                                     <li>
                                         <Link href='/library/avgustine-en/#section3' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Chapter ІІІ
                                         </Link>
                                     </li>
                                 </ul> :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
         
         <div className="relative h-full w-full px-4 pt-2 block">
       
                <div  className="w-full">
 
                <h2 className="pt-0">«Confession» Blessed Augustine </h2>

                <section id="section1">
<h3>Chapter I</h3>
<h3>He proclaims the greatness of God, whom he desires to seek and invoke, being awakened by him.</h3>
<p>
  Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite. And Thee would man praise; man, but a particle of Thy creation; man, that bears about him his mortality, the witness of his sin, the witness that Thou resistest the proud: yet would man praise Thee; he, but a particle of Thy creation. Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee. Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee? and, again, to know Thee or to call on Thee? for who can call on Thee, not knowing Thee? for he that knoweth Thee not, may call on Thee as other than Thou art. Or, is it rather, that we call on Thee that we may know Thee? but how shall they call on Him in whom they have not believed? or how shall they believe without a preacher? and they that seek the Lord shall praise Him: for they that seek shall find Him, and they that find shall praise Him. I will seek Thee, Lord, by calling on Thee; and will call on Thee, believing in Thee; for to us hast Thou been preached. My faith, Lord, shall call on Thee, which Thou hast given me, wherewith Thou hast inspired me, through the Incarnation of Thy Son, through the ministry of the Preacher.
</p>
  {/* ======================================================================== */}

<p>
  Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite. And Thee would man praise; man, but a particle of Thy creation; man, that bears about him his mortality, the witness of his sin, the witness that Thou resistest the proud: yet would man praise Thee; he, but a particle of Thy creation. Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee. Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee? and, again, to know Thee or to call on Thee? for who can call on Thee, not knowing Thee? for he that knoweth Thee not, may call on Thee as other than Thou art. Or, is it rather, that we call on Thee that we may know Thee? but how shall they call on Him in whom they have not believed? or how shall they believe without a preacher? and they that seek the Lord shall praise Him: for they that seek shall find Him, and they that find shall praise Him. I will seek Thee, Lord, by calling on Thee; and will call on Thee, believing in Thee; for to us hast Thou been preached. My faith, Lord, shall call on Thee, which Thou hast given me, wherewith Thou hast inspired me, through the Incarnation of Thy Son, through the ministry of the Preacher.
</p>
 <p>
  Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite. And Thee would man praise; man, but a particle of Thy creation; man, that bears about him his mortality, the witness of his sin, the witness that Thou resistest the proud: yet would man praise Thee; he, but a particle of Thy creation. Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee. Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee? and, again, to know Thee or to call on Thee? for who can call on Thee, not knowing Thee? for he that knoweth Thee not, may call on Thee as other than Thou art. Or, is it rather, that we call on Thee that we may know Thee? but how shall they call on Him in whom they have not believed? or how shall they believe without a preacher? and they that seek the Lord shall praise Him: for they that seek shall find Him, and they that find shall praise Him. I will seek Thee, Lord, by calling on Thee; and will call on Thee, believing in Thee; for to us hast Thou been preached. My faith, Lord, shall call on Thee, which Thou hast given me, wherewith Thou hast inspired me, through the Incarnation of Thy Son, through the ministry of the Preacher.
</p>
<p>
  Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite. And Thee would man praise; man, but a particle of Thy creation; man, that bears about him his mortality, the witness of his sin, the witness that Thou resistest the proud: yet would man praise Thee; he, but a particle of Thy creation. Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee. Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee? and, again, to know Thee or to call on Thee? for who can call on Thee, not knowing Thee? for he that knoweth Thee not, may call on Thee as other than Thou art. Or, is it rather, that we call on Thee that we may know Thee? but how shall they call on Him in whom they have not believed? or how shall they believe without a preacher? and they that seek the Lord shall praise Him: for they that seek shall find Him, and they that find shall praise Him. I will seek Thee, Lord, by calling on Thee; and will call on Thee, believing in Thee; for to us hast Thou been preached. My faith, Lord, shall call on Thee, which Thou hast given me, wherewith Thou hast inspired me, through the Incarnation of Thy Son, through the ministry of the Preacher.
</p>
</section>

          <section id="section2">
            <h3>Chapter ІІ</h3>
          <h3 id="confes-part1-ch2" ref={confesPart1Ch2Ref}>That the God Whom We Invoke is in Us, and We in Him.</h3>
          <div className="group relative">
          <span className={isHighlighted ? 'bg-blue-300 ': ''}>
           And how shall I call upon my God — my God and my 
           Lord?</span> For when I call on Him I ask Him to come into me. 
           And what place is there in me into which my God can come — into which God can come, 
           even He who made heaven and earth? Is there anything in me, O Lord my God, that can contain You? 
           Do indeed the very heaven and the earth, which You have made, and in which You have made me, contain You? 
           Or, as nothing could exist without You, does whatever exists contain You? Why, then, do I ask You to come 
           into me, since I indeed exist, and could not exist if You were not in me? Because I am not yet in hell, 
           though You are even there; <span className="relative inline-block italic text-blue-500 hover:text-blue-700">
           «for if I go down into hell You are there».
                         <div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
       <Link href="/library/bible/psalms-en/#psalomEn138&scroll=true" 
        onClick={() => {setNewId('30')}} 
        className="underline">The Book of Psalms, Psalm 138</Link>
      </div>
           </span>
          </div>
          <div className="group relative">«I could not therefore exist, 
            could not exist at all, O my God, unless You were in me. 
            Or should I not rather say, that I could not exist unless I were in 
            You <span
            className="relative inline-block italic text-blue-500 hover:text-blue-700">
                «from whom are all things, 
            by whom are all things, in whom are all things»?
                                         <div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
       <Link href="/library/bible/romans-en#romansEn-11-32&scroll=true"
        onClick={() => {setNewId('31')}} 
        className="underline">Epistle of Paul to the Romans, Ch. 11:32–36</Link>
      </div>
            </span>
            </div>
            <p>«Even so, Lord; even so. Where do I call You to, since You are in me, or whence can 
                You come into me? For where outside heaven and earth can I go that from thence my God 
                may come into me who has said, I fill heaven and earth?». </p>
</section>

<section id="section3">
    <h3>Chapter ІІІ</h3>
  <h3>Everywhere God wholly filleth all things, but neither heaven nor Earth containeth him.</h3>
  <p>
Do the heaven and earth then contain Thee, since Thou fillest them? or dost Thou fill them and yet overflow, since 
they do not contain Thee? And whither, when the heaven and the earth are filled, pourest Thou forth the remainder of Thyself? 
or hast Thou no need that aught contain Thee, who containest all things, since what Thou fillest Thou fillest by containing it? 
for the vessels which Thou fillest uphold Thee not, since, though they were broken, Thou wert not poured out. And when Thou art 
poured out on us, Thou art not cast down, but Thou upliftest us; Thou art not dissipated, but Thou gatherest us. But Thou who 
fillest all things, fillest Thou them with Thy whole self? or, since all things cannot contain Thee wholly, do they contain 
part of Thee? and all at once the same part? or each its own part, the greater more, the smaller less? And is, then, one part 
of Thee greater, another less? or, art Thou wholly every where, while nothing contains Thee wholly?
  </p>
</section>

         </div>

        </div>
         </div>  
         );
         }