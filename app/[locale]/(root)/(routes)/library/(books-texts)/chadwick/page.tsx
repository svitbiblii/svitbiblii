"use client";
 
 import { Link } from "@/i18n/routing";
 import { useState, useEffect } from "react";
 import { ChevronDown, ChevronUp, CircleX } from "lucide-react";
 import { ChevronFirst, ChevronLast } from "lucide-react";
 import { About } from "@/components/about";
 import History from "@/components/history";
 
 export default function ChadwickPage() {
     const [showPage, setShowPage] = useState(false);
     const [showContent, setShowContent] = useState(false);
     const [expanded, setExpanded] = useState(true);
     const [expanded1, setExpanded1] = useState(false);
     const [expanded2, setExpanded2] = useState(false);
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
        <div className="flex mt-16">
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
                                                 Navigator
                                         </button>
                                         <button className={`w-1/2 ${showContent ? "border-b-2 border-blue-500 text-blue-500" : ""}`} 
                                             onClick={() => {setShowContent(true)}}>
                                                 Contents
                                         </button>
                                     </div>
             
                                 {showContent ? 
                                 <ul className="list-none bg-secondary pl-0">
                                     <li>
                                         <Link href='/library/chadwick/#section1' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                             Chapter 1
                                         </Link>
                                     </li>
                                     <li>
                                         <Link href='/library/chadwick/#section2' 
                                             className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                                 Chapter 2
                                         </Link>
                                     </li>  
                                 </ul> :
                                 <History />}    
                                 </div>
                             </div>   
                     </div> 
         
         
         <div className={`relative h-full w-full px-4 pt-2  ${showPage ? "md:flex md:h-screen block" : "block"} `}>
       
                <div className={`  ${showPage ? "px-3 mb-3 md:mb-0 border-2 border-blue-200 rounded-lg md:border-none md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>
 
          <h2 className="pt-0">The Book of Exodus by G. A. Chadwick</h2>
 
         <p id="section1">Much is now denied or doubted, within the Church itself, concerning the Book of Exodus, which was formerly accepted with confidence by all Christians.
 
 But <button className="px-2 font-medium" onClick={togglePage}>one thing</button>  can neither be doubted nor denied. Jesus Christ did certainly treat this
 book, taking it as He found it, as possessed of spiritual authority, a sacred scripture. He taught His disciples to regard it thus, and they did so.
 
 Therefore, however widely His followers may differ about its date and origin, they must admit the right of a Christian teacher to treat this book, taking it as he finds it, as a sacred scripture and invested with spiritual authority. It is the legitimate subject of exposition in the Church.
 
 Such work this volume strives, however <span id="imperfectly" className="text-blue-500">imperfectly</span>, to perform. Its object is to edify in the first place, and also, but in the second place, to inform. Nor has the author consciously shrunk from saying what seemed to him proper to be said because the utterance would be unwelcome, either to the latest critical theory, or to the last sensational gospel of an hour.
 
 [vi]
 
 But since controversy has not been sought, although exposition has not been suppressed when it carried weapons, by far the greater part of the volume appeals to all who accept their Bible as, in any true sense, a gift from God.
 
 No task is more difficult than to exhibit the Old Testament in the light of the New, discovering the permanent in the evanescent, and the spiritual in the form and type which it inhabited and illuminated. This book is at least the result of a firm belief that such a connection between the two Testaments does exist, and of a patient endeavour to receive the edification offered by each Scripture, rather than to force into it, and then extort from it, what the expositor desires to find. Nor has it been supposed that by allowing the imagination to assume, in sacred things, that rank as a guide which reason holds in all other practical affairs, any honour would be done to Him Who is called the Spirit of knowledge and wisdom, but not of fancy and quaint conceits.
 
 If such an attempt does, in any degree, prove successful and bear fruit, this fact will be of the nature of a <span id="scientific" className="text-green-500">scientific</span> demonstration.
 If this ancient Book of Exodus yields <button className="px-2 font-medium" onClick={togglePage}>solid results</button> to a sober devotional exposition in the nineteenth Christian century, if it is not an idle fancy that its teaching harmonises with the principles and theology of the New Testament, and even demands the New Testament as the true commentary upon the Old, what follows? How comes it that the oak is potentially in the acorn, and the living creature in the egg? No germ is a manufactured article: it is a part of the system of the universe.</p>
 <p id="section2"> Many books of the Old Testament begin with the conjunction And. This fact, it has been often pointed out, is a silent indication of truth, that each author was not recording certain isolated incidents, but parts of one great drama, events which joined hands with the past and future, looking before and after.
 
 Thus the Book of the Kings took up the tale from Samuel, Samuel from Judges, and Judges from Joshua, and all carried the sacred movement forward towards a goal as yet unreached. Indeed, it was impossible, remembering the first promise that the seed of the woman should bruise the head of the serpent, and the later assurance that in the seed of Abraham should be the universal blessing, for a faithful Jew to forget that all the history of his race was the evolution of some grand hope, a pilgrimage towards some goal unseen. Bearing in mind that there is now revealed to us a world-wide tendency toward the supreme consummation, the bringing all things under the headship of Christ, it is not to be denied that this hope of the[2] ancient Jew is given to all mankind. Each new stage in universal history may be said to open with this same conjunction. It links the history of England with that of Julius Cæsar and of the Red Indian; nor is the chain composed of accidents: it is forged by the hand of the God of providence. Thus, in the conjunction which binds these Old Testament narratives together, is found the germ of that instinctive and elevating phrase, the Philosophy of History. But there is nowhere in Scripture the notion which too often degrades and stiffens that Philosophy—the notion that history is urged forward by blind forces, amid which the individual man is too puny to assert himself. Without a Moses the Exodus is inconceivable, and God always achieves His purpose through the providential man.
 The Books of the Pentateuch are held together in a yet stronger unity than the rest, being sections of one and the same narrative, and having been accredited with a common authorship from the earliest mention of them. Accordingly, the Book of Exodus not only begins with this conjunction (which assumes the previous narrative), but also rehearses the descent into Egypt. “And these are the names of the sons of Israel which came into Egypt,”—names blotted with many a crime, rarely suggesting any lovable or great association, yet the names of men with a marvellous heritage, as being “the sons of Israel,” the Prince who prevailed with God. Moreover they are consecrated: their father’s dying words had conveyed to every one of them some expectation, some mysterious import which the future should disclose. In the issue would be revealed the awful influence of the past upon[3] the future, of the fathers upon the children even beyond the third and fourth generation—an influence which is nearer to destiny, in its stern, subtle and far-reaching strength, than any other recognised by religion. Destiny, however, it is not, or how should the name of Dan have faded out from the final list of “every tribe of the children of Israel” in the Apocalypse (Rev. vii. 5–8), where Manasseh is reckoned separately from Joseph to complete the twelve?
 
 We read that with the twelve came their posterity, seventy souls in direct descent from Jacob; but in this number he is himself included, according to that well-known Orientalism which Milton strove to force upon our language in the phrase—
 
 “The fairest of her daughters Eve.”
 Joseph is also reckoned, although he “was in Egypt already.” Now, it must be observed that of these seventy, sixty-eight were males, and therefore the people of the Exodus must not be reckoned to have sprung in the interval from seventy, but (remembering polygamy) from more than twice that number, even if we refuse to make any account of the household which is mentioned as coming with every man. These households were probably smaller in each case than that of Abraham, and the famine in its early stages may have reduced the number of retainers; yet they account for much of what is pronounced incredible in the rapid expansion of the clan into a nation.[1] But when all[4] allowance has been made, the increase continues to be, such as the narrator clearly regards it, abnormal, well-nigh preternatural, a fitting type of the expansion, amid fiercer persecutions, of the later Church of God, the true circumcision, who also sprang from the spiritual parentage of another Seventy and another Twelve.
 
 “And Joseph died, and all his brethren, and all that generation.” Thus the connection with Canaan became a mere tradition, and the powerful courtier who had nursed their interests disappeared. When they remembered him, in the bitter time which lay before them, it was only to reflect that all mortal help must perish. It is thus in the spiritual world also. Paul reminds the Philippians that they can obey in his absence and not in his presence only, working out their own salvation, as no apostle can work it out on their behalf. And the reason is that the one real support is ever present. Work out your own salvation, for it is God (not any teacher) Who worketh in you. The Hebrew race was to learn its need of Him, and in Him to recover its freedom. Moreover, the influences which mould all men’s characters, their surroundings and mental atmosphere, were completely changed. These wanderers for pasture were now in the presence of a compact and impressive social system, vast cities, gorgeous temples, an imposing ritual. They were infected as well as educated there, and we find the men of the Exodus not only murmuring for Egyptian comforts, but demanding visible gods to go before them.
 
 Yet, with all its drawbacks, the change was a necessary part of their development. They should return from Egypt relying upon no courtly patron, no mortal might or wisdom, aware of a name of God more profound[5] than was spoken in the covenant of their fathers, with their narrow family interests and rivalries and their family traditions expanded into national hopes, national aspirations, a national religion.
 
 Perhaps there is another reason why Scripture has reminded us of the vigorous and healthy stock whence came the race that multiplied exceedingly. For no book attaches more weight to the truth, so miserably perverted that it is discredited by multitudes, but amply vindicated by modern science, that good breeding, in the strictest sense of the word, is a powerful factor in the lives of men and nations. To be well born does not of necessity require aristocratic parentage, nor does such parentage involve it: but it implies a virtuous, temperate and pious stock. In extreme cases the doctrine of race is palpable; for who can doubt that the sins of dissolute parents are visited upon their puny and short-lived children, and that the posterity of the just inherit not only honour and a welcome in the world, “an open door,” but also immunity from many a physical blemish and many a perilous craving? If the Hebrew race, after eighteen centuries of calamity, retains an unrivalled vigour and tenacity, be it remembered how its iron sinew has been twisted, from what a sire it sprang, through what ages of more than “natural selection” the dross was throughly purged out, and (as Isaiah loves to reiterate) a chosen remnant left. Already, in Egypt, in the vigorous multiplication of the race, was visible the germ of that amazing vitality which makes it, even in its overthrow, so powerful an element in the best modern thought and action.
 
 It is a well-known saying of Goethe that the quality for which God chose Israel was probably toughness.[6] Perhaps the saying would better be inverted: it was among the most remarkable endowments, unto which Israel was called, and called by virtue of qualities in which Goethe himself was remarkably deficient.
 
 Now, this principle is in full operation still, and ought to be solemnly pondered by the young. Self-indulgence, the sowing of wild oats, the seeing of life while one is young, the taking one’s fling before one settles down, the having one’s day (like “every dog,” for it is to be observed that no person says, “every Christian”), these things seem natural enough. And their unsuspected issues in the next generation, dire and subtle and far-reaching, these also are more natural still, being the operation of the laws of God.
 
 On the other hand, there is no youth living in obedience alike to the higher and humbler laws of our complex nature, in purity and gentleness and healthful occupation, who may not contribute to the stock of happiness in other lives beyond his own, to the future well-being of his native land, and to the day when the sadly polluted stream of human existence shall again flow clear and glad, a pure river of water of life.
 
 GOD IN HISTORY.
 i. 7.
 With the seventh verse, the new narrative, the course of events treated in the main body of this book, begins.
 
 And we are at once conscious of this vital difference between Exodus and Genesis,—that we have passed from the story of men and families to the history of a nation. In the first book the Canaanites and Egyptians concern us only as they affect Abraham or Joseph. In[7] the second book, even Moses himself concerns us only for the sake of Israel. He is in some respects a more imposing and august character than any who preceded him; but what we are told is no longer the story of a soul, nor are we pointed so much to the development of his spiritual life as to the work he did, the tyrant overthrown, the nation moulded, the law and the ritual imposed on it.
 
 But now the Hebrew nation was to learn that He could plague the gods of Egypt in their stronghold, that His way was in the sea, that Horeb in Arabia was the Mount of God, that He could lead them like a horse through the wilderness.
 
 When Jacob in Peniel wrestles with God and prevails, he wins for himself a new name, expressive of the higher moral elevation which he has attained. But when Moses meets God in the bush, it is to receive a commission for the public benefit; and there is no new name for Moses, but a fresh revelation of God for the nation to learn. And in all their later history we feel that the national life which it unfolds was nourished and sustained by these glorious early experiences, the most unique as well as the most inspiriting on record.
 
 Here, then, a question of great moment is suggested. Beyond the fact that Abraham was the father of the Jewish race, can we discover any closer connection between the lives of the patriarchs and the history of Israel? Is there a truly spiritual coherence between them, or merely a genealogical sequence? For if the Bible can make good its claim to be vitalised throughout by the eternal Spirit of God, and leading forward steadily to His final revelation in Christ, then its parts will be symmetrical, proportionate and well designed.[8] If it be a universal book, there must be a better reason for the space devoted to preliminary and half secular stories, which is a greater bulk than the whole of the New Testament, than that these histories chance to belong to the nation whence Christ came. If no such reason can be found, the failure may not perhaps outweigh the great evidences of the faith, but it will score for something on the side of infidelity. But if upon examination it becomes plain that all has its part in one great movement, and that none can be omitted without marring the design, and if moreover this design has become visible only since the fulness of the time is come, the discovery will go far to establish the claim of Scripture to reveal throughout a purpose truly divine, dealing with man for ages, and consummated in the gift of Christ.
 
 Now, it is to St. Paul that we turn for light upon the connection between the Old Testament and the New. And he distinctly lays down two great principles. The first is that the Old Testament is meant to educate men for the New; and especially that the sense of failure, impressed upon men’s consciences by the stern demands of the Law, was necessary to make them accept the Gospel.
 
 The law was our schoolmaster to bring us to Christ: it entered that sin might abound. And it is worth notice that this effect was actually wrought, not only upon the gross transgressor by the menace of its broken precepts, but even more perhaps upon the high-minded and pure, by the creation in their breasts of an ideal, inaccessible in its loftiness. He who says, All these things have I kept from my youth up, is the same who feels the torturing misgiving, What good thing must I do to attain life?... What lack I yet?[9] He who was blameless as touching the righteousness of the law, feels that such superficial innocence is worthless, that the law is spiritual and he is carnal, sold under sin.
 
 Now, this principle need by no means be restricted to the Mosaic institutions. If this were the object of the law, it would probably explain much more. And when we return to the Old Testament with this clue, we find every condition in life examined, every social and political experiment exhausted, a series of demonstrations made with scientific precision, to refute the arch-heresy which underlies all others—that in favourable circumstances man might save himself, that for the evil of our lives our evil surroundings are more to be blamed than we.
 
 Innocence in prosperous circumstances, unwarped by evil habit, untainted by <span id="corruption" className="text-red-500">corruption</span> in the blood, uncompelled by harsh surroundings, simple innocence had its day in Paradise, a brief day with a shameful close. God made man upright, but he sought out many inventions, until the flood swept away the descendants of him who was made after the image of God.
 
 Next we have a chosen family, called out from all the perilous associations of its home beyond the river, to begin a new career in a new land, in special covenant with the Most High, and with every endowment for the present and every hope for the future which could help to retain its loyalty. Yet the third generation reveals the thirst of Esau for his brother’s blood, the treachery of Jacob, and the distraction and guilt of his fierce and sensual family. It is when individual and family life have thus proved ineffectual amid the happiest circumstances, that the tribe and the nation essay the task. Led up from the furnace of affliction,[10] hardened and tempered in the stern free life of the desert, impressed by every variety of fortune, by slavery and escape, by the pursuit of an irresistible foe and by a rescue visibly divine, awed finally by the sublime revelations of Sinai, the nation is ready for the covenant (which is also a challenge)—The man that doeth these things shall live by them: if thou diligently hearken unto the voice of the Lord thy God ... He shall set thee on high above all nations.
 
 Such is the connection between this narrative and what went before. And the continuation of the same experiment, and the same failure, can be traced through all the subsequent history. Whether in so loose an organisation that every man does what is right in his own eyes, or under the sceptre of a hero or a sage,—whether so hard pressed that self-preservation ought to have driven them to their God, or so marvellously delivered that gratitude should have brought them to their knees,—whether engulfed a second time in a more hopeless captivity, or restored and ruled by a hierarchy whose authority is entirely spiritual,—in every variety of circumstances the same melancholy process repeats itself; and lawlessness, luxury, idolatry and self-righteousness combine to stop every mouth, to make every man guilty before God, to prove that a greater salvation is still needed, and thus to pave the way for the Messiah.
 The second great principle of St. Paul is that faith in a divine help, in pardon, blessing and support, was the true spirit of the Old Testament as well as of the New. The challenge of the law was meant to produce self-despair, only that men might trust in God. Appeal was made especially to the cases of Abraham and David, the founder of the race and of the dynasty, clearly[11] because the justification without works of the patriarch and of the king were precedents to decide the general question (Rom. iv. 1–8). Now, this is pre-eminently the distinction between Jewish history and all others, that in it God is everything and man is nothing. Every sceptical treatment of the story makes Moses to be the deliverer from Egypt, and shows us the Jewish nation gradually finding out God. But the nation itself believed nothing of the kind. It confessed itself to have been from the beginning vagrant and rebellious and unthankful: God had always found out Israel, never Israel God. The history is an expansion of the parable of the good shepherd. And this perfect harmony of a long record with itself and with abstract principles is both instructive and reassuring.
 
 As the history of Israel opens before us, a third principle claims attention—one which the apostle quietly assumes, but which is forced on our consideration by the unhappy state of religious thought in these degenerate days.
 
 “They are not to be heard,” says the Seventh Article rightly, “which feign that the old fathers did look only for transitory promises.” But certainly they also would be unworthy of a hearing who would feign that the early Scriptures do not give a vast, a preponderating weight, to the concerns of our life on earth. Only very slowly, and as the result of long training, does the future begin to reveal its supremacy over the present. It would startle many a devout reader out of his propriety to discover the small proportion of Old Testament scriptures in which eternity and its prospects are discussed, to reckon the passages, habitually applied to spiritual thraldom and emancipation, which were spoken at first of earthly tyranny and earthly deliverance,[12] and to observe, even in the pious aspirations of the Psalms, how much of the gratitude and joy of the righteous comes from the sense that he is made wiser than the ancient, and need not fear though a host rose up against him, and can break a bow of steel, and has a table prepared for him, and an overflowing cup. Especially is this true of the historical books. God is here seen ruling states, judging in the earth, remembering Israel in bondage, and setting him free, providing supernatural food and water, guiding him by the fiery cloud. There is not a word about regeneration, conversion, hell, or heaven. And yet there is a profound sense of God. He is real, active, the most potent factor in the daily lives of men. Now, this may teach us a lesson, highly important to us all, and especially to those who must teach others. The difference between spirituality and secularity is not the difference between the future life and the present, but between a life that is aware of God and a godless one. Perhaps, when we find our gospel a matter of indifference and weariness to men who are absorbed in the bitter monotonous and dreary struggle for existence, we ourselves are most to blame. Perhaps, if Moses had approached the Hebrew drudges as we approach men equally weary and oppressed, they would not have bowed their heads and worshipped. And perhaps we should have better success, if we took care to speak of God in this world, making life a noble struggle, charging with new significance the dull and seemingly degraded lot of all who remember Him, such a God as Jesus revealed when He cleansed the leper, and gave sight to the blind, using one and the same word for the “healing” of diseases and the “saving” of souls, and connecting faith equally with both. Exodus will have little to teach us, unless[13] we believe in that God who knoweth that we have need of food and clothing. And the higher spiritual truths which it expresses will only be found there in dubious and questionable allegory, unless we firmly grasp the great truth, that God is not the Saviour of souls, or of bodies, but of living men in their entirety, and treats their higher and lower wants upon much the same principle, because He is the same God, dealing with the same men, through both.
 Moreover, He treats us as the men of other ages. Instead of dealing with Moses upon exceptional and strange lines, He made known His ways unto Moses, His characteristic and habitual ways. And it is on this account that whatsoever things were written aforetime are true admonition for us also, being not violent interruptions but impressive revelations of the steady silent methods of the judgment and the grace of God.</p>
                 
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
                     <Link   href='/library/john/#conjunction'  
                             onClick={() => {setNewId('3')}}
                             className="text-blue-500">conjunction
                         <span className="text-black ml-2 dark:text-white">in the book The Epistles by St. John</span>
                     </Link>
 
                     <button onClick={() => setExpanded1(curr => !curr)}
                             className="">
                         {expanded1 ? <ChevronUp/> : <ChevronDown/>}
                     </button>
                 </div>
                 <p className={`text-gray-700 mt-5 ${expanded1 ? "" : "hidden"}`}>
                     The Epistles of St. John by William Alexander is a theological exposition written in the late 19th century. This work is part of a series that aims to provide in-depth commentary and analysis of Biblical texts, specifically focusing on the epistles attributed to St. John. It explores the historical context, theological significance, and practical implications of these letters, which are crucial for understanding early Christian doctrine and ethics. The opening of the text presents a preface by the author, explaining his long-standing engagement with the Epistles of St. John. He outlines his approach, which combines historical background with exegetical analysis, framing the epistles within the broader context of St. John&#39;s life and the challenges faced by the early Church in Asia Minor, particularly Ephesus. The author prepares the reader for a detailed examination of the epistles, highlighting the importance of understanding the unique spiritual and theological insights that St. John offers, especially against the backdrop of contemporary heresies such as Gnosticism. The opening sets the stage for a scholarly yet accessible exploration intended for both serious theological study and general readers interested in the New Testament.</p> 
             </li>

             <li className="mb-3 block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                 <div className="flex justify-between items-start">
                     <Link   href='/library/bible/bible-en/#beginning'  
                             onClick={() => {setNewId('5')}}
                             className="text-blue-500">beginning
                         <span className="text-black ml-2 dark:text-white">in the book World English Bible by Michael Paul Johnson with volunteers</span>
                     </Link>
 
                     <button onClick={() => setExpanded2(curr => !curr)}
                             className="">
                         {expanded2 ? <ChevronUp/> : <ChevronDown/>}
                     </button>
                 </div>
                 <p className={`text-gray-700 mt-5 ${expanded2 ? "" : "hidden"}`}>
                 The World English Bible (WEB) is an English translation of the Bible freely shared online. The translation work began in 1994 and was deemed complete in 2020. Created by Michael Paul Johnson with help from volunteers,[1][6] the WEB is an updated revision of the American Standard Version from 1901.</p> 
             </li>

             <li className="mb-3 block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
             <Link href='/library/john/#together' className="mr-2 text-green-500">together</Link></li>
             <li className="block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                 <Link href='/library/john/#solemnly' className="mr-2 text-blue-500">solemnly</Link></li>
 
             </ul>
         </div> }
         </div>
         </div>  
         );
         }