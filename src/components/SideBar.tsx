'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface SideBarProps {
    children?: ReactNode;
    className?: string;
}

export default function SideBar({ children, className }: SideBarProps): ReactNode {
    return (
        <aside
            className={clsx(
                'w-12 h-full py-3 shadow-md',
                className 
            )}
        >
            {children}
        </aside>
    );
}
