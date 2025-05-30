"use client";
 
 import { Link } from "@/i18n/routing";
 import { useTranslations } from "next-intl";
 import { useState, useEffect, useRef } from "react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function GospelOfJohnEnPage() {
    const t = useTranslations("BookContents");

    const gospelOfJohnEn1Ref = useRef<HTMLElement>(null);
     const [showContent, setShowContent] = useState(false);
     const [expanded, setExpanded] = useState(true);
     const [isHighlighted, setIsHighlighted] = useState(false);

useEffect(() => {
  const url = new URL(window.location.href);
  const hash = url.hash;
  const shouldScrollToSection = hash.includes('#gospel-of-johnEn-1-1') && hash.includes('scroll=true');

  if (shouldScrollToSection) {
    setIsHighlighted(true); 
    // setTimeout(() => {
    //   setIsHighlighted(false);
    // }, 4000);

          if (gospelOfJohnEn1Ref.current) {
        gospelOfJohnEn1Ref.current.scrollIntoView({
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
    <Link href='/library/bible/gospel-of-john/#section1' 
        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
        Chapter 1
    </Link>
</li>

</ul>  :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
         
                     <div className="relative h-full w-full px-4 pt-2 block">
                        
  <div className="w-full">
  <h2 className="pt-0">Gospel of John (trans. New King James Version)</h2>
    <section id="gospel-of-johnEn-1-1" ref={gospelOfJohnEn1Ref}
    className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 px-2 border border-gray-300 rounded-md">
      <h2>Chapter 1</h2>
<p>1. <span className={isHighlighted ? 'bg-blue-300 ': ''}>In the beginning was the Word, and the Word was with God, and the Word was God.</span></p>
<p>2. <span className={isHighlighted ? 'bg-blue-300 ': ''}>He was in the beginning with God.</span></p>
<p>3. <span className={isHighlighted ? 'bg-blue-300 ': ''}>All things were made through Him, and without Him nothing was made that was made.</span></p>
<p>4. <span className={isHighlighted ? 'bg-blue-300 ': ''}>In Him was life, and the life was the light of men.</span></p>
<p>5. <span className={isHighlighted ? 'bg-blue-300 ': ''}>And the light shines in the darkness, and the darkness did not comprehend it.</span></p>
<p>6. There was a man sent from God, whose name was John.</p>
<p>7. This man came for a witness, to bear witness of the Light, that all through him might believe.</p>
<p>8. He was not that Light, but was sent to bear witness of that Light.</p>
<p>9. That was the true Light which gives light to every man coming into the world.</p>
<p>10. He was in the world, and the world was made through Him, and the world did not know Him.</p>
<p>11. He came to His own, and His own did not receive Him.</p>
<p>12. But as many as received Him, to them He gave the right to become children of God, to those who believe in His name:</p>
<p>13. who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.</p>
<p>14. And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.</p>
<p>15. John bore witness of Him and cried out, saying, “This was He of whom I said, ‘He who comes after me is preferred before me, for He was before me.’ ”</p>
<p>16. And of His fullness we have all received, and grace for grace.</p>
<p>17. For the law was given through Moses, but grace and truth came through Jesus Christ.</p>
<p>18. No one has seen God at any time. The only begotten Son, who is in the bosom of the Father, He has declared Him.</p>
<p>19. Now this is the testimony of John, when the Jews sent priests and Levites from Jerusalem to ask him, “Who are you?”</p>
<p>20. He confessed, and did not deny, but confessed, “I am not the Christ.”</p>
<p>21. And they asked him, “What then? Are you Elijah?” He said, “I am not.” “Are you the Prophet?” And he answered, “No.”</p>
<p>22. Then they said to him, “Who are you, that we may give an answer to those who sent us? What do you say about yourself?”</p>
<p>23. He said: “I am ‘The voice of one crying in the wilderness: “Make straight the way of the Lord,”’ as the prophet Isaiah said.”</p>
<p>24. Now those who were sent were from the Pharisees.</p>
<p>25. And they asked him, saying, “Why then do you baptize if you are not the Christ, nor Elijah, nor the Prophet?”</p>
<p>26. John answered them, saying, “I baptize with water, but there stands One among you whom you do not know.</p>
<p>27. It is He who, coming after me, is preferred before me, whose sandal strap I am not worthy to loose.”</p>
<p>28. These things were done in Bethabara beyond the Jordan, where John was baptizing.</p>
<p>29. The next day John saw Jesus coming toward him, and said, “Behold! The Lamb of God who takes away the sin of the world!</p>
<p>30. This is He of whom I said, ‘After me comes a Man who is preferred before me, for He was before me.’”</p>
<p>31. I did not know Him; but that He should be revealed to Israel, therefore I came baptizing with water.”</p>
<p>32. And John bore witness, saying, “I saw the Spirit descending from heaven like a dove, and He remained upon Him.</p>
<p>33. I did not know Him, but He who sent me to baptize with water said to me, ‘Upon whom you see the Spirit descending, and remaining on Him, this is He who baptizes with the Holy Spirit.’</p>
<p>34. And I have seen and testified that this is the Son of God.”</p>
<p>35. Again, the next day, John stood with two of his disciples.</p>
<p>36. And looking at Jesus as He walked, he said, “Behold the Lamb of God!”</p>
<p>37. The two disciples heard him speak, and they followed Jesus.</p>
<p>38. Then Jesus turned, and seeing them following, said to them, “What do you seek?” They said to Him, “Rabbi” (which is to say, when translated, Teacher), “where are You staying?”</p>
<p>39. He said to them, “Come and see.” They came and saw where He was staying, and remained with Him that day (now it was about the tenth hour).</p>
<p>40. One of the two who heard John speak, and followed Him, was Andrew, Simon Peter’s brother.</p>
<p>41. He first found his own brother Simon, and said to him, “We have found the Messiah” (which is translated, the Christ).</p>
<p>42. And he brought him to Jesus. Now when Jesus looked at him, He said, “You are Simon the son of Jonah. You shall be called Cephas” (which is translated, A Stone).</p>
<p>43. The following day Jesus wanted to go to Galilee, and He found Philip and said to him, “Follow Me.”</p>
<p>44. Now Philip was from Bethsaida, the city of Andrew and Peter.</p>
<p>45. Philip found Nathanael and said to him, “We have found Him of whom Moses in the law, and also the prophets, wrote—Jesus of Nazareth, the son of Joseph.”</p>
<p>46. And Nathanael said to him, “Can anything good come out of Nazareth?” Philip said to him, “Come and see.”</p>
<p>47. Jesus saw Nathanael coming toward Him, and said of him, “Behold, an Israelite indeed, in whom is no deceit!”</p>
<p>48. Nathanael said to Him, “How do You know me?” Jesus answered and said to him, “Before Philip called you, when you were under the fig tree, I saw you.”</p>
<p>49. Nathanael answered and said to Him, “Rabbi, You are the Son of God! You are the King of Israel!”</p>
<p>50. Jesus answered and said to him, “Because I said to you, ‘I saw you under the fig tree,’ do you believe? You will see greater things than these.”</p>
<p>51. And He said to him, “Most assuredly, I say to you, hereafter you shall see heaven open, and the angels of God ascending and descending upon the Son of Man.”</p>

    </section>

  </div>
</div>
         </div>  
         );
         }