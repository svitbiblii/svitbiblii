'use client';

import { Link } from '@/i18n/routing';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation'; 
import Logo from '@/assets/svg/logogoryzont.svg';
import { Button } from './Button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { LocaleSelect } from '@/components/LocaleSelect';
import authAPI from '@/api/auth.api'; // authAPI.sync() має бути на клієнті?
import { NavLinkItemDTO } from '@/types/nav-link.dto';
import { getPathWithoutLocale } from '../lib/paths';

const navLinks: NavLinkItemDTO[] = [
    { id: 'about', href: '/about', title: 'About us' },
];

export default function Header(): ReactNode {
    const pathname = usePathname(); 
	const currentPathWithoutLocale = getPathWithoutLocale(pathname);
    
     authAPI.sync(); // зараз він виконується при кожному рендері і видає помилку. 
	 // 				Доробити?

    return (
        <header className="px-3 h-16 grid items-center grid-cols-10 shadow-md relative z-30">
            <Link href="/home">
                <Logo className="mb-0" width={200} />
            </Link>
            <div className="col-span-8 flex items-center justify-center gap-x-2">
                {navLinks.map((p: NavLinkItemDTO) => {
                    const isCurrent = currentPathWithoutLocale === p.href;
                    return (
                        <Link key={p.id} href={p.href}>
                            <Button variant={isCurrent ? 'default' : 'ghost'}>
                                {p.title}
                            </Button>
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

