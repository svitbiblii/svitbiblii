"use client";

export const Footer = () => {
    return (
        <div className="flex justify-around bg-white p-6 text-center mt-20 mb-10">
            <a href="mailto:mediaglagol@gmail.com"
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M21 8V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2l9 5 9-5zm-9 7L3.5 9.5 3 10v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6l-.5-.5L12 15z"/>
                </svg>
                <span>Пишіть нам: mediaglagol@gmail.com</span>
            </a>

            <a href="https://www.facebook.com" target="_blank"
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-2h2.5v-1.6c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2h-2.4v7c4.8-.8 8.5-4.9 8.5-9.9z"/>
                </svg>
                <span>Стежте за нами у Facebook</span>
            </a>

            <a href="https://t.me/" target="_blank"
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M9.85 18.54c-.17.6-.53.75-1.08.47L6.88 17.1c-.45-.27-.9-.56-1.34-.86-.1-.07-.14-.17-.05-.26.08-.1.18-.06.27.01l1.46 1.02c.34.23.63.18.77-.2.17-.54.36-1.08.52-1.63.04-.16.1-.2.27-.15.67.2 1.33.42 2 .62.14.04.24.02.29-.13.48-1.47.97-2.93 1.46-4.4.06-.18.17-.23.35-.16l2.76 1.07c.1.04.22.09.21.22-.01.1-.09.16-.17.2l-3.23 2.02c-.3.19-.58.4-.86.61-.12.09-.15.18-.1.32.3.86.59 1.72.88 2.58.06.17.02.25-.15.3-.62.19-1.23.4-1.85.59z"/>
                </svg>
                <span>Підписуйтесь на наш Telegram-канал</span>
            </a>
        </div>


    )
}