'use client';

import { Link } from '@/i18n/routing';
import { ReactNode } from 'react';
import { PageInterface } from '@/pages/root/PageInterface';
import { usePage } from '@/src/context/PageContext';
import Logo from '@/assets/svg/logogoryzont.svg';
import HomePage from '@/pages/root/HomePage';
import AboutPage from '@/pages/root/AboutPage';
import { Button } from './Button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { LocaleSelect } from '@/components/LocaleSelect';
import authAPI from '@/api/auth.api';

const navPages: PageInterface[] = [AboutPage];

export default function Header(): ReactNode {
	const { page } = usePage();
	authAPI.sync();
	return (
		<header className="px-3 h-16 grid items-center grid-cols-10 shadow-md relative z-30">
			<Link href={HomePage.href}>
				<Logo className="mb-0" width={200} />
			</Link>
			<div className="col-span-8 flex items-center justify-center gap-x-2">
				{navPages.map((p: PageInterface) => {
					const isCurrent = page && page.id == p.id;
					return (
						<Link key={p.id} href={p.href}>
							<Button variant={isCurrent ? 'default' : 'ghost'}>{p.title}</Button>
						</Link>
					);
				})}
			</div>
			<div className="flex justify-end items-center gap-x-2">
				<div className="w-16">M</div>

				<LocaleSelect />

				<SignedOut>
					<SignInButton mode="modal">Sign in</SignInButton>
				</SignedOut>

				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	);
}
