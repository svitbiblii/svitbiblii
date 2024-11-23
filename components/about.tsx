"use client";

export const About = () => {
    return (
        <nav className=" p-4 border-b-4 dark:border-white">
            <ul className="space-y-3">
                <li className="flex items-center">
                    <a href="/about-us"
                       className="flex items-center hover:underline transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 8v4l3 3m0-4l-3 3M12 4a8 8 0 100 16 8 8 0 000-16z"/>
                        </svg>
                        Про нас
                    </a>
                </li>
                <li className="flex items-center">
                    <a href="/how-it-works"
                       className="flex items-center hover:underline transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 4v16m8-8H4"/>
                        </svg>
                        Як це працює
                    </a>
                </li>
            </ul>
        </nav>


    )
}