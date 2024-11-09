"use client";

import { useRef, useEffect } from 'react';

export const HorizontalMenu = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 100;

    const updateArrows = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollLeftButton = document.getElementById('scrollLeft');
            const scrollRightButton = document.getElementById('scrollRight');
            const atStart = scrollContainer.scrollLeft === 0;
            const atEnd =
                scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;

            if (scrollLeftButton) scrollLeftButton.style.display = atStart ? 'none' : 'inline';
            if (scrollRightButton) scrollRightButton.style.display = atEnd ? 'none' : 'inline';
        }
    };
    const scroll = (direction: 'left' | 'right') => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollOffset = direction === 'left' ? -scrollAmount : scrollAmount;
            scrollContainer.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        updateArrows();
        const handleResize = () => updateArrows();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex items-center text-xl ">
            <div className="fixed w-screen md:w-[calc(100%-256px)] flex items-center bg-white z-10 pt-6 pb-6 mt-24 border-b-2 px-2">
                <button
                    id="scrollLeft"
                    onClick={() => scroll('left')}
                    className="mr-4 md:mr-8 border rounded hidden px-2 py-1 md:px-4 md:py-2 "
                >
                    &larr;
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-hidden scrollbar-hide px-4"
                    onScroll={updateArrows}
                >
                    <a href="#annotation" className="text-black font-semibold relative whitespace-nowrap">
                        Анотація
                        <span className="absolute left-0 -bottom-1 w-full border-b-2 border-black "></span>
                    </a>
                    <a href="#vision" className="ml-6 whitespace-nowrap-4">Візія</a>
                    <a href="#mission" className="ml-6 whitespace-nowrap">Місія</a>
                    <a href="#goal" className="ml-6 whitespace-nowrap">Мета</a>
                    <a href="#strategy"  className="ml-6 whitespace-nowrap">Стратегія</a>
                    <a href="#values" className="ml-6 whitespace-nowrap">Цінності</a>
                    <a href="#achieving_goals" className="ml-6 whitespace-nowrap">Порядок і способи досягнення цілей</a>
                    <a href="#prop_impl" className="ml-6 whitespace-nowrap">Основні властивості та особливості реалізації</a>
                    <a href="#exp_impl" className="ml-6 whitespace-nowrap">Очікувані результати реалізації</a>
                    <a href="#plan" className="ml-6 whitespace-nowrap">Орієнтовний план виконання</a>
                    <a href="#plan"  className="ml-6 whitespace-nowrap">Бюджет проєкту</a>
                </div>

                <button
                    id="scrollRight"
                    onClick={() => scroll('right')}
                    className="ml-4 md:ml-8 border rounded px-2 py-1 md:px-4 md:py-2"
                >
                    &rarr;
                </button>
            </div>
        </div>
    )
}

export default HorizontalMenu;
