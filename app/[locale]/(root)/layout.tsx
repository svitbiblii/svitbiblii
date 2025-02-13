"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const HomeLayout = ({
                        children
                    }: {
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="h-min-full">
            <Navbar />
            <div className="flex">
                <div className="relative">
                    <button onClick={() => setExpanded(curr => !curr)}
                            className={`absolute top-24 z-20 hover:bg-blue-200 ${expanded ? "left-60 dark:bg-secondary dark:hover:bg-blue-200" : "left-8 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg bg-gray-50  dark:color-white`}>
                        {expanded ? <ChevronFirst /> : <ChevronLast/>}
                    </button>
                </div>
                <div
                    className={`hidden  h-screen w-72 min-w-72 mt-16 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg                    ${
                        expanded ? "md:block" : "initial"
                    }`}>
                    <div>
                        <About/>
                        <Sidebar/>
                    </div>
                </div>
                <div ref={scrollContainerRef} className="h-screen w-full mt-16 overflow-y-auto p-4 shadow-lg">
                    <main>
                        {children}
                        <Footer/>
                    </main>
                    <ScrollToTopButton scrollContainerRef={scrollContainerRef} />
                </div>
            </div>

        </div>
    );
};

export default HomeLayout;


// =================================================================== with history

// // "use client";

// // import { useState } from "react";
// import { Navbar } from "@/components/navbar";
// import { About } from "@/components/about";
// // import { Sidebar } from "@/components/sidebar";
// import { Footer } from "@/components/footer";
// // import { ChevronFirst, ChevronLast } from "lucide-react";
// // import { useRef } from "react";
// // import ScrollToTopButton from "@/components/ScrollToTopButton";
// import History from "@/components/history";



// const HomeLayout = ({
//                         children
//                     }: {
//     children: React.ReactNode;
// }) => {
//     // const [expanded, setExpanded] = useState(true);
//     // const scrollContainerRef = useRef<HTMLDivElement>(null);

//     return (
//         <div className="h-min-full">
//             <Navbar />
//             <div className="flex">
//                 {/* <div className="relative">
//                     <button onClick={() => setExpanded(curr => !curr)}
//                             className={`absolute top-24 z-20 hover:bg-blue-200 ${expanded ? "left-60 dark:bg-secondary dark:hover:bg-blue-200" : "left-8 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg bg-gray-50  dark:color-white`}>
//                         {expanded ? <ChevronFirst /> : <ChevronLast/>}
//                     </button>
//                 </div> */}
//                 <div
//                     className={` h-screen w-72 min-w-72 mt-16 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg`}>
//                     <div>
//                         <About/>
//                         <History />
//                         {/* <Sidebar/>
//                          */}
//                     </div>
//                 </div>
//                 <div  className="h-screen w-full mt-16 overflow-y-auto p-4 shadow-lg">
//                     <main>
//                         {children}
//                         <Footer/>
//                     </main>
//                     {/* <ScrollToTopButton scrollContainerRef={scrollContainerRef} /> */}
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HomeLayout;