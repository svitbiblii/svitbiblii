"use client";
import { useState } from "react";

import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";
import { ChevronFirst, ChevronLast} from "lucide-react";
import InterpretationPage from "@/app/[locale]/(single-page)/(routes)/single-page/interpretation-page";
import InterpretationPage2 from "@/app/[locale]/(single-page)/(routes)/single-page/interpretation-page2";

const SinglePageLayout = ({
                             children,
                         }: {
    children: React.ReactNode;
}) => {
    const [visibleComponentId, setVisibleComponentId] = useState<string | null>(null);

    const handleToggleComponent = (id: string) => {
        setVisibleComponentId((prevId) => (prevId === id ? null : id));
    };
    const [expanded, setExpanded] = useState(true);
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
                    className={`hidden  h-screen w-72 min-w-72 mt-16 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg
                    ${
                        expanded ? "md:block" : "initial"
                    }`}>
                    <div>
                        <About/>
                        <Sidebar
                            headings2={[
                                { id: "int1", title: "Толковая Библия А. Лопухина" },
                                { id: "int2", title: "Библия. Перевод Нового Мира (ПНМ)" },
                            ]}
                            onToggleComponent={handleToggleComponent}
                        />
                    </div>
                </div>
                <div className="h-screen w-full mt-16 py-4 pl-4 shadow-lg">
                    <main>

                        <div className="group flex flex-col-reverse lg:flex-row-reverse relative overflow-y-auto">
                            {visibleComponentId === "int1" && (
                                    <InterpretationPage />
                            )}
                            {visibleComponentId === "int2" && (
                                <InterpretationPage2 />
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