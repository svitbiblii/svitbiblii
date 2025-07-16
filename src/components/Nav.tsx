import { Link } from '@/i18n/routing';
import { ReactNode } from 'react';

export function Nav({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}): ReactNode {
	return (
		<nav
			className={`w-12 h-full py-3 shadow-md flex flex-col align-center gap-y-3 ${className || ''}`}
		>
			{children}
		</nav>
	);
}

export function NavItem({
	children,
	className,
	href = '#',
}: {
	children: ReactNode;
	className?: string;
	href: string;
}): ReactNode {
	return (
		<Link className={className} href={href}>
			{children}
		</Link>
	);
}
