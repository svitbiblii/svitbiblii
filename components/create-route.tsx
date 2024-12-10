"use client";

import { useTranslations } from "next-intl";

export const CreateRoute = () => {
    const t = useTranslations("CreateRouteComponent");

    return (
        <div className="shadow-lg rounded-lg p-8 max-w-md w-full m-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">{t('title')}</h2>
            <p className="text-gray-500 dark:text-white mb-4 text-center">{t('content')}</p>
            <div className="flex justify-center">
                <a href=""
                   className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">{t('register')}</a>
            </div>
        </div>
    )
}