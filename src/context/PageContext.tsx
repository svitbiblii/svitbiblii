'use client';

import { createContext, useContext, ReactNode } from 'react';
import { PageInterface } from '@/pages/root/PageInterface';

interface PageContextValue {
	page: PageInterface | null;
	setPage: (page: PageInterface) => void;
}

const PageContext = createContext<PageContextValue | undefined>(undefined);

import { useState } from 'react';

export function PageProvider({ children }: { children: ReactNode }) {
	const [page, setPage] = useState<PageInterface | null>(null);

	return <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>;
}

export function usePage() {
	const context = useContext(PageContext);
	if (!context) throw new Error('usePage must be used within PageProvider');
	return context;
}
