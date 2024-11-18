"use client";

import { useRef, useEffect, useState } from "react";

export const OnboardingSlider = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Для обробки свайпів
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;

            if (Math.abs(diff) > 50) {
                scroll(diff > 0 ? "right" : "left");
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const updateArrows = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollLeftButton = document.getElementById("scrollLeft");
            const scrollRightButton = document.getElementById("scrollRight");
            const atStart = scrollContainer.scrollLeft === 0;
            const atEnd =
                scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;

            if (scrollLeftButton) scrollLeftButton.style.display = atStart ? "none" : "inline";
            if (scrollRightButton) scrollRightButton.style.display = atEnd ? "none" : "inline";
        }
    };

    const scroll = (direction: "left" | "right") => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const items = Array.from(scrollContainer.querySelectorAll<HTMLAnchorElement>("a")); // Приведення до масиву
            let newScrollLeft = scrollContainer.scrollLeft;

            for (const item of items) {
                const itemLeft = item.offsetLeft;
                const itemRight = itemLeft + item.offsetWidth;

                if (direction === "left" && itemRight <= scrollContainer.scrollLeft) {
                    newScrollLeft = itemLeft;
                } else if (direction === "right" && itemLeft >= scrollContainer.scrollLeft + scrollContainer.clientWidth) {
                    newScrollLeft = itemLeft;
                    break;
                }
            }

            scrollContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
        }
    };

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 1024);
    };

    useEffect(() => {
        // Initial check for screen size
        checkIsMobile();

        // Update on resize
        const handleResize = () => {
            checkIsMobile();
            updateArrows();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        updateArrows();
    }, [isMobile]);

    return (
        <div className="flex items-center text-xl">
            <div className="fixed w-[calc(100%-20px)] md:w-[calc(100%-320px)] xl:w-[calc(100%-356px)] flex bg-white dark:bg-background z-10 pt-6 pb-6 mt-10 xl:mt-8 border-b-2 px-2">
                {isMobile && (
                    <button
                        id="scrollLeft"
                        onClick={() => scroll("left")}
                        className="mr-4 md:mr-8 border rounded hidden px-2 py-1 md:px-4 md:py-2"
                    >
                        &larr;
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    className={`flex items-center overflow-hidden leading-4 px-4 ${
                        isMobile ? "scrollbar-hide" : ""
                    }`}
                    onScroll={updateArrows}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <a href="#whowe" className="text-black dark:text-white font-semibold relative whitespace-nowrap">
                        Хто ми?
                        <span className="absolute left-0 -bottom-1 w-full border-b-2 border-black dark:border-white"></span>
                    </a>
                    <a href="#goal" className="ml-6 whitespace-nowrap-4">Мета проєкту</a>
                    <a href="#whywe" className="ml-6 whitespace-nowrap">Чому ми?</a>
                    <a href="#forsponsor" className="ml-6 whitespace-nowrap-4 min-w-64">Чому для спонсорів важливо
                        інвестувати в нас?</a>
                </div>

                {isMobile && (
                    <button
                        id="scrollRight"
                        onClick={() => scroll("right")}
                        className="ml-4 md:ml-8 border rounded px-2 py-1 md:px-4 md:py-2"
                    >
                        &rarr;
                    </button>
                )}
            </div>
        </div>
    );
};

export default OnboardingSlider;
