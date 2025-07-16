import { ReactNode } from 'react';
import { PageProvider } from '@/context/PageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		// <UserProvider>
		<PageProvider>
			<Header />
			{children}
			<Footer />
		</PageProvider>
		// </UserProvider>
	);
}
