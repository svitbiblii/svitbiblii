"use client";

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing";
import { Pickaxe, Users } from 'lucide-react';

export const About = () => {
    const t = useTranslations("About")
    return (
        <nav className="p-2 border-b-4 dark:border-white">
            <ul className="space-y-3">
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
            </ul>
        </nav>
    )
}