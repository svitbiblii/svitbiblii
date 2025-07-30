/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ComponentType } from 'react';
// import { IconType } from 'react-icons/lib';

export interface PageInterface {
	id: string;
	href: string;
	title?: string;
	icon?: ComponentType<any>;
	sidebarTitle?: string;
	sidebarAlertMessage?: string;
	sidebarContent?: ComponentType<any>;
	content: ComponentType<any>;
}
