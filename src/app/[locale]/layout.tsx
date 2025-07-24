import '@/src/app/globals.css';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat, Playfair_Display } from 'next/font/google';


const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair-display',
});
export default async function Layout({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	const messages = await getMessages({ locale });

	return (
		<ClerkProvider>
			<html lang={locale} className={`${montserrat.variable} ${playfair.variable}`} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<ThemeProvider>
						<NextIntlClientProvider locale={locale} messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
