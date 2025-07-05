import createIntlMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createIntlMiddleware(routing);
const authMiddleware = clerkMiddleware();

export default function middleware(req: NextRequest, event: NextFetchEvent) {
	const url = new URL(req.url);

	if (url.pathname === '/') {
		url.pathname = '/en/home';
		return NextResponse.redirect(url);
	}

	intlMiddleware(req);

	return authMiddleware(req, event);
}

export const config = {
	matcher: ['/', '/(uk|en)/:path*', '/(api|trpc)(.*)'],
};
