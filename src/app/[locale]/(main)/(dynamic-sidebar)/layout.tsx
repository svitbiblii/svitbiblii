'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import PageDynamicSidebar from '@/components/PageDynamicSidebar';
import { getPathWithoutLocale } from '@/src/lib/paths';
import SearchDynamicSidebarContent from '@/components/sidebar-content/SearchDynamicSidebarContent';
import HomeDynamicSidebarContent from '@/components/sidebar-content/HomeDynamicSidebarContent';
import BookmarkDynamicSidebarContent from '@/src/components/sidebar-content/BookmarkDynamicSidebarContent';
import AdminDynamicSidebarContent from '@/src/components/sidebar-content/AdminDynamicSidebarContent';

interface DynamicSidebarLayoutProps {
    children: ReactNode;
}
const sidebarContentMap: Record<string, React.ComponentType | null> = {
    '/search': SearchDynamicSidebarContent,
    '/home': HomeDynamicSidebarContent,
    '/bookmark': BookmarkDynamicSidebarContent,
    '/admin': AdminDynamicSidebarContent
};

export default function DynamicSidebarLayout({ children }: DynamicSidebarLayoutProps) {
    const pathname = usePathname(); 
    
    const currentBasePath = getPathWithoutLocale(pathname);

    const CurrentSidebarContent = sidebarContentMap[currentBasePath] || null;

    return (
        <div className="flex flex-1"> 
            {CurrentSidebarContent && (
                <PageDynamicSidebar>
                    <CurrentSidebarContent />
                </PageDynamicSidebar>
            )}
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
}
