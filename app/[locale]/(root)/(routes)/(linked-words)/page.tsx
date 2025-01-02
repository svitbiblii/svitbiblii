"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// import { useEffect } from "react";

// interface LinkedWorldsProps {
//     onCloseModal?: (id: string) => void;
// }

export default function LinkedWorldsPage() {
    const [expanded, setExpanded] = useState(false);
  
    
    return (
        <ul
        className=" mt-6 py-8 px-4 lg:pb-48 w-full overflow-y-auto">
            <li className="block p-3 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                <div className="flex justify-between">
                    <Link href='/library/chadwick/#imperfectly' className="text-blue-500">imperfectly
                        <span className="text-black ml-2">in the book A Brief Commentary on the Apocalypse by Sylvester Bliss</span>
                    </Link>
                    <button onClick={() => setExpanded(curr => !curr)}
                            className="">
                        {expanded ? <ChevronUp/> : <ChevronDown/>}
                    </button>
                </div>
               
                    <p className={`hidden  text-gray-700 mt-5 ${
                        expanded ? "md:block" : "initial"
                    }`}>
                        The Expositor&apos;s Bible: The Book of Exodus by G. A. Chadwick is a theological work written in the late 19th century. This text is an exposition on the Book of Exodus from the Old Testament, aiming to explore its spiritual significance and connection to Christianity, presenting an interpretation of the events and characters found within. The author, a notable church leader, seeks to provide insights that are both educational and edifying, reflecting his belief in the enduring authority of biblical scripture. At the start of this volume, the introduction presents the context of the Book of Exodus, discussing the transition from personal stories of the patriarchs to the national narrative of Israel. The preface establishes the significance of Exodus, emphasizing its impact on the Hebrew nation and the underlying spiritual lessons that extend beyond its historical events. The opening sections highlight the oppression of the Israelites in Egypt and introduces Moses, whose birth occurs amid a climate of fear and tyranny. Chadwick elaborates on Moses&#39; early life, the influence of his parents, his upbringing in Pharaoh&#39;s household, and the formative choices that shape his identity and destiny, setting the stage for the significant events that will follow in the narrative</p>
                
                </li>
            <li className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                <Link href='/library/chadwick/#scientific' className="mr-2 text-blue-500">scientific</Link></li>
            <li className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                <Link href='/library/chadwick/#corruption' className="mr-2 text-blue-500">corruption</Link></li>
            
            </ul>
            );
            }
