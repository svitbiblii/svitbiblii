"use client";

export const Sidebar = () => {
    return (
        <div
            className="h-full w-64 bg-secondary shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Навігатор</h2>

            <div className="mb-8">
                <h3 className="uppercase text-md font-semibold text-gray-700 mb-2 sticky top-0">Вчора</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Новый Завет - Послание Иакова - Глава 1</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Новый Завет - Послание к Ефесянам - Глава 5</a>
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="uppercase text-md font-semibold text-gray-700 mb-2 sticky top-0">Місяць тому</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Путь ко спасению</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Просто христианство</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="uppercase text-md font-semibold text-gray-700 mb-2 sticky top-0">Рік тому</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Предмет знания</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Ветхозаветный канон у новозаветных писателей</a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">Введение в Ветхий Завет</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}