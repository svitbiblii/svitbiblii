// import { ReactNode } from 'react';
// import { PageProvider } from '@/context/PageContext';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function Layout({ children }: { children: ReactNode }) {
// 	return (
// 		// <UserProvider>
// 		<PageProvider>
// 			<Header />
// 			{children}
// 			<Footer />
// 		</PageProvider>
// 		// </UserProvider>
// 	);
// }

// src/app/[locale]/(root)/layout.tsx
import { ReactNode } from 'react';
// import { PageProvider } from '@/context/PageContext'; // Більше не потрібен
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideBar from '@/components/SideBar';
import AppSideBar from '@/components/AppSideBar';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        // <UserProvider> - Якщо UserProvider є вашим власним, він має бути тут або вище
        // PageProvider більше не потрібен, оскільки ми переходимо на нативний App Router
        // <PageProvider>
            <div className="flex flex-col min-h-screen"> {/* Забезпечуємо повну висоту і flex-колонку */}
                <Header /> {/* Хедер тепер відображається тут */}
                <div className="flex flex-1"> {/* Основний вміст: сайдбар + контент */}
                    <SideBar>
						<AppSideBar />
					</SideBar>
                    <main className="flex-1 p-4"> {/* Основний контент сторінки */}
                        {children} {/* Тут рендериться вміст поточної сторінки (наприклад, AboutPageContent) */}
                    </main>
                </div>
                <Footer /> {/* Футер тепер відображається тут */}
            </div>
        // </PageProvider>
        // </UserProvider>
    );
}
