"use client";

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing";

export const About = () => {
    const t = useTranslations("About")
    return (
        <nav className=" p-2 border-b-4 dark:border-white">
            <ul className="space-y-3">
                <li className="flex items-center">
                    <Link  href="/about-us"
                       className="flex items-center block pr-2 pt-2 pb-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 8v4l3 3m0-4l-3 3M12 4a8 8 0 100 16 8 8 0 000-16z"/>
                        </svg>
                        {t('aboutus')}
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link  href="/how-it-works"
                       className="flex items-center block pr-2 pt-2 pb-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 4v16m8-8H4"/>
                        </svg>
                        {t('howitworks')}
                    </Link>
                </li>
            </ul>
        </nav>


    )
}