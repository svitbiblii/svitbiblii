"use client";

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing";
import { Pickaxe, Users } from 'lucide-react';
import { Sparkles } from "lucide-react";

export const About = () => {
    const t = useTranslations("About")
    return (
        <nav className="p-2 border-b-4 dark:border-white">
            <ul className="space-y-3">
                <li className="flex md:hidden items-center">
                    <Link   href="/library" 
                        className="flex  items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
                     {t('library')}
                     <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                 </Link>
                </li>
                <li className="flex items-center">
                    <Link  href="/about-us"
                       className="flex items-center block pr-2 pt-2 pb-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                        <Users className="pr-2"/>
                        {t('aboutus')}
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link  href="/how-it-works"
                       className="flex items-center block pr-2 pt-2 pb-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                        <Pickaxe className="pr-2"/>
                        {t('howitworks')}
                    </Link>
                </li>

                {/* <li className="flex items-center">
                    <Link  href="/text"
                       className="flex items-center block pr-2 pt-2 pb-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                        <Pickaxe className="pr-2"/>
                        Text
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}