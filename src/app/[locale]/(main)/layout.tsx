import { ReactNode } from 'react';
import { PageProvider } from '@/context/PageContext';
import { UserProvider } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<UserProvider>
			<PageProvider>
				<Header />
				{children}
				<Footer />
			</PageProvider>
		</UserProvider>
	);
}
