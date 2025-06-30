import { ReactNode } from 'react';

export default function SideBar({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}): ReactNode {
	return <div className={`w-96 h-full px-2 py-3 shadow-md ${className || ''}`}>{children}</div>;
}
