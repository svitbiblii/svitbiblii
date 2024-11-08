"use client";

export const Search = () => {
    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-semibold mb-4">Пошук та фільтр</h2>

            <div className="flex items-center w-full mx-auto dark:border dark:border-white shadow-md rounded-full p-2">
                <input
                    type="text"
                    placeholder="Пошук..."
                    className="w-full rounded-full px-4 py-2 text-gray-700 focus:outline-none"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
                <button className="text-xs px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Всі</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">Аудіо</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">Відео</button>
                <button className="text-xs px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">Наукові тексти</button>
            </div>

            <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium">Результат 1</h3>
                    <p className="text-gray-600">Опис результату 1</p>
                </div>

            </div>
        </div>
    )
}