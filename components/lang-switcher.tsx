"use client";

export const LangSwitcher = () => {
    return (
        <div className="actions dropdown options switcher-options relative group">
            <div className="cursor-pointer">
                <span>EN</span>
            </div>
            <ul className="dropdown switcher-dropdown hidden group-hover:block absolute bg-white shadow-lg p-2">
                <li className="text-base">
                    <a href="/"> DE </a>
                </li>
                <li className="text-base">
                    <a href="/"> RU </a>
                </li>
                <li className="text-base">
                    <a href="/"> UA </a>
                </li>
            </ul>
        </div>


    )
}