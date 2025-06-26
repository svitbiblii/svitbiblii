/*export const CATEGORIES = [
    { id: "all", name: "Всі" },
    { id: "bibl", name: "Біблія" },
    { id: "cloud", name: "Хмара біблійного передання" },
    { id: "bibl_studies", name: "Біблеїстика" },
    { id: "patrist", name: "Патристика" },
    { id: "phy_hist", name: "Філософія і Історія" },
    { id: "diction", name: "Словники та Енциклопедії" },
    { id: "theology", name: "Богослов'я" },
];*/
'use client';

import { useTranslations } from 'next-intl';

export const CATEGORIES = () => {
	const t = useTranslations('CategoryComponent');

	return [
		{ id: 'all', name: t('all') },
		{ id: 'bibl', name: t('bibl') },
		{ id: 'cloud', name: t('cloud') },
		{ id: 'bibl_studies', name: t('bibl_studies') },
		{ id: 'patrist', name: t('patrist') },
		{ id: 'phy_hist', name: t('phy_hist') },
		{ id: 'diction', name: t('diction') },
		{ id: 'theology', name: t('theology') },
	];
};
