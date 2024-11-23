"use client";
import { useState } from "react";

import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";
import {Int} from "@/app/(single-page)/components/int";
import { ChevronFirst, ChevronLast} from "lucide-react";
import InterpretationPage from "@/app/(single-page)/(routes)/single-page/interpretation-page";

const SinglePageLayout = ({
                              children
                          }: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="h-min-full">
            <Navbar/>
            <div className="flex">
                <div className="relative">
                    <button onClick={() => setExpanded(curr => !curr)}
                            className={`absolute top-24 z-20 ${expanded ? "left-60" : "left-8"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100`}>
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
                <div className="h-screen w-full mt-16 py-4 pl-4 shadow-lg">
                    <main>
                        <div className="w-full"><Int isOpen={isOpen} toggleDiv={toggleDiv}/></div>
                        <div className="group flex flex-col-reverse lg:flex-row-reverse relative">
                            {isOpen && (
                                <div
                                    className="divider lg:hidden shadow w-1/2 left-1/4 h-1 absolute top-40vh mt-4 bg-gray-100"></div>
                            )}
                            {isOpen && (
                                <InterpretationPage/>
                            )}
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default SinglePageLayout;