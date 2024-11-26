"use client";

import { useRef, useEffect, useState } from "react";
import {Images} from "lucide-react";
import Image from "next/image";

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
        <div className="flex items-center text-xl h-full lg:h-auto w-full lg:pb-12">
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
                className={`flex w-full h-full lg:h-auto items-center justify-between overflow-hidden ${
                    isMobile ? "scrollbar-hide" : ""
                }`}
                onScroll={updateArrows}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                <a href="/" className="lg:hidden absolute rounded-3xl z-20 w-[calc(100%-50px)] md:w-1/2 lg:w-5/6 left-0 md:left-1/4 lg:left-5 text-l text-center bottom-9 bg-white ml-6 md:ml-0 p-3 lg:p-2 text-black font-bold uppercase">Почати...</a>
                <div className="min-w-full lg:min-w-[calc(33.33%-40px)] h-full lg:h-auto relative lg:mx-4">
                    <Image
                        className="w-full h-full lg:h-auto lg:rounded-xl"
                        src="/images/back_left.jpg"
                        width={600}
                        height={400}
                        alt="image-about-page"/>

                    <div className="flex absolute z-20 lg:hidden top-2 left-0 w-full">
                        <div className="w-1/3 h-1 bg-gray-300 mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                    </div>
                    <div
                        className="lg:hidden absolute top-0 left-0 z-20 text-white text-xl pl-6 md:pl-12 lg:pl-6 mt-10">Ласкаво
                        просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full w-9/12 lg:w-full text-2xl md:text-4xl lg:text-2xl top-24 lg:top-0 left-0 pt-6 pl-6 md:pl-12 lg:pl-6 pr-10 text-white font-bold leading-normal uppercase">
                        Використовуйте строку пошуку, щоб знайти цікаві теми або біблійні вірши.
                    </div>
                    <div
                        className="absolute rounded-3xl z-20 w-[calc(100%-50px)] md:w-1/2 lg:w-5/6 left-0 md:left-1/4 lg:left-5 text-l text-center bottom-28 lg:bottom-9 bg-white bg-opacity-50 shadow ml-6 md:ml-0 p-3 lg:p-2 text-black font-bold uppercase">Пошук...<span
                        className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></span>
                    </div>
                </div>
                <div className="min-w-full lg:min-w-[calc(33.33%-40px)] h-full lg:h-auto relative lg:mx-4">
                    <Image
                        className="w-full h-full lg:h-auto lg:rounded-xl"
                        src="/images/back_center.jpg"
                        width={600}
                        height={400}
                        alt="image-about-page"/>

                    <div className="flex absolute z-20 lg:hidden top-2 left-0 w-full">
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-gray-300 mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                    </div>
                    <div
                        className="lg:hidden absolute top-0 left-0 z-20 text-white text-xl pl-6 md:pl-12 lg:pl-6 mt-10">Ласкаво
                        просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full w-9/12 lg:w-full text-2xl md:text-4xl lg:text-2xl top-24 lg:top-0 left-0 pt-6 pl-6 md:pl-12 lg:pl-6 pr-10 text-white font-bold leading-normal uppercase">
                        Читаєте
                        статті, розумійтеся на текстах і контексті, розширюйте своє знання.
                    </div>
                    <div
                        className="absolute rounded-3xl z-20 w-[calc(100%-50px)] md:w-1/2 lg:w-5/6 left-0 md:left-1/4 lg:left-5 text-l text-center bottom-28 lg:bottom-9 bg-white bg-opacity-50 shadow ml-6 md:ml-0 p-3 lg:p-2 text-black font-bold uppercase">Новий
                        заповіт...<span className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></span>
                    </div>
                </div>
                <div className="min-w-full lg:min-w-[calc(33.33%-40px)] h-full lg:h-auto relative lg:mx-4">
                    <Image
                        className="w-full h-full lg:h-auto lg:rounded-xl"
                        src="/images/back_right.jpg"
                        width={600}
                        height={400}
                        alt="image-about-page"/>

                    <div className="flex absolute z-20 lg:hidden top-2 left-0 w-full">
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-white mx-2">&nbsp;</div>
                        <div className="w-1/3 h-1 bg-gray-300 mx-2">&nbsp;</div>
                    </div>
                    <div
                        className="lg:hidden absolute top-0 left-0 z-20 text-white text-xl pl-6 md:pl-12 lg:pl-6 mt-10">Ласкаво
                        просимо у
                        Світ Бібліі
                    </div>
                    <div
                        className="absolute z-20 max-w-full w-9/12 lg:w-full text-2xl md:text-4xl lg:text-2xl top-24 lg:top-0 left-0 pt-6 pl-6 md:pl-12 lg:pl-6 pr-10 text-white font-bold leading-normal uppercase">
                        Зберігайте
                        улюблені матеріали, щоб повернутися до них пізніше.
                    </div>
                    <div
                        className="absolute rounded-3xl z-20 w-[calc(100%-50px)] md:w-1/2 lg:w-5/6 left-0 md:left-1/4 lg:left-5 text-l text-center bottom-28 lg:bottom-9 bg-white bg-opacity-50 shadow ml-6 md:ml-0 p-3 lg:p-2 text-black font-bold uppercase">Зберегти<span
                        className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></span>
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
