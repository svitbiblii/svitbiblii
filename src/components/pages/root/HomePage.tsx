'use client';

import { ReactNode } from 'react';
import { PageInterface } from '@/components/pages/root/PageInterface';

const outputIcon = (): ReactNode => {
	return <i>home</i>;
};

const outputSidebarContent = (): ReactNode => {
	return (
		<ul>
			<li>1. Про проект</li>
			<li>2. Як це працює</li>
		</ul>
	);
};

const outputContent = (): ReactNode => {
	return (
		<div>
			<h1>Welcome to Home</h1>
			<p>Це головна сторінка</p>
		</div>
	);
};

const Page: PageInterface = {
	id: 'home',
	href: '/home',
	icon: outputIcon,
	sidebarContent: outputSidebarContent,
	content: outputContent,
};

export default Page;
