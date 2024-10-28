"use client";

export const Search = () => {
    return (
        <div className="flex items-center w-full mx-auto bg-white shadow-md rounded-full p-2 my-10">
            <input
                type="text"
                placeholder="Search..."
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
    )
}