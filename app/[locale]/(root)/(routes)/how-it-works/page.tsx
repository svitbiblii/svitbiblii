"use client";

import { useTranslations } from "next-intl";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import { useState } from "react";

const HowItWorksPage = () => {
    const t = useTranslations("HowItWorks")

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="h-min-full flex">
        <div className="flex">
            <div className="relative">
                <button onClick={() => setExpanded(curr => !curr)}
                        className={`absolute top-4 z-20 hover:bg-blue-200 ${expanded ? "left-56 dark:bg-secondary dark:hover:bg-blue-200" : "left-4 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg dark:color-white`}>
                    {expanded ? <ChevronFirst /> : <ChevronLast/>}
                </button>
            </div>
            <div
                className={`hidden  h-screen w-72 min-w-72 overflow-y-auto bg-white dark:bg-secondary shadow-lg                    ${
                    expanded ? "md:block" : "initial"
                }`}>
                <div>
                    <About/>
                    <History />
                </div>
            </div>
        </div>

        <div className="p-8 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold mt-4">{t('title')}</h1>
            <p className="text-lg mt-4 leading-relaxed text-gray-700">
            {t('content')}
            </p>
        </div>
    </div>
    );
}
export default HowItWorksPage;