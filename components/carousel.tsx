// components/Carousel.tsx
"use client"; // Add this line at the top

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
    image: string;
    text: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    return (
        <div className="relative w-full h-64 overflow-hidden bg-gray-100 rounded-lg">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.text}
                        layout="fill" // Fills the container dimensions
                        objectFit="cover" // Ensures the image covers the container without distortion
                        priority={index === 0} // Loads the first image with priority for faster LCP
                    />
                    <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50">
                        {slide.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
