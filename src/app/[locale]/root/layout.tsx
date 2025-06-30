// 'use client';

// import { Navbar } from '@/components/navbar';
// // import { Footer } from '@/components/footer';
// // import { useRef, useEffect, useState } from 'react';
// // import ScrollToTopButton from '@/components/ScrollToTopButton';
// // import { NavigationProvider } from '@/lib/navigation-context';
// // import Sidebar from '@/components/sidebar';
// // import NavigationSidebar from '@/components/navigation-sidebar';

// const HomeLayout = ({ children }: { children: React.ReactNode }) => {
// 	const scrollContainerRef = useRef<HTMLDivElement>(null);
// 	const navbarRef = useRef<HTMLDivElement>(null);
// 	const [navbarHeight, setNavbarHeight] = useState(0);

// 	useEffect(() => {
// 		const updateLayout = () => {
// 			if (navbarRef.current && scrollContainerRef.current) {
// 				const height = navbarRef.current.offsetHeight;
// 				setNavbarHeight(height);
// 				scrollContainerRef.current.style.height = `calc(100vh - ${height}px)`;
// 			}
// 		};

// 		updateLayout();

// 		window.addEventListener('resize', updateLayout);

// 		return () => {
// 			window.removeEventListener('resize', updateLayout);
// 		};
// 	}, []);

// 	return (
// 		<NavigationProvider>
// 			{' '}
// 			{/* Обгортаємо весь вміст провайдером */}
// 			<div className="h-min-full flex flex-col">
// 				<Navbar ref={navbarRef} />
// 				<div
// 					ref={scrollContainerRef}
// 					className="flex-grow w-full shadow-lg"
// 					style={{ height: `calc(100vh - ${navbarHeight}px)` }}
// 				>
// 					<div className="flex h-full">
// 						<Sidebar />
// 						<NavigationSidebar />
// 						<main className="flex-1 overflow-y-auto">
// 							{children}
// 							<Footer />
// 						</main>
// 					</div>
// 					<ScrollToTopButton scrollContainerRef={scrollContainerRef} />
// 				</div>
// 			</div>
// 		</NavigationProvider>
// 	);
// };

// export default HomeLayout;
