import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideBar from '@/components/SideBar';
import AppSideBar from '@/components/AppSideBar';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
		// <UserProvider>
            <div className="flex flex-col min-h-screen"> 
                <Header /> 
                <div className="flex flex-1"> 
                    <SideBar>
						<AppSideBar />
					</SideBar>
                    <main className="flex-1 p-4"> 
                        {children}
                    </main>
                </div>
                <Footer /> 
            </div>
		// </UserProvider>
    );
}
