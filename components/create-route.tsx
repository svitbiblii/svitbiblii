"use client";

export const CreateRoute = () => {
    return (
        <div className="shadow-lg rounded-lg p-8 max-w-md w-full m-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Давайте разом створимо
                маршрут для вивчення теми.</h2>
            <p className="text-gray-500 dark:text-white mb-4 text-center">Щоб приєднатися до нас, будь ласка, зареєструйтеся
                за посиланням нижче:</p>
            <div className="flex justify-center">
                <a href=""
                   className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Зареєструватися</a>
            </div>
        </div>
    )
}