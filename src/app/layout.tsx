import '@/src/app/globals.css';

import { ReactNode } from 'react';
import { ThemeProvider } from '../../components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';

import { getMessages } from 'next-intl/server';

export default async function Layout({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<ThemeProvider>
					<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
