"use client";

import { useTranslations } from "next-intl";

interface Props {
    inputValue: string
    setInputValue: (value: string) => void
  }


export const Search = ({ inputValue, setInputValue}: Props) => {
    const t = useTranslations("SearchComponent");

    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-semibold mb-4">{t('search')}</h2>

            <div className="flex items-center w-full mx-auto dark:border dark:border-white shadow-md rounded-full p-2">
                <input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                      }}
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
                <button className="text-xs px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600">{t('category')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300">{t('audio')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300">{t('video')}</button>
                <button className="text-xs px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300">{t('science')}</button>
            </div>

        </div>
    )
}
