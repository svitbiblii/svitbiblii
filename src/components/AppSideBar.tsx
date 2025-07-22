'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { getPathWithoutLocale } from '../lib/paths';
import { NavLinkItemDTO } from '@/types/nav-link.dto';
import clsx from 'clsx';
import { IoSearchOutline, IoBookmarkOutline, IoStarOutline, IoLibraryOutline } from 'react-icons/io5';
import { TbRouteSquare } from 'react-icons/tb';
import { LiaUserShieldSolid } from 'react-icons/lia';

const sidebarLinks: NavLinkItemDTO[] = [
    { id: 'search', href: '/search', icon: <IoSearchOutline size={32} /> },
    { id: 'bookmark', href: '/bookmark', icon: <IoBookmarkOutline size={32} /> },
    { id: 'favorite', href: '/favorite', icon: <IoStarOutline size={32} /> },
    { id: 'library', href: '/library', icon: <IoLibraryOutline size={32} /> },
    { id: 'route', href: '/route', icon: <TbRouteSquare size={32} /> },
    { id: 'admin', href: '/admin', icon: <LiaUserShieldSolid size={32} /> },
];

export default function AppSideBar(): ReactNode {
    const pathname = usePathname();
    const currentPathWithoutLocale = getPathWithoutLocale(pathname);

    return (
            <nav className="flex flex-col gap-y-3 w-full">
                {sidebarLinks.map((p: NavLinkItemDTO) => {
                    const isCurrent = currentPathWithoutLocale === p.href;
                    return (
                        <Link 
							key={p.id} 
							href={p.href}
							className={clsx( // Використовуємо clsx для об'єднання класів
                            'flex items-center justify-center mx-auto size-10 rounded-md transition-colors duration-200',
                            isCurrent ? 'bg-primary text-white' : 'text-primary' // Збережено ваші кольори
                        )}
						>
                            {p.icon}
                        </Link>
                    );
                })}
            </nav>
    );
}