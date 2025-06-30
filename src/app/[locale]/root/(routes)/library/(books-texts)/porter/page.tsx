'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useNavigation } from '@/src/lib/navigation-context';
import { BOOKS_DATA } from '@/books-data_for-del';

export default function PorterPage() {
	const t = useTranslations('BookContents');

	const { addBookToHistory } = useNavigation();
	const currentBookLink = '/library/porter';
	const [bookContent, setBookContent] = useState<any>(null);

	useEffect(() => {
		if (!bookContent) {
			const foundBook = BOOKS_DATA.find((item) => item.link === currentBookLink);

			if (foundBook) {
				setBookContent(foundBook);
				addBookToHistory(foundBook.id);
			} else {
				setBookContent(null);
			}
		}
	}, [bookContent, addBookToHistory, currentBookLink]);

	if (!bookContent) {
		return <div>{t('loading')}</div>;
	}

	return (
		<div className="h-min-full flex">
			<div className=" p-10  py-8 px-4  w-full mx-auto min-h-screen">
				<h2>Поліанна Елеонор Портер</h2>
				<section id="section1">
					<h3>Міс Полі</h3>
					<p>
						Того червневого ранку міс Полі Гаррінґтон квапливо увійшла до кухні.
						Зазвичай вона робила все поволі й пишалася своєю стриманістю. Але сьогодні
						вона поспішала. Справді поспішала.
					</p>
					<p>
						Ненсі, миючи посуд у мийниці, здивовано підвела на неї очі. Ненсі працювала
						у міс Полі кухаркою лише два місяці, але вже звикла до того, що її господиня
						ніколи нікуди не поспішає. А тут?
					</p>
					<p>– Ненсі</p>
					<p>– Так, мем, – весело відповіла Ненсі, продовжуючи витирати глечик.</p>
					<p>
						– Ненсі, – голос міс Полі став дуже суворим, – коли я звертаюся до тебе, я
						хочу, щоб ти припинила роботу і уважно мене вислухала.
					</p>
					<p>
						Ненсі ніяково зашарілася. І як тримала глечик обгорнутим у рушник, так
						мерщій і поставила, ледве його не перекинувши, на стіл. Через це вона
						знітилася ще більше.
					</p>
				</section>
			</div>
		</div>
	);
}
