'use client';

import { Send, Mail, Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer = () => {
	const t = useTranslations('Footer');

	return (
		<div className="flex flex-wrap justify-around p-6 text-center mt-5">
			<a
				href="mailto:mediaglagol@gmail.com"
				className="flex items-center space-x-2 hover:text-primary-dark transition"
			>
				<Mail className="w-5 h-5" />
				<span>{t('email')}</span>
			</a>

			<a
				href="https://www.facebook.com"
				target="_blank"
				className="flex items-center space-x-2 hover:text-primary-dark transition"
			>
				<Facebook className="w-5 h-5" />
				<span>{t('facebook')}</span>
			</a>

			<a
				href="https://t.me/"
				target="_blank"
				className="flex items-center space-x-2 hover:text-primary-dark transition"
			>
				<Send className="w-5 h-5" />
				<span>{t('telegram')}</span>
			</a>
		</div>
	);
};
