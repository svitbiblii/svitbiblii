'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface PageDynamicSidebarProps {
    children?: ReactNode;
    className?: string;
}

export default function PageDynamicSidebar({ children, className }: PageDynamicSidebarProps): ReactNode {
    return (
        <aside
            className={clsx(
                'w-96 h-full px-2 py-3 shadow-md',
                'flex flex-col gap-y-3 p-2 overflow-y-auto',
                className
            )}
            style={{ minWidth: '16rem' }}
        >
            {children}
        </aside>
    );
}
