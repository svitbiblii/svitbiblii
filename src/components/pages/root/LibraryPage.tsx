'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';
import { IoLibraryOutline } from 'react-icons/io5';
// import { BiSolidBible } from "react-icons/bi";

const outputSidebarContent = (): ReactNode => {
	return <></>;
};

const outputContent = (): ReactNode => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
			<h1 className="text-3xl font-bold text-primary mb-8">Бібліотека</h1>
			
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full">
				<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
					Словник біблійного богослов'я
				</h2>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
					Комплексний довідник з біблійного богослов'я у форматі PDF
				</p>
				<a
					href="/uploads/slovnyk-bibliynogo-bohoslovya.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
				>
					<svg 
						className="w-5 h-5 mr-2" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth={2} 
							d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
						/>
					</svg>
					Словник біблійного богослов'я у форматі PDF
				</a>
			</div>
		</div>
	);
};

const Page: PageInterface = {
	id: 'library',
	href: '/library',
	icon: IoLibraryOutline,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
