"use client";

export const About = () => {
    return (
        <nav className=" p-4 border-b-4 dark:border-white">
            <ul className="space-y-3">
                <li className="flex items-center">
                    <a href="/"
                       className="flex items-center hover:underline transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" 
                            x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                        </svg>
                        Головна
                    </a>
                </li>

                <li className="flex items-center">
                    <a href="/about-us"
                       className="flex items-center hover:underline transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 8v4l3 3m0-4l-3 3M12 4a8 8 0 100 16 8 8 0 000-16z"/>
                        </svg>
                        О нас
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
                <li className="flex items-center">
                    <a href="/catalog"
                       className="flex items-center hover:underline transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" >
                            <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"/>
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
                            <circle cx="10" cy="8" r="2"/></svg>
                        Каталог
                    </a>
                </li>
            </ul>
        </nav>


    )
}