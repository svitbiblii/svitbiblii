"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, } from "react";
import { useNavigation } from "@/lib/navigation-context";
import { BOOKS_DATA } from "@/books-data_for-del";
import { CircleX } from "lucide-react";

const BibleEnPage = () => {
    const t = useTranslations("BookContents");

    const [showPage, setShowPage] = useState(true);
    const { addBookToHistory } = useNavigation();
        const currentBookLink = "/library/porter"; 
        const [bookContent, setBookContent] = useState<any>(null);

    useEffect(() => {
        if (!bookContent) { 
          const foundBook = BOOKS_DATA.find(item => item.link === currentBookLink);
    
          if (foundBook) {
            setBookContent(foundBook);
            addBookToHistory(foundBook.id);
          } else {
            setBookContent(null);
          }
        }
           }, [bookContent, addBookToHistory, currentBookLink])
    
          if (!bookContent) {
            return <div>{t("loading")}</div>; }


    return (
        <div className="h-min-full flex">
                     <div className="relative md:flex h-full w-full px-4 pt-2">

                        <div className={`relative ${showPage ? "mb-3 md:mb-0 md:w-1/2 h-40vh md:h-screen overflow-y-scroll" : "w-full"}`}>
                            <h2>World English Bible (WEB) by Michael Paul Johnson with volunteers</h2>
                            <h3 className="text-2xl">Genesis</h3>
                            <section id="section1">
                            <h3>Chapter 1</h3>
                            <p>1. In the <span id="beginning" className="text-primary scroll-mt-16">beginning</span> God(After &#34;God&#34;, the Hebrew has the two letters &#34;Aleph Tav&#34; (the first and last letters of the Hebrew alphabet) as a grammatical marker.) created the heavens and the earth.</p>
                            <p>2. Now the earth was formless and empty. Darkness was on the surface of the deep. God&#34;s Spirit was hovering over the surface of the waters.</p>
                            <p>3. God said, &#34;Let there be light&#34;, and there was light.</p>
                            <p>4. God saw the light, and saw that it was good. God divided the light from the darkness.</p>
                            <p>5. God called the light Day, and the darkness he called Night. There was evening and there was morning, one day.</p>
                            <p>6. God said, &#34;Let there be an expanse in the middle of the waters, and let it divide the waters from the waters&#34;.</p>
                            <p>7. God made the expanse, and divided the waters which were under the expanse from the waters which were above the expanse; and it was so.</p>
                            <p>8. God called the expanse sky. There was evening and there was morning, a second day.</p>
                            <p>9. God said, &#34;Let the waters under the sky be gathered together to one place, and let the dry land appear&#34;; and it was so.</p>
                            <p>10. God called the dry land Earth, and the gathering together of the waters he called Seas. God saw that it was good.</p>
                            <p>11. God said, &#34;Let the earth put forth grass, herbs yielding seed, and fruit trees bearing fruit after their kind, with its seed in it, on the earth&#34;; and it was so.</p>
                            <p>12. The earth brought forth grass, herbs yielding seed after their kind, and trees bearing fruit, with its seed in it, after their kind; and God saw that it was good.</p>
                            <p>13. There was evening and there was morning, a third day.</p>
                            <p>14. God said, &#34;Let there be lights in the expanse of sky to divide the day from the night; and let them be for signs, and for seasons, and for days and years;</p>
                            <p>15. and let them be for lights in the expanse of sky to give light on the earth&#34;; and it was so.</p>
                            <p>16. God made the two great lights: the greater light to rule the day, and the lesser light to rule the night. He also made the stars.</p>
                            <p>17. God set them in the expanse of sky to give light to the earth,</p>
                            <p>18. and to rule over the day and over the night, and to divide the light from the darkness. God saw that it was good.</p>
                            <p>19. There was evening and there was morning, a fourth day.</p>
                            <p>20. God said, &#34;Let the waters swarm with swarms of living creatures, and let birds fly above the earth in the open expanse of sky&#34;.</p>
                            <p>21. God created the large sea creatures, and every living creature that moves, with which the waters swarmed, after their kind, and every winged bird after its kind. God saw that it was good.</p>
                            <p>22. God blessed them, saying, &#34;Be fruitful, and multiply, and fill the waters in the seas, and let birds multiply on the earth&#34;.</p>
                            <p>23. There was evening and there was morning, a fifth day.</p>
                            <p>24. God said, &#34;Let the earth bring forth living creatures after their kind, livestock, creeping things, and animals of the earth after their kind&#34;; and it was so.</p>
                            <p>25. God made the animals of the earth after their kind, and the livestock after their kind, and everything that creeps on the ground after its kind. God saw that it was good.</p>
                            <p>26. God said, &#34;Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the birds of the sky, and over the livestock, and over all the earth, and over every creeping thing that creeps on the earth&#34;.</p>
                            <p>27. God created man in his own image. In God&#39;s image he created him; male and female he created them.</p>
                            <p>28. God blessed them. God said to them, &#34;Be fruitful, multiply, fill the earth, and subdue it. Have dominion over the fish of the sea, over the birds of the sky, and over every living thing that moves on the earth&#34;.</p>
                            <p>29. God said, &#34;Behold, I have given you every herb yielding seed, which is on the surface of all the earth, and every tree, which bears fruit yielding seed. It will be your food.</p>
                            <p>30. To every animal of the earth, and to every bird of the sky, and to everything that creeps on the earth, in which there is life, I have given every green herb for food&#34;; and it was so.</p>
                            <p>31. God saw everything that he had made, and, behold, it was very good. There was evening and there was morning, a sixth day.</p>
                            </section>

                            <section id="section2">
                            <h3>Chapter 2</h3>
                            <p>1. In the beginning God(After &#34;God&#34;, the Hebrew has the two letters &#34;Aleph Tav&#34; (the first and last letters of the Hebrew alphabet) as a grammatical marker.) created the heavens and the earth.</p>
                            <p>2. Now the earth was formless and empty. Darkness was on the surface of the deep. God&#34;s Spirit was hovering over the surface of the waters.</p>
                            <p>3. God said, &#34;Let there be light&#34;, and there was light.</p>
                            </section>


                            {!showPage &&
                            <button className="fixed top-3/4 md:top-32 right-5 md:right-10 bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300"
                                    onClick={() => {setShowPage(true)}}>
                                Interpretation
                            </button>}
                        </div>

                         {showPage &&
                        <div className="md:w-1/2 h-40vh md:h-screen px-4 overflow-y-scroll">
                            <button className="fixed right-5 md:right-16 text-gray-700 hover:text-primary-dark transition-colors duration-200" 
                                onClick={() => {setShowPage(false)}}>
                                <CircleX/>
                            </button>
                            <h2>Genesis: God&#39;s Ancient People - by Alun Owen</h2>
                            <h3>Chapter 1</h3>
                            <p>1.  &#34;The sky and the earth&#34; means everything. God made the sky and the earth out of nothing. Before he did that, only God existed.
                                     &#34;To create&#34; means to make something that is completely new. This chapter uses the word &#34;create&#34; in only 3 verses. In verse 1, God created the sky and the earth. In verse 21, he created the first animals. In verse 27, he created people.
                            </p>
                            <p>3-4. God made light because it would be necessary later. Later, he made plants. Plants cannot grow if there is no light. Later, he made animals and men. They cannot see if there is no light.</p>
                            <p>5. The story that is in this chapter has 6 parts. This verse is the end of the first part. Each part is called a day. Some people think that God made everything in 6 ordinary days. But the *Hebrew word for &#34;day&#34; occasionally means an age. Some people think that God made everything in 6 long periods of time.
                                &#34;And there was evening and there was morning&#34;. Some people think that this means an ordinary evening and an ordinary morning. If that is true, the 6 days must be 6 ordinary days. But perhaps it means, &#34;One age ended and a new age began.&#34; And so, the 6 days may mean 6 ages.
                            </p>
                        </div>}

                     </div>
        </div>
    );
}

export default BibleEnPage;
