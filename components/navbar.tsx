'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { LangSwitcher } from '@/components/lang-switcher';
import { MobileSidebar } from '@/components/mobile-sidebar';
import { forwardRef, useState } from 'react';
import SideMenu from './side-menu';
import { useTranslations } from 'next-intl';

export const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
	const t = useTranslations('Navbar');

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div
			ref={ref}
			className="w-full z-50 fixed top-0 flex justify-between items-center py-2 px-4 h-16 border-b bg-secondary"
		>
			<div className="flex items-center">
				<MobileSidebar />
				<Link href="/">
					<Image
						className="mb-0"
						src="/images/logogoryzont.svg"
						width={200}
						height={125}
						alt="logo"
					/>
				</Link>
			</div>

			<ul className="list-none  flex text-muted-foreground text-base">
				<li className="mr-4 mb-0 hover:text-primary-dark">
					<Link href="/about-us">{t('aboutus')}</Link>
				</li>
				<li className="mr-4 mb-0 hover:text-primary-dark">
					<Link href="/how-it-works">{t('howitworks')}</Link>
				</li>
				<li className="mr-4 mb-0 hover:text-primary-dark">
					<Link href="">{t('blog')}</Link>
				</li>
				<li className="mr-4 mb-0 hover:text-primary-dark">
					<Link href="">{t('forum')}</Link>
				</li>
				<li className="mb-0 hover:text-primary-dark">
					<Link href="">{t('support')}</Link>
				</li>
			</ul>

			<div className="flex items-center space-x-4">
				<LangSwitcher />

				<button
					className="focus:outline-none"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6 hover:text-primary-dark"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6h8M4 12h16M12 18h8"
							/>
						)}
					</svg>
				</button>
			</div>

			<SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
		</div>
	);
});

Navbar.displayName = 'Navbar';
