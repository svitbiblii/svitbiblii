import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/src/lib/utils';

const buttonVariants = cva('rounded transition', {
	variants: {
		variant: {
			default: 'bg-primary hover:bg-primary-dark text-white',
			destructive: 'bg-destructive hover:bg-destructive-dark text-white',
			outline:
				'border-2 border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
			premium: 'bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0',
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
