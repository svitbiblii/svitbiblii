'use client';

import { ReactNode, useEffect, useState } from 'react';

import { Nav, NavItem } from '@/components/Nav';
import SideBar from '@/components/SideBar';
import { Button } from '@/components/Button';

import { usePage } from '@/context/PageContext';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { PageInterface } from '@/components/pages/root/PageInterface';
import BookmarkPage from '@/components/pages/root/BookmarkPage';
import FavoritePage from '@/components/pages/root/FavoritePage';
import LibraryPage from '@/components/pages/root/LibraryPage';
import RoutePage from '@/components/pages/root/RoutePage';
import SearchPage from '@/components/pages/root/SearchPage';
import AdminPage from '@/components/pages/root/AdminPage';

import { SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const navPages: PageInterface[] = [
	SearchPage,
	BookmarkPage,
	FavoritePage,
	LibraryPage,
	RoutePage,
	AdminPage,
];

export default function PageRenderer({ page }: { page: PageInterface }): ReactNode {
	const router = useRouter();
	useEffect(() => {
		router.prefetch('/admin');
		router.prefetch('/library');
		router.prefetch('/roads');
	}, [router]);

	const { setPage } = usePage();
	const [isSideBarVisible, setSideBarVisibility] = useState<boolean>(false);
	useEffect(() => {
		setPage(page);
	}, [page, setPage]);

	return (
		<div className="flex-1 flex">
			<aside className="flex">
				<Nav>
					{navPages.map((p: PageInterface) => {
						const isCurrent = page.id == p.id;
						return (
							<NavItem
								key={p.id}
								href={p.href}
								className={`flex items-center justify-center mx-auto size-10 rounded-md ${isCurrent ? 'bg-primary' : ''}`} // TODO: change logic for selected
							>
								{p.icon &&
									(() => {
										return (
											<p.icon
												size={32}
												className={
													isCurrent ? 'text-white' : 'text-primary'
												}
											/>
										);
									})()}
							</NavItem>
						);
					})}
				</Nav>

				{page.sidebarContent && (
					<div className="relative">
						{isSideBarVisible && (
							<SideBar className="flex flex-col">
								<>
									{page.sidebarAlertMessage && ( // additionaly check if user is logged in
										<SignedOut>
											<span className="text-red-600 text-center text-sm">
												{page.sidebarAlertMessage}
											</span>
											<Button
												className="w-2/3 mx-auto"
												// onClick={() => setShowAuthForm(true)}
											>
												Sign In / Sign Up
											</Button>
										</SignedOut>
									)}

									{page.sidebarTitle && (
										<h2 className="px-2 py-3 my-3 text-left text-base text-primary font-semibold border-b border-primary">
											{page.sidebarTitle}
										</h2>
									)}

									{<page.sidebarContent />}
								</>
							</SideBar>
						)}

						<Button
							className="absolute top-[.5em] left-[calc(100%+.5em)] p-0 h-auto"
							// size="sm"
							onClick={() => setSideBarVisibility(!isSideBarVisible)}
						>
							{isSideBarVisible ? (
								<MdOutlineKeyboardArrowLeft size={24} />
							) : (
								<MdOutlineKeyboardArrowRight size={24} />
							)}
						</Button>
					</div>
				)}
			</aside>
			<main className="flex-1 p-4">{<page.content />}</main>
			<aside>
				<Nav>
					<></>
				</Nav>
			</aside>
		</div>
	);
}
