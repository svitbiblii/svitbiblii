'use client';

import { ReactNode } from 'react';

import { Nav, NavItem } from '@/components/Nav';
import SideBar from '@/components/SideBar';
import { Button } from '@/components/Button';

import { PageInterface } from '@/pages/main/PageInterface';
import { usePage } from '@/context/PageContext';

import BookmarkPage from '@/pages/main/BookmarkPage';
import FavoritePage from '@/pages/main/FavoritePage';
import LibraryPage from '@/pages/main/LibraryPage';
import RoutePage from '@/pages/main/RoutePage';
import SearchPage from '@/pages/main/SearchPage';
import { SignedOut } from '@clerk/nextjs';

const navPages: PageInterface[] = [SearchPage, BookmarkPage, FavoritePage, LibraryPage, RoutePage];

export default function PageRenderer({ page }: { page: PageInterface }): ReactNode {
	const { setPage } = usePage();
	setPage(page);

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
										const Icon = p.icon;
										return (
											<Icon
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

							{page.sidebarContent}
						</>
					</SideBar>
				)}
			</aside>
			<main className="flex-1">{page.content()}</main>
			<aside>
				<Nav>
					<></>
				</Nav>
			</aside>
		</div>
	);
}
