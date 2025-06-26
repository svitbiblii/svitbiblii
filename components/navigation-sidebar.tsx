'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import { useNavigation } from '@/lib/navigation-context'; // Імпорт useNavigation
import { useState } from 'react';
import ArrowLeftIcon from './icons/arrowLeftIcon';
import ArrowRightIcon from './icons/arrowRightIcon';

export default function NavigationSidebar() {
	const t = useTranslations('HistoryComponent');
	const { historyItems, clearHistory } = useNavigation(); // Отримуємо historyItems та clearHistory з контексту
	const pathname = usePathname();
	const [expanded, setExpanded] = useState(false);
	const [showContent, setShowContent] = useState(false);

	const sidebarWidthClass = expanded ? 'w-72 min-w-72 shadow-lg' : 'w-8 min-w-8';
	const buttonLeftPositionClass = expanded ? 'left-60' : 'left-1';

	const normalizePath = (path: string) => {
		if (path === '/') return '/';
		return path.endsWith('/') ? path.slice(0, -1) : path;
	};

	const isActive = (itemLinkFromHistory: string) => {
		const currentPathWithoutLocaleAndParams = pathname
			.replace(/^\/(uk|en)/, '')
			.split('#')[0]
			.split('?')[0];

		const itemLinkWithoutLocaleAndParams = itemLinkFromHistory
			.replace(/^\/(uk|en)/, '')
			.split('#')[0]
			.split('?')[0];

		const finalCurrentPath = normalizePath(currentPathWithoutLocaleAndParams);
		const finalItemPath = normalizePath(itemLinkWithoutLocaleAndParams);

		return finalCurrentPath === finalItemPath;
	};

	const normalizedCurrentPath = normalizePath(
		pathname
			.replace(/^\/(uk|en)/, '')
			.split('#')[0]
			.split('?')[0]
	);

	let mainSidebarContent;

	// --- ЛОГІКА УМОВНОГО РЕНДЕРИНГУ ОСНОВНОГО ВМІСТУ В ЗАЛЕЖНОСТІ ВІД ШЛЯХУ ---
	if (normalizedCurrentPath.startsWith('/library') || normalizedCurrentPath === '/') {
		mainSidebarContent = // Присвоюємо JSX-вираз
			(
				<>
					<div className="px-6 pt-1 pb-8">
						<div className="py-2 flex justify-between font-medium">
							<button
								className={`w-1/2 text-center py-2 rounded-t-lg transition-colors ${!showContent ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:bg-primary-lite'}`}
								onClick={() => setShowContent(false)}
							>
								{t('navigator')}
							</button>
							<button
								className={`w-1/2 text-center py-2 rounded-t-lg transition-colors ${showContent ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:bg-primary-lite'}`}
								onClick={() => setShowContent(true)}
							>
								{t('content')}
							</button>
						</div>

						{showContent ? (
							<div className="overflow-y-auto max-h-[calc(100vh-180px)]">
								<p className="space-y-2 p-2 text-gray-600 dark:text-white">
									{t('content-text')}
								</p>
							</div>
						) : (
							<div className="overflow-y-auto max-h-[calc(100vh-180px)]">
								{historyItems.length > 0 ? (
									<ul className="list-none pl-0">
										{[...historyItems].reverse().map((item) => (
											<li key={item.id} className="mb-2">
												<Link
													href={item.link.split('#')[0].split('?')[0]}
													className={`block py-1 px-3 rounded-lg hover:bg-primary-lite transition-colors duration-200 ${
														isActive(item.link)
															? 'text-primary bg-primary-lite font-semibold'
															: 'text-muted-foreground'
													}`}
												>
													<p className="italic">{item.author}</p>
													<p className="font-bold">- {item.title}</p>
												</Link>
											</li>
										))}
									</ul>
								) : (
									<div>
										<p className="space-y-2 p-2 text-gray-600 dark:text-white">
											{t('noHistory')}
										</p>
									</div>
								)}
								{historyItems.length > 0 && (
									<button
										onClick={clearHistory}
										className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors"
									>
										{t('clearHistory')}
									</button>
								)}
							</div>
						)}
					</div>
				</>
			);
	} else if (normalizedCurrentPath === '/bookmark') {
		mainSidebarContent = (
			<div className="px-6 pt-1 pb-8">
				<h3 className="text-xl font-bold mb-4">{t('bookmarksTitle')}</h3>
				<p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('noBookmarks')}</p>
			</div>
		);
	} else if (normalizedCurrentPath === '/favorites') {
		mainSidebarContent = (
			<div className="px-6 pt-1 pb-8">
				<h3 className="text-xl font-bold mb-4">{t('favoritesTitle')}</h3>
				<p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('noFavorites')}</p>
			</div>
		);
	} else if (normalizedCurrentPath === '/route') {
		mainSidebarContent = (
			<div className="px-6 pt-1 pb-8">
				<h3 className="text-xl font-bold mb-4">{t('routesTitle')}</h3>
				<p className="space-y-2 p-2 text-gray-600 dark:text-white">{t('noRoutes')}</p>
			</div>
		);
		//   } else if (normalizedCurrentPath === '/') {
		//     mainSidebarContent = (
		//       <div className="px-6 pt-1 pb-8">
		//         <h3 className="text-xl font-bold mb-4">{t("searchTitle")}</h3>
		//         <p className="space-y-2 p-2 text-gray-600 dark:text-white">{t("searchPlaceholder")}</p>
		//       </div>
		//     );
	} else {
		mainSidebarContent = (
			<div className="px-6 pt-1 pb-8">
				<h3 className="text-xl font-bold mb-4">{t('defaultSidebarTitle')}</h3>
				<p className="space-y-2 p-2 text-gray-600 dark:text-white">
					{t('defaultSidebarContent')}
				</p>
			</div>
		);
	}

	return (
		<div
			className={`relative h-screen ${sidebarWidthClass} overflow-y-auto pb-12 transition-all duration-300 ease-in-out bg-card`}
		>
			<button
				onClick={() => setExpanded((curr) => !curr)}
				className={`absolute top-4 z-20 ${buttonLeftPositionClass} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-secondary dark:hover:bg-gray-600`}
				aria-label={expanded ? t('collapseSidebar') : t('expandSidebar')}
			>
				{expanded ? (
					<ArrowLeftIcon className="w-5 h-5 text-primary" title={t('collapseSidebar')} />
				) : (
					<ArrowRightIcon className="w-5 h-5 text-primary" title={t('expandSidebar')} />
				)}
			</button>

			{expanded && ( // Рендеримо вміст сайдбару лише якщо він розгорнутий
				<div className="pt-12">
					{' '}
					{/* Додано відступ зверху, щоб уникнути перекриття кнопкою */}
					{mainSidebarContent}
				</div>
			)}
		</div>
	);
}
