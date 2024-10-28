"use client";

export const Sidebar = () => {
    return (
        <div className="space-y-4 flex flex-col text-primary bg-secondary">
            <div className="p-3 flex-1 justify-center">
                <div className="space-y-5">
                    <h2 className="text-3xl mb-10">Routes</h2>
                    <div>
                        <h3 className="text-2xl mb-2 sticky top-0 bg-secondary py-3">Yesterday</h3>
                        <ul>
                            <li>Ветхий Завет - Бытие - Глава 48</li>
                            <li>Ветхий Завет - Бытие - Глава 49</li>
                            <li>Ветхий Завет - Бытие - Глава 50</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-2 sticky top-0 bg-secondary py-3">1 week ago</h3>
                        <ul>
                            <li>Ветхий Завет - Бытие - Глава 48</li>
                            <li>Ветхий Завет - Бытие - Глава 49</li>
                            <li>Ветхий Завет - Бытие - Глава 50</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-2 sticky top-0 bg-secondary py-3">1 year ago</h3>
                        <ul>
                            <li>Ветхий Завет - Бытие - Глава 48</li>
                            <li>Ветхий Завет - Бытие - Глава 49</li>
                            <li>Ветхий Завет - Бытие - Глава 50</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}