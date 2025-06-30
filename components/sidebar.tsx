'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import HomeIcon from './icons/homeIcon';
import BooksIcon from './icons/booksIcon';
import BookmarkIcon from './icons/bookmarkIcon';
import RouteIcon from './icons/routeIcon';
import FavoriteIcon from './icons/favoriteIcon';
import SearchIcon from './icons/searchIcon';

function Sidebar() {
	const pathname = usePathname();

	const isActive = (basePath: string) => {
		// Спочатку нормалізуємо `pathname`, видаляючи локаль та потенційні кінцеві слеші
		let currentPathCleaned = pathname.replace(/^\/(uk|en)/, '');

		// Якщо поточний шлях - корінь ('/') і він не закінчується на '/', додамо '/'
		// Це для випадку, коли pathname може бути просто '' після видалення локалі,
		// і ми хочемо, щоб він відповідав '/'
		if (currentPathCleaned === '') {
			currentPathCleaned = '/';
		} else {
			// Видаляємо кінцевий слеш, якщо він є (для консистентності)
			currentPathCleaned =
				currentPathCleaned.endsWith('/') && currentPathCleaned !== '/'
					? currentPathCleaned.slice(0, -1)
					: currentPathCleaned;
		}

		// Для кореневого шляху (/)
		if (basePath === '/') {
			// Корінь активний, якщо поточний шлях /uk або /en (без додаткових сегментів)
			// Або якщо currentPathCleaned сам по собі є '/'
			return pathname === '/uk' || pathname === '/en' || currentPathCleaned === '/';
		}

		// Для інших шляхів, перевіряємо, чи поточний шлях ПОЧИНАЄТЬСЯ з basePath
		// Перед порівнянням, нормалізуємо basePath так само: видаляємо кінцевий слеш
		const normalizedBasePath =
			basePath.endsWith('/') && basePath !== '/' ? basePath.slice(0, -1) : basePath;

		// Перевіряємо, чи поточний шлях починається з базового шляху
		// І також перевіряємо, чи після basePath йде '/' або це повний збіг
		// Це потрібно, щоб '/library' не співпадало з '/library-v2'
		return (
			currentPathCleaned.startsWith(normalizedBasePath) &&
			(currentPathCleaned.length === normalizedBasePath.length || // Точний збіг
				currentPathCleaned[normalizedBasePath.length] === '/')
		); // Або далі йде слеш
	};

    [{ link: '/home', label: 'main', title: 'Головна' }].map();

	return (
		<aside className="w-24 bg-card text-card-foreground p-4 shadow-lg min-h-screen">
			<nav>
				<ul className="space-y-4 list-none p-0 m-0">
					{/* Link для Головної сторінки */}
					<li>
						<Link
							href="/home"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/home') ? ' text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<HomeIcon
								className={`w-6 h-6
                  ${isActive('/home') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Головна сторінка"
							/>
							<span className="text-base font-sans">Головна</span>
						</Link>
					</li>

					<li>
						<Link
							href="/"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<SearchIcon
								className={`w-6 h-6
                  ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Пошук"
							/>
							<span className="text-base font-sans">Пошук</span>
						</Link>
					</li>

					<li>
						<Link
							href="/library"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/library') ? 'text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<BooksIcon
								className={`w-6 h-6
                  ${isActive('/library') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Бібліотека книг"
							/>
							<span className="text-base font-sans">Бібліотека</span>
						</Link>
					</li>

					<li>
						<Link
							href="/bookmark"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/bookmark') ? 'text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<BookmarkIcon
								className={`w-6 h-6
                  ${isActive('/bookmark') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Мої закладки"
							/>
							<span className="text-base font-sans">Закладки</span>
						</Link>
					</li>

					<li>
						<Link
							href="/route"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/route') ? 'text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<RouteIcon
								className={`w-6 h-6
                  ${isActive('/route') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Маршрути"
							/>
							<span className="text-base font-sans">Маршрути</span>
						</Link>
					</li>

					<li>
						<Link
							href="/favorites"
							className={`flex flex-col justify-center items-center gap-1 p-2 rounded-md transition-colors
                ${isActive('/favorites') ? 'text-primary' : 'text-muted-foreground hover:bg-primary-lite'}
              `}
						>
							<FavoriteIcon
								className={`w-6 h-6
                  ${isActive('/favorites') ? 'text-primary' : 'text-muted-foreground'}
                `}
								title="Обрані"
							/>
							<span className="text-base font-sans">Обрані</span>
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
