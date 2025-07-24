import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideBar from '@/components/SideBar';
import AppSideBar from '@/components/AppSideBar';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <SideBar>
                    <AppSideBar />
                </SideBar>
                {children}
            </div>
            <Footer />
        </div>
    );
}
