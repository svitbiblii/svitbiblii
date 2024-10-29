"use client";

export const SourcesOfInformation = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold   mb-4 text-center">Джерела інформації</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 p-6">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15H8v-2h3v-1H9v-2h2v-1H8v-2h3v-1H9V8h3v8zm5 0h-2v-1h-1v-1h1v-1h-1v-1h1V8h2v9z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Старий Заповіт</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7zm-1 11V8h2v8h-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Новий Заповіт</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zm2 2v14h10V5H7zm2 2h6v2H9V7zm0 4h6v2H9v-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Євангеліє</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-purple-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 15h-6v-2h6v2zm0-4H9v-2h6v2zm0-4H9V7h6v2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Псалтир</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15h2v-5h3v-2h-3V8h-2v2H8v2h3v5z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Притчі</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-teal-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-4 14h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Пророки</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15h-2v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm5 4h-2v-2h2v2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Послання апостолів</h3>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V6h-2v2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold  ">Вчення</h3>
                    </div>
                </div>
        </div>
    )
}