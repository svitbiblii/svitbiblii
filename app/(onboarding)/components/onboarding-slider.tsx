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
        <div className="flex items-center text-xl lg:hidden h-full w-full">
            {isMobile && (
                <button
                    id="scrollLeft"
                    onClick={() => scroll("left")}
                    className="mr-4 md:mr-8 border rounded hidden px-2 py-1 md:px-4 md:py-2 hidden"
                >
                    &larr;
                </button>
            )}

            <div
                ref={scrollContainerRef}
                className={`flex w-full h-full items-center justify-between overflow-hidden ${
                    isMobile ? "scrollbar-hide" : ""
                }`}
                onScroll={updateArrows}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="min-w-full h-full relative">
                    <img
                        className="w-full h-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide3.jpeg&amp;w=3840&amp;q=75"/>
                    <div className="absolute top-0 left-0 z-20 text-white text-xl pl-6 mt-10">Ласкаво просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full text-4xl top-24 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Используйте
                        строку поиска, чтобы найти интересующие вас темы или библейские стихи.
                    </div>
                    <div
                        className="flex absolute z-20 w-full max-w-full text-l text-center bottom-5 p-2 text-black font-bold uppercase">
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Вхід</button>
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Почати</button>
                    </div>
                </div>
                <div className="min-w-full h-full relative">
                    <img
                        className="w-full h-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide2.jpeg&amp;w=3840&amp;q=75"/>
                    <div className="absolute top-0 left-0 z-20 text-white text-xl pl-6 mt-10">Ласкаво просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full  text-4xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Читаете
                        статьи, разбирайтесь в текстах и контексте, расширяйте своё знание.
                    </div>
                    <div
                        className="flex absolute z-20 w-full max-w-full text-l text-center bottom-5 p-2 text-black font-bold uppercase">
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Вхід</button>
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Почати</button>
                    </div>
                </div>
                <div className="min-w-full h-full relative">
                    <img
                        className="w-full h-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/>
                    <div className="absolute top-0 left-0 z-20 text-white text-xl pl-6 mt-10">Ласкаво просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full  text-4xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Сохраняйте
                        любимые материалы, чтобы вернуться к ним позже.
                    </div>
                    <div
                        className="flex absolute z-20 w-full max-w-full text-l text-center bottom-5 p-2 text-black font-bold uppercase">
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Вхід</button>
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Почати</button>
                    </div>
                </div>
                <div className="min-w-full h-full relative">
                    <img
                        className="w-full h-full"
                        alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                        fetchPriority="high" decoding="async" data-nimg="fill"
                        sizes="100vw"
                        srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/>
                    <div className="absolute top-0 left-0 z-20 text-white text-xl pl-6 mt-10">Ласкаво просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full  text-4xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Читаете
                        статьи, разбирайтесь в текстах и контексте, расширяйте своё знание.
                    </div>
                    <div
                        className="flex absolute z-20 w-full max-w-full text-l text-center bottom-5 p-2 text-black font-bold uppercase">
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Вхід</button>
                        <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Почати</button>
                    </div>
                </div>
            </div>

            {isMobile && (
                <button
                    id="scrollRight"
                    onClick={() => scroll("right")}
                    className="ml-4 md:ml-8 border rounded px-2 py-1 md:px-4 md:py-2 hidden"
                >
                    &rarr;
                </button>
            )}
        </div>
    );
};

export default OnboardingSlider;
