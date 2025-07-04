import '@/src/app/globals.css';

import { ReactNode } from 'react';
import { ThemeProvider } from '../../components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';

import { getMessages } from 'next-intl/server';
import { ClerkProvider } from '@clerk/nextjs';

export default async function Layout({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages();

	return (
		<ClerkProvider>
			<html lang={locale} suppressHydrationWarning>
				<body className="flex flex-col min-h-screen">
					<ThemeProvider>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
