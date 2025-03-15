"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import History from "@/components/history";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { About } from "@/components/about";
import { useState } from "react";

const AboutUsPage = () => {
    const t = useTranslations("AboutUs")

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="h-min-full flex mt-16">
        <div className="flex">
            <div className="relative">
                <button onClick={() => setExpanded(curr => !curr)}
                        className={`absolute top-4 z-20 hover:bg-blue-200 ${expanded ? "left-56 dark:bg-secondary dark:hover:bg-blue-200" : "left-4 dark:bg-background dark:hover:bg-blue-200"} hidden md:block p-1.5 rounded-lg dark:color-white`}>
                    {expanded ? <ChevronFirst /> : <ChevronLast/>}
                </button>
            </div>
            <div
                className={`hidden h-screen w-72 min-w-72 overflow-y-auto bg-secondary shadow-lg ${
                    expanded ? "md:block" : "initial"
                }`}>
        <div>
            <About/>
            <div className="bg-secondary px-6 pt-1 pb-8">
              <p className="py-2 text-center font-medium border-b-2 border-blue-500 text-blue-500">{t('navigator')}</p>
              <History />
            </div>
        </div>
            </div>
        </div>

        <div className="relative h-full w-full overflow-hidden px-4">
            <h1>{t('title')}</h1>
            <section id="whowe" className="scroll-mt-40">
                <h2>{t('subtitle1')}</h2>
                <p>{t('par11')} (<a className="hover:text-blue-500 transition" href="http://mediaglagol.com.ua" target="_blank">http://mediaglagol.com.ua</a>) — {t('par12')}</p>
                <p>{t('par13')}</p>
                <p>{t('par14')}</p>
                <p>{t('par15')}</p>
            </section>
            <section id="goal" className="scroll-mt-40">
                <h2>{t('subtitle2')}</h2>
                <p>{t('par21')}</p>
                <p>{t('par22')}</p>

                <Image
                    className="fit-picture mx-auto block"
                    src="/images/image-about-page.png"
                    width={600}
                    height={400}
                    alt="image-about-page"/>

            </section>

            <section id="whywe" className="scroll-mt-40">
                <h2>{t('subtitle3')}</h2>
                <p>{t('par31')}</p>
            </section>

            <section id="forsponsor" className="">
                <h2>{t('subtitle4')}</h2>
                <p>{t('par41')}</p>
                <p>{t('par42')}</p>
                <ul>
                    <li>{t('receive1')}</li>
                    <li>{t('receive2')}</li>
                    <li>{t('receive3')}</li>
                </ul>
                <p>{t('par43')}</p>
            </section>
        </div>
    </div>
    );
}

export default AboutUsPage;