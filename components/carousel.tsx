// components/Carousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
	image: string;
	text: string;
	prev: string;
	ico: JSX.Element;
	doubleBtn: JSX.Element;
}

interface CarouselProps {
	slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleSlides, setVisibleSlides] = useState(1);

	// Update visibleSlides based on screen size
	useEffect(() => {
		const updateVisibleSlides = () => {
			setVisibleSlides(window.innerWidth <= 1023 ? 1 : 3);
		};

		updateVisibleSlides(); // Set initial value
		window.addEventListener('resize', updateVisibleSlides);

		return () => window.removeEventListener('resize', updateVisibleSlides);
	}, []);

	/*useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000); // Change slides every 2 seconds

        return () => clearInterval(interval);
    }, [slides.length]);*/

	const getVisibleSlides = () => {
		return slides
			.slice(currentIndex, currentIndex + visibleSlides)
			.concat(slides.slice(0, Math.max(0, currentIndex + visibleSlides - slides.length)));
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="relative w-full">
			<div className="flex h-screen w-full lg:h-h-122 items-center justify-between lg:-ml-6">
				{getVisibleSlides().map((slide, index) => (
					<div key={index} className="slide">
						<Image
							className="lg:rounded-2xl"
							src={slide.image}
							alt={slide.text}
							layout="fill"
							objectFit="cover"
							priority={index === 0}
						/>
						<div className="lg:hidden relative z-20 text-white text-xl pl-6 mt-10">
							Ласкаво просимо в Світ Бібліі
						</div>
						<div className="absolute z-20 max-w-full  text-4xl lg:text-xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">
							{slide.text}
						</div>
						<div className="hidden lg:block absolute rounded-3xl z-20 w-5/6 max-w-full text-l text-center bottom-5 bg-white left-5 p-2 text-black font-bold uppercase">
							{slide.prev}
							<span className="inline-block w-5 ml-3.5 relative top-0.5">
								{slide.ico}
							</span>
						</div>
						<div className="lg:hidden absolute z-30 w-full max-w-full text-l text-center bottom-5 p-2 text-black font-bold uppercase">
							{slide.doubleBtn}
						</div>
					</div>
				))}
			</div>

			{/* Dot indicators */}
			<div className="flex justify-center mt-4 space-x-2 absolute z-30 top-0 lg:relative w-full">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-1/6 h-1 lg:w-3 lg:h-3 lg:rounded-full ${
							index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
