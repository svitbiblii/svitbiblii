"use client";

export const Sidebar = () => {
    return (

        <div className="bg-secondary shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-left">Навігатор</h2>
            <div className="mb-8 relative">
                <h3 className="uppercase text-md font-semibold mb-2 sticky top-0 z-20 text-left">Вчора</h3>
                <ul className="space-y-2 list-none pl-0">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Новий Заповіт - Послання Якова - Глава 1</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Новий Заповіт - Послання св.Апостола Павла до ефесян - Глава 5</a>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h3 className="uppercase text-md font-semibold mb-2 sticky top-0 text-left">Місяць тому</h3>
                <ul className="space-y-2 list-none  pl-0">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Шлях до порятунку</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Просто християнство</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="uppercase text-md font-semibold mb-2 sticky top-0 text-left">Рік тому</h3>
                <ul className="space-y-2 list-none  pl-0">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Предмет знання</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Старозавітний канон у новозавітних письменників</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">Вступ до Старого Завіту</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}