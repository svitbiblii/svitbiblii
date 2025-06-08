"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const CreateRoute = () => {
    const t = useTranslations("CreateRouteComponent");

    return (
        <div className="shadow-lg rounded-lg p-8 max-w-md w-full m-auto">
            <h2 className=" font-semibold mb-4 text-center">{t('title')}</h2>
            <p className="text-gray-500 dark:text-white mb-4 text-center">{t('content')}</p>
            <div className="flex justify-center">
                <Link href="/library"
                   className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300">{t('register')}
                </Link>
            </div>
        </div>
    )
}