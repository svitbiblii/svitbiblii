import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton({
	scrollContainerRef,
}: {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
}) {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const container = scrollContainerRef.current;

		if (!container) return;

		const toggleVisibility = () => {
			setIsVisible(container.scrollTop > 300);
		};

		container.addEventListener('scroll', toggleVisibility);
		return () => container.removeEventListener('scroll', toggleVisibility);
	}, [scrollContainerRef]);

	return (
		<div>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
				>
					<ArrowUp size={24} />
				</button>
			)}
		</div>
	);
}
