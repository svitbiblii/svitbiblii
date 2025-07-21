import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export interface NavLinkItemDTO { 
    id: string;
    href: string;
    title: string;
    icon?: IconType | ReactNode; 
}
