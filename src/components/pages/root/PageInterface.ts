'use client';

import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export interface PageInterface {
	id: string;
	href: string;
	title?: string;
	icon?: IconType; // specify the type of custom icon component
	sidebarTitle?: string;
	sidebarAlertMessage?: string;
	sidebarContent?: () => ReactNode;
	content: () => ReactNode;
}
