import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Playfair_Display, Montserrat } from 'next/font/google';

// Конфігурація Playfair Display для заголовків
const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-playfair-display',
});

// Конфігурація Montserrat для рядового тексту та кнопок
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "svitbiblii",
  description: "About Svit Biblii",
};
                                  
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth overflow-hidden">
      <body id="book-content" className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${montserrat.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
