"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { ChevronFirst, ChevronLast} from "lucide-react";

const HomeLayout = ({
                           children
                       }: {
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="h-min-full">
            <Navbar />
            <div className="flex">
                <div className="relative">
                    <button onClick={() => setExpanded(curr => !curr)}
                            className={`absolute top-24 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
                        {expanded ? <ChevronFirst/> : <ChevronLast/>}
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
                <div className="h-screen w-full mt-16 overflow-y-auto p-4 shadow-lg">
                    <main>
                        {children}
                        <Footer/>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
