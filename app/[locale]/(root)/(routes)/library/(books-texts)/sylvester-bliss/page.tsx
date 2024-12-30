"use client";

// import Modal from "@/components/modal";
import { useState } from "react";
import LinkedWorldsPage from "../../../(linked-words)/page";

export default function SylvesterBlissPage() {
    const [showPage, setShowPage] = useState(false);

    const togglePage = () => {
        setShowPage(!showPage)
    };

    return (
        <div className={`mx-auto min-h-screen ${showPage ? "flex" : "block"} `}>

        <div className={`py-8 px-4  overflow-y-auto ${showPage ? "w-1/2" : "w-full"} `}>
        <h2>A Brief Commentary on the Apocalypse Sylvester Bliss</h2>

<p>The 
    <button className="px-2 font-medium"
            onClick={togglePage}>
    Apocalypse
    </button>
    
     should be regarded as a peculiarly interesting portion of scripture: a blessing being promised those who read, hear, and keep the things which are written therein. It has been subjected to so many contradictory interpretations, that any attempt to comprehend its meaning is often regarded with distrust; and the impression has become very prevalent, that it is a “sealed book,”—that its meaning is so hidden in unintelligible symbols, that very little can be known respecting it; and that to attempt to unfold its meaning, is to tread presumptuously on forbidden ground.

The attention of the Christian community has been called more of late to its study, by the publication of several elaborate Expositions. One in two large volumes, 8vo., by Prof. Stuart, was published at Andover, Mass., in 1845. A large 8vo. volume, by David N. Lord, was issued from the press of the Harpers, in New York, in 1847; and a smaller work, by Rev. Thomas Wickes, appeared in that city in 1851. These are the more important works on the subject which have been published in this country. In England, the “Horæ Apocalypticæ,” by the Rev. E. B. Elliott, A.M., late Vicar of Tuxford, and fellow of Trinity College, Cambridge, has passed through several editions,—the fourth of which, in four large vols. 8vo., was published in London, [pg 006]in 1851. These works, with the writings of Habershon, Cunningham, Croly, Bickersteth, Birks, Brooks, Keith, and other distinguished English writers, have caused the study of the Apocalypse to be regarded with more favor of late than heretofore.

The Expositions of Mr. Lord have thrown much light on the nature and laws of symbols, by unfolding the principles in accordance with which they are used. The evolving of these has removed from many passages the obscurity which had before caused them to be regarded as enigmatical. There are, doubtless, many portions of the Apocalypse, the meaning of which is as yet only dimly perceived, and which will be more clearly unfolded by the transpiring of future events; and it would be arrogant to claim that its interpretation had been freed from all perplexities. But it is believed that it may be as profitably and as satisfactorily studied as other portions of Scripture; and that the reader may feel an assurance of approximating to a knowledge of the true meaning of its symbolic teachings.

The Bible is its own interpreter; and when practicable, scripture should be explained by scripture. The meaning imputed to any passage must never contradict, but must harmonize with that of parallel texts. In illustrating the several references in the Apocalypse to the same events and epochs, a repetition of scripture is somewhat unavoidable.

These pages have resulted from notes prepared in a familiar course of Bible-class instruction, where the study of brevity was necessary. Without designing to speak dogmatically, the didactic was found the more direct and simple mode of expression. In presenting this exposition, merely as the opinion of the writer, it is with the hope that it will give, in a small compass, a common-sense view of the intricacies of this book, and be acceptable to those interested in the study of prophecy</p>
        </div>


           <div className={`py-8 px-4  overflow-y-auto ${showPage ? "w-1/2" : "w-full"} `}>
            {
                showPage && <LinkedWorldsPage /> 
                // <Modal onCloseModal={toggleModal}></Modal>
            }</div> 
        </div>
        
        );
        }
























     