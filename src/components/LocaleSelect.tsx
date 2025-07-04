'use client';

import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';

export const LocaleSelect = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname(); // без locale

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value;

		startTransition(() => {
			router.push(pathname, { locale: newLocale });
		});
	};

	return (
		<label className="rounded">
			<select
				className="bg-transparent text-muted-foreground text-base py-2"
				defaultValue={locale}
				onChange={handleChange}
				disabled={isPending}
			>
				<option value="uk">UK</option>
				<option value="en">EN</option>
			</select>
		</label>
	);
};
