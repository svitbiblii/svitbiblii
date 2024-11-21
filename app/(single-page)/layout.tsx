"use client";
import { useState } from "react";

import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";
import {Int} from "@/app/(single-page)/components/int";
import InterpretationPage from "@/app/(single-page)/(routes)/single-page/interpretation-page";

const SinglePageLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="h-min-full">

            <Navbar/>

            <div className="flex">
                <div
                    className="hidden md:block h-screen mt-16 w-72 min-w-72 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg">
                    <div>
                        <About/>
                        <Sidebar/>
                    </div>
                </div>
                <div className="h-screen w-full mt-16 py-4 pl-4 shadow-lg">
                    <main>
                        <Int isOpen={isOpen} toggleDiv={toggleDiv}/>
                        <div className="group flex flex-col-reverse lg:flex-row-reverse relative">
                            {isOpen && (
                                <InterpretationPage/>
                            )}
                            {children}
                            test123
                        </div>


                    </main>

                </div>

            </div>
        </div>
    )
}

export default SinglePageLayout;