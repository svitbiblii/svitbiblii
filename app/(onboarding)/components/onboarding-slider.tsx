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

    };

    const scroll = (direction: "left" | "right") => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const itemWidth = scrollContainer.clientWidth; // Ширина одного елемента (100% екрана)
            const scrollOffset = direction === "left" ? -itemWidth : itemWidth;
            scrollContainer.scrollBy({ left: scrollOffset, behavior: "smooth" });
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
            <div className="w-full flex bg-white dark:bg-background z-10 pt-6 pb-6 mt-10 xl:mt-8 border-b-2 px-2">
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
                    className={`flex w-full items-center justify-between overflow-hidden leading-4 px-4 ${
                        isMobile ? "scrollbar-hide" : ""
                    }`}
                    onScroll={updateArrows}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <a href="#whowe" className="min-w-full">
                        Хто ми?
                        <img
                            className="w-full"
                            alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                            fetchPriority="high" decoding="async" data-nimg="fill"
                            sizes="100vw"
                            srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                            src="/_next/image?url=%2Fimages%2Fslide3.jpeg&amp;w=3840&amp;q=75"/>
                    </a>
                    <a href="#whowe" className="min-w-full">
                        <img
                        className="w-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide2.jpeg&amp;w=3840&amp;q=75"/></a>
                    <a href="#whowe" className="min-w-full">
                        <img
                        className="w-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/></a>
                    <a href="#whowe" className="min-w-full">
                        <img
                        className="w-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/></a>
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
