"use client";

export const Categories = () => {
    return (
        <ul className="flex overflow-hidden py-2 flex-wrap justify-start gap-2 my-10">
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Переклади Біблії
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Таргуми
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Екзегетика
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Біблійна текстологія
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Біблійна герменевтика
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Ісагогіка
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Біблійна географія (географічні і політичні карти)
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Талмуд
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Релігійна історія
            </li>
            <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 transition">
                Канони і канонічне право
            </li>
        </ul>
    )
}