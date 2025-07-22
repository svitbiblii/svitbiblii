import { ReactNode } from 'react';

export interface NavLinkItemDTO { 
    id: string;
    href: string;
    title?: string;
    icon?: ReactNode; 
}
