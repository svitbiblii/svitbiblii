"use client";

import { useState } from "react";
interface SidebarProps {
    headings?: { id: string; title: string }[];
}

export const Sidebar = ({ headings }: SidebarProps) => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            label: "Навігатор",
            content: (
                <div className="navigator">
                    <div className="mb-8 relative">
                        <h3 className="text-sm font-semibold mb-2 sticky bg-secondary py-2 top-0 z-20 text-left">Вчора</h3>
                        <ul className="space-y-2 list-none pl-0">
                            <li>
                                <a href="/single-page"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Старий
                                    Заповіт - Битіє - Глава 1</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Новий
                                    Заповіт - Послання св.Апостола Павла до ефесян - Глава 10</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold mb-2 sticky bg-secondary py-2 top-0 text-left">Місяць
                            тому</h3>
                        <ul className="space-y-2 list-none  pl-0">
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Шлях
                                    до порятунку</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Просто
                                    християнство</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-2 sticky bg-secondary py-2 top-0 text-left">Рік
                            тому</h3>
                        <ul className="space-y-2 list-none  pl-0">
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Предмет
                                    знання</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Старозавітний
                                    канон у новозавітних письменників</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Вступ
                                    до Старого Завіту</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },

        ...(headings && headings.length > 0
            ? [
                {
                    id: 2,
                    label: "Зміст",
                    content: (
                        <div>
                            <section>
                                <ul>
                                    {headings.map((heading) => (
                                        <p key={heading.id}>
                                            <a href={`#${heading.id}`}>{heading.title}</a>
                                        </p>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    ),
                },
            ]
            : []),
    ];

    return (
        <div className="bg-secondary shadow-lg px-6 pt-1 pb-8">
            <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex-1 py-2 text-center text-sm font-medium transition-all duration-200 ${
                            activeTab === tab.id
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-gray-500 hover:text-blue-500"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}