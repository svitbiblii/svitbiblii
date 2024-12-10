// "use client";

// import { useTranslations } from "next-intl";

// export const Search = () => {
//     const t = useTranslations("SearchComponent")
//     return (
//         <div className="w-full p-6">
//             <h2 className="text-2xl font-semibold mb-4">{t('search')}</h2>

//             <div className="flex items-center w-full mx-auto dark:border dark:border-white shadow-md rounded-full p-2">
//                 <input
//                     type="text"
//                     placeholder={t('placeholder')}
//                     className="w-full rounded-full px-4 py-2 text-gray-700 dark:text-white dark:bg-background focus:outline-none"
//                 />
//                 <button className="text-gray-500 focus:outline-none hover:text-gray-700">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             <div className="flex justify-center space-x-4 mb-6">
//                 <button className="text-xs px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">{t('category')}</button>
//                 <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('audio')}</button>
//                 <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('video')}</button>
//                 <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('science')}</button>
//             </div>

//             <div className="space-y-4">
//                 <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//                     <h3 className="text-lg font-medium">{t('result')}</h3>
//                     <p className="text-gray-600 dark:text-white">{t('descriptions')}</p>
//                 </div>

//             </div>
//         </div>
//     )
// }

"use client";

import qs from "query-string";
import { useDebounce } from "@/hooks/use-debounce";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

export const Search = () => {
    const t = useTranslations("SearchComponent");

    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debouncedValue =  useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryId: categoryId
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, {skipEmptyString: true, skipNull: true});

        router.push(url);
    }, [debouncedValue, router, categoryId]);

    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-semibold mb-4">{t('search')}</h2>

            <div className="flex items-center w-full mx-auto dark:border dark:border-white shadow-md rounded-full p-2">
                <input
                    onChange={onChange}
                    value={value}
                    type="text"
                    placeholder={t('placeholder')}
                    className="w-full rounded-full px-4 py-2 text-gray-700 dark:text-white dark:bg-background focus:outline-none"
                />
                <button className="text-gray-500 focus:outline-none hover:text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
                <button className="text-xs px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">{t('category')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('audio')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('video')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">{t('science')}</button>
            </div>

            <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium">{t('result')}</h3>
                    <p className="text-gray-600 dark:text-white">{t('descriptions')}</p>
                </div>

            </div>
        </div>
    )
}