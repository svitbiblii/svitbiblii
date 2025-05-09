"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, CircleX } from "lucide-react";
import { useTranslations } from "next-intl";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import FontSizeControls from "@/components/FontSizeControls";

export default function SylvesterBlissPage() {
    const t = useTranslations("BookContents");

    const [showPage, setShowPage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded, setExpanded] = useState(true);
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

            <div className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary pb-12 shadow-lg ${
                      expanded ? "md:block" : "initial"}`}>
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
                                             <Link href='/library/sylvester-bliss/#section1'
                                                 className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                                 Chapter 1
                                             </Link>
                                         </li>
                                         <li>
                                             <Link href='/library/sylvester-bliss/#section2'
                                                 className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                                     Chapter 2
                                             </Link>
                                         </li>
                           </ul> :
                                     <History />}
                    </div>

               </div>
           </div>


            <div className={`relative h-full w-full px-4 pt-2  ${showPage ? "sm:flex sm:h-screen block" : "block"} `}>
                <FontSizeControls targetId="book-content-syl" />
                <div id="book-content-syl"
                    className={`  ${showPage ? "px-2 md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>
                    <h2 className="pt-0">A Brief Commentary on the Apocalypse Sylvester Bliss</h2>
                    <p id="section1">The
                        <button className="px-2 font-medium"
                                onClick={togglePage}>
                            Apocalypse
                        </button>
                        should be regarded as a peculiarly interesting portion of scripture: a blessing being promised
                        those who read, hear, and keep the things which are written therein. It has been subjected to so
                        many contradictory interpretations, that any attempt to comprehend its meaning is often regarded
                        with distrust; and the impression has become very prevalent, that it is a “sealed book,”—that
                        its meaning is so hidden in unintelligible symbols, that very little can be known respecting it;
                        and that to attempt to unfold its meaning, is to tread presumptuously on forbidden ground.

                        The attention of the Christian community has been called more of late to its study, by the
                        publication of several elaborate Expositions. One in two large volumes, 8vo., by Prof. Stuart,
                        was published at Andover, Mass., in 1845. A large 8vo. volume, by David N. Lord, was issued from
                        the press of the Harpers, in New York, in 1847; and a smaller work, by Rev. Thomas Wickes,
                        appeared in that city in 1851. These are the more important works on the subject which have been
                        published in this country. In England, the “Horæ Apocalypticæ,” by the Rev. E. B. Elliott, A.M.,
                        late Vicar of Tuxford, and fellow of Trinity College, Cambridge, has passed through several
                        editions,—the fourth of which, in four large vols. 8vo., was published in London, [pg 006]in
                        1851. These works, with the writings of Habershon, Cunningham, Croly, Bickersteth, Birks,
                        Brooks, Keith, and other distinguished English writers, have caused the study of the Apocalypse
                        to be regarded with more favor of late than heretofore.

                        The Expositions of Mr. Lord have thrown much light on the nature and laws of symbols, by
                        unfolding the principles in accordance with which they are used. The evolving of these has
                        removed from many passages the obscurity which had before caused them to be regarded as
                        enigmatical. There are, doubtless, many portions of the Apocalypse, the meaning of which is as
                        yet only dimly perceived, and which will be more clearly unfolded by the transpiring of future
                        events; and it would be arrogant to claim that its interpretation had been freed from all
                        perplexities. But it is believed that it may be as profitably and as satisfactorily studied as
                        other portions of Scripture; and that the reader may feel an assurance of approximating to a
                        knowledge of the true meaning of its symbolic teachings.

                        The Bible is its own interpreter; and when practicable, scripture should be explained by
                        scripture. The meaning imputed to any passage must never contradict, but must harmonize with
                        that of parallel texts. In illustrating the several references in the Apocalypse to the same
                        events and epochs, a repetition of scripture is somewhat unavoidable.

                        These pages have resulted from notes prepared in a familiar course of Bible-class instruction,
                        where the study of brevity was necessary. Without designing to speak dogmatically, the didactic
                        was found the more direct and simple mode of expression. In presenting this exposition, merely
                        as the opinion of the writer, it is with the hope that it will give, in a small compass, a
                        common-sense view of the intricacies of this book, and be acceptable to those interested in the
                        study of prophecy
                    </p>
                    <p id="section2">

                        Is it merely by chance again that we find in this first of histories examples of the folly of
                        relying upon political connections? As the chief butler remembered not Joseph, nor did he
                        succeed in escaping from prison by securing influence at court, so is the influence of[14]
                        Joseph himself now become vain, although he was the father of Pharaoh and lord of all his house.
                        His romantic history, his fidelity in temptation, and the services by which he had at once
                        cemented the royal power and saved the people, could not keep his memory alive. The hollow
                        wraith of dying fame died wholly. There arose a new king over Egypt who knew not Joseph.

                        Such is the value of the highest and purest earthly fame, and such the gratitude of the world to
                        its benefactors. The nation which Joseph rescued from starvation is passive in Pharaoh&#39;s
                        hands, and persecutes Israel at his bidding.

                        And when the actual deliverer arose, his rank and influence were only entanglements through
                        which he had to break.

                        Meanwhile, except among a few women, obedient to the woman&#39;s heart, we find no trace of
                        independent action, no revolt of conscience against the absolute behest of the sovereign, until
                        selfishness replaces virtue, and despair wrings the cry from his servants, Knowest thou not yet
                        that Egypt is destroyed?

                        Now, in Genesis we saw the fate of families, blessed in their father Abraham, or cursed for the
                        offence of Ham. For a family is a real entity, and its members, like those of one body, rejoice
                        and suffer together. But the same is true of nations, and here we have reached the national
                        stage in the education of the world. Here is exhibited to us, therefore, a nation suffering with
                        its monarch to the uttermost, until the cry of the maidservant behind the mill is as wild and
                        bitter as the cry of Pharaoh upon his throne. It is indeed the eternal curse of despotism that
                        unlimited calamity may be drawn down upon millions by the caprice of one[15] most unhappy man,
                        himself blinded and half maddened by adulation, by the absence of restraint, by unlimited
                        sensual indulgence if his tendencies be low and animal, and by the pride of power if he be
                        high-spirited and aspiring.

                        If we assume, what seems pretty well established, that the Pharaoh from whom Moses fled was
                        Rameses the Great, his spirit was of the nobler kind, and he exhibits a terrible example of the
                        unfitness even of conquering genius for unbridled and irresponsible power. That lesson has had
                        to be repeated, even down to the days of the Great Napoleon.

                        Now, if the justice of plaguing a nation for the offence of its head be questioned, let us ask
                        first whether the nation accepts his despotism, honours him, and is content to regard him as its
                        chief and captain. According to the principles of the Sermon on the Mount, whoever thinks a
                        tyrant enviable, has already himself tyrannised with him in his heart. Do we ourselves, then,
                        never sympathise with political audacity, bold and unscrupulous “resource,” success that is
                        bought at the price of strange compliances, and compromises, and wrongs to other men?

                        The great national lesson is now to be taught to Israel that the most splendid imperial force
                        will be brought to an account for its treatment of the humblest—that there is a God Who judges
                        in the earth. And they were bidden to apply in their own land this experience of their own,
                        dealing kindly with the stranger in the midst of them, “for thou wast a stranger in the land of
                        Egypt.” That lesson we have partly learned, who have broken the chain of our slaves. But how
                        much have we left undone! The subject races were never given into our hands to supplant them, as
                        we have[16] supplanted the Red Indian and the New Zealander, nor to debauch, as men say we are
                        corrupting the African and the Hindoo, but to raise, instruct and Christianise. And if the
                        subjects of a despotism are accountable for the actions of rulers whom they tolerate, how much
                        more are we? What ought we to infer, from this old-world history, of the profound
                        responsibilities of all free citizens?

                        We attain a principle which reaches far into the spiritual world, when we reflect that if evil
                        deeds of a ruler can justly draw down vengeance upon his people, the converse also must hold
                        good. Reverse the case before us. Let the kingdom be that of the noblest and purest virtue. Let
                        no subject ever be coerced to enter it, nor to remain one hour longer than while his adoring
                        loyalty consents. And shall not these subjects be the better for the virtues of the Monarch whom
                        they love? Is it mere caprice to say that in choosing such a King they do, in a very real sense,
                        appropriate the goodness they crown? If it be natural that Egypt be scourged for the sins of
                        Pharaoh, is it palpably incredible that Christ is made of God unto His people wisdom and
                        righteousness and sanctification and redemption? The doctrine of imputation can easily be so
                        stated as to become absurd. But the imputation of which St. Paul speaks much can only be denied
                        when we are prepared to assail the principle on which all bodies of men are treated, families
                        and nations as well as the Church of God.

                        It was the jealous cruelty of Pharaoh which drew down upon his country the very perils he
                        laboured to turn away. There was no ground for his fear of any league with foreigners against
                        him. Prosperous and unambitious, the people would have[17] remained well content beside the
                        flesh-pots of Egypt, for which they sighed even when emancipated from heavy bondage and eating
                        the bread of heaven. Or else, if they had gone forth in peace, from a land whose hospitality had
                        not failed, to their inheritance in Canaan, they would have become an allied nation upon the
                        side where the heaviest blows were afterwards struck by the Asiatic powers. Cruelty and cunning
                        could not retain them, but it could decimate a population and lose an army in the attempt. And
                        this law prevails in the modern world, England paid twenty millions to set her bondmen free.
                        Because America would not follow her example, she ultimately paid the more terrible ransom of
                        civil war. For the same God was in Jamaica and in Florida as in the field of Zoan. Nor was there
                        ever yet a crooked policy which did not recoil either upon its author, or upon his successors
                        when he had passed away. In this case it fulfilled the plans and the prophecies of God, and the
                        wrath of man was made to praise Him.

                        There is independent reason for believing that at this period one-third at least of the
                        population of Egypt was of alien blood (Brugsch, History, ii. 100). A politician might fairly be
                        alarmed, especially if this were the time when the Hittites were threatening the eastern
                        frontier, and had reduced Egypt to stand on the defensive, and erect barrier fortresses. And the
                        circumstances of the country made it very easy to enslave the Hebrews. If any stain of Oriental
                        indifference to the rights of the masses had mingled with the God-given insight of Joseph, when
                        he made his benefactor the owner of all the soil, the Egyptian people were fully avenged upon
                        him now. For this arrangement laid his pastoral race helpless at their[18] oppressor&#39;s feet.
                        Forced labour quickly degenerates into slavery, and men who find the story of their misery hard
                        to credit should consider the state of France before the Revolution, and of the Russian serfs
                        before their emancipation. Their wretchedness was probably as bitter as that of the Hebrews at
                        any period but the last climax of their oppression. And they owed it to the same cause—the
                        absolute ownership of the land by others, too remote from them to be sympathetic, to take due
                        account of their feelings, to remember that they were their fellow-men. This was enough to slay
                        compassion, even without the aggravation of dealing with an alien and suspected race.

                        Now, it is instructive to observe these reappearances of wholesale crime. They warn us that the
                        utmost achievements of human wickedness are human still; not wild and grotesque importations by
                        a fiend, originated in the abyss, foreign to the world we live in. Satan finds the material for
                        his master-strokes in the estrangement of class from class, in the drying up of the fountains of
                        reciprocal human feeling, in the failure of real, fresh, natural affection in our bosom for
                        those who differ widely from us in rank or circumstances. All cruelties are possible when a man
                        does not seem to us really a man, nor his woes really woeful. For when the man has sunk into an
                        animal it is only a step to his vivisection.

                        Nor does anything tend to deepen such perilous estrangement, more than the very education,
                        culture and refinement, in which men seek a substitute for religion and the sense of brotherhood
                        in Christ. It is quite conceivable that the tyrant who drowned the Hebrew infants was an
                        affectionate father, and pitied his nobles when their children died. But his sympathies[19]
                        could not reach beyond the barriers of a caste. Do our sympathies really overleap such barriers?
                        Would God that even His Church believed aright in the reality of a human nature like our own,
                        soiled, sorrowful, shamed, despairing, drugged into that apathetical insensibility which lies
                        even below despair, yet aching still, in ten thousand bosoms, in every great city of
                        Christendom, every day and every night! Would to God that she understood what Jesus meant, when
                        He called one lost creature by the tender name which she had not yet forfeited, saying, “Woman,
                        where are thine accusers?” and when He asked Simon, who scorned such another, “Seest thou this
                        woman!” Would God that when she prays for the Holy Spirit of Jesus she would really seek a mind
                        like His, not only in piety and prayerfulness, but also in tender and heartfelt brotherhood with
                        all, even the vilest of the weary and heavy-laden!</p>

                </div>

                {showPage &&
                    <div
                        className={`${showPage ? "px-2 mt-3 md:mt-0  md:pt-0  pt-3 md:w-1/2 md:h-screen h-40vh w-full overflow-y-scroll" : "w-full"} `}>
                        <button className="float-right text-gray-700 hover:text-blue-400 transition-colors duration-200"
                                onClick={() => {
                                    setShowPage(false)
                                }}>
                            <CircleX/>
                        </button>
                        <ul className="lg:pb-48 pl-0 pt-10 w-full ">
                            <li className="mb-3 block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                <div className="flex justify-between item-start">
                                    <Link href='/library/chadwick/#imperfectly'
                                        // onClick={() => {Cookies.set('2', 'G. A. Chadwick - The Book of Exodus')
                                        //                 setTimeout(() => {location.reload()}, 500)}}
                                          onClick={() => {
                                              setNewId('2')
                                          }}
                                          className="text-blue-500">imperfectly
                                        <span className="text-black ml-2 dark:text-white">in the book The Book of Exodus by G. A. Chadwick</span>
                                    </Link>

                                    <button onClick={() => setExpanded1(curr => !curr)}
                                            className="">
                                        {expanded1 ? <ChevronUp/> : <ChevronDown/>}
                                    </button>
                                </div>

                                <p className={`text-gray-700 mt-5 ${expanded1 ? "" : "hidden"}`}>
                                    The Expositor&apos;s Bible: The Book of Exodus by G. A. Chadwick is a theological
                                    work written in the late 19th century. This text is an exposition on the Book of
                                    Exodus from the Old Testament, aiming to explore its spiritual significance and
                                    connection to Christianity, presenting an interpretation of the events and
                                    characters found within. The author, a notable church leader, seeks to provide
                                    insights that are both educational and edifying, reflecting his belief in the
                                    enduring authority of biblical scripture. At the start of this volume, the
                                    introduction presents the context of the Book of Exodus, discussing the transition
                                    from personal stories of the patriarchs to the national narrative of Israel. The
                                    preface establishes the significance of Exodus, emphasizing its impact on the Hebrew
                                    nation and the underlying spiritual lessons that extend beyond its historical
                                    events. The opening sections highlight the oppression of the Israelites in Egypt and
                                    introduces Moses, whose birth occurs amid a climate of fear and tyranny. Chadwick
                                    elaborates on Moses&#39; early life, the influence of his parents, his upbringing in
                                    Pharaoh&#39;s household, and the formative choices that shape his identity and
                                    destiny, setting the stage for the significant events that will follow in the
                                    narrative</p>
                            </li>
                            <li className="block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                <div className="flex justify-between item-start">
                                    <Link href='/library/chadwick/#scientific'
                                        // onClick={() => {Cookies.set('2', 'G. A. Chadwick - The Book of Exodus')
                                        //                 setTimeout(() => {location.reload()}, 500)}}
                                          onClick={() => {
                                              setNewId('2')
                                          }}
                                          className="text-blue-500">scientific
                                        <span className="text-black ml-2 dark:text-white">in the book The Book of Exodus by G. A. Chadwick</span>
                                    </Link>
                                    <button onClick={() => setExpanded2(curr => !curr)}
                                            className="">
                                        {expanded2 ? <ChevronUp/> : <ChevronDown/>}
                                    </button>
                                </div>

                                <p className={`text-gray-700 mt-5 ${expanded2 ? "" : "hidden"}`}>
                                    The Expositor&apos;s Bible: The Book of Exodus by G. A. Chadwick is a theological
                                    work written in the late 19th century. This text is an exposition on the Book of
                                    Exodus from the Old Testament, aiming to explore its spiritual significance and
                                    connection to Christianity, presenting an interpretation of the events and
                                    characters found within. The author, a notable church leader, seeks to provide
                                    insights that are both educational and edifying, reflecting his belief in the
                                    enduring authority of biblical scripture. At the start of this volume, the
                                    introduction presents the context of the Book of Exodus, discussing the transition
                                    from personal stories of the patriarchs to the national narrative of Israel. The
                                    preface establishes the significance of Exodus, emphasizing its impact on the Hebrew
                                    nation and the underlying spiritual lessons that extend beyond its historical
                                    events. The opening sections highlight the oppression of the Israelites in Egypt and
                                    introduces Moses, whose birth occurs amid a climate of fear and tyranny. Chadwick
                                    elaborates on Moses&#39; early life, the influence of his parents, his upbringing in
                                    Pharaoh&#39;s household, and the formative choices that shape his identity and
                                    destiny, setting the stage for the significant events that will follow in the
                                    narrative.</p>

                            </li>
                            <li className="mb-3 block rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                <div className="flex justify-between item-start">
                                    <Link href='/library/john/#conjunction'
                                        // onClick={() => {Cookies.set('3', 'The Epistles - St. John')
                                        //     setTimeout(() => {location.reload()}, 500)}}
                                          onClick={() => {
                                              setNewId('3')
                                          }}
                                          className="text-blue-500">conjunction
                                        <span className="text-black ml-2 dark:text-white">in the book The Epistles by St. John</span>
                                    </Link>
                                    <button onClick={() => setExpanded3(curr => !curr)}
                                            className="">
                                        {expanded3 ? <ChevronUp/> : <ChevronDown/>}
                                    </button>
                                </div>

                                <p className={`text-gray-700 mt-5 ${expanded3 ? "" : "hidden"}`}>
                                    The Epistles of St. John by William Alexander is a theological exposition written in
                                    the late 19th century. This work is part of a series that aims to provide in-depth
                                    commentary and analysis of Biblical texts, specifically focusing on the epistles
                                    attributed to St. John. It explores the historical context, theological
                                    significance, and practical implications of these letters, which are crucial for
                                    understanding early Christian doctrine and ethics. The opening of the text presents
                                    a preface by the author, explaining his long-standing engagement with the Epistles
                                    of St. John. He outlines his approach, which combines historical background with
                                    exegetical analysis, framing the epistles within the broader context of St.
                                    John&#39;s life and the challenges faced by the early Church in Asia Minor,
                                    particularly Ephesus. The author prepares the reader for a detailed examination of
                                    the epistles, highlighting the importance of understanding the unique spiritual and
                                    theological insights that St. John offers, especially against the backdrop of
                                    contemporary heresies such as Gnosticism. The opening sets the stage for a scholarly
                                    yet accessible exploration intended for both serious theological study and general
                                    readers interested in the New Testament.</p>
                            </li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
}

