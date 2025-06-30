'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@/src/lib/navigation-context';
import { BOOKS_DATA } from '@/books-data_for-del';

export default function AvgustineEnPage() {
	const t = useTranslations('BookContents');

	const { addBookToHistory } = useNavigation();
	const confesPart1Ch2Ref = useRef<HTMLHeadingElement>(null);
	const currentBookLink = '/library/avgustine-en';

	const [isHighlighted, setIsHighlighted] = useState(false);
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
		const url = new URL(window.location.href);
		const hash = url.hash;
		const shouldScrollToSection =
			hash.includes('#confes-part1-ch2') && hash.includes('scroll=true');

		if (shouldScrollToSection && confesPart1Ch2Ref.current) {
			const mainElement = document.querySelector('main');

			if (mainElement) {
				mainElement.scrollTop = 0;
			}

			setIsHighlighted(true);

			setTimeout(() => {
				setIsHighlighted(false);
			}, 4000);

			setTimeout(() => {
				confesPart1Ch2Ref.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}, 1500);
		}
	}, [bookContent, addBookToHistory, currentBookLink]);

	if (!bookContent) {
		return <div>{t('loading')}</div>;
	}

	return (
		<div className="h-min-full flex">
			<div className="relative h-full w-full px-4 pt-2 block">
				<div className="w-full">
					<h2 className="pt-0">«Confession» Blessed Augustine </h2>
					<section id="section1">
						<h3>Chapter I</h3>
						<h3>
							He proclaims the greatness of God, whom he desires to seek and invoke,
							being awakened by him.
						</h3>
						<p>
							Great art Thou, O Lord, and greatly to be praised; great is Thy power,
							and Thy wisdom infinite. And Thee would man praise; man, but a particle
							of Thy creation; man, that bears about him his mortality, the witness of
							his sin, the witness that Thou resistest the proud: yet would man praise
							Thee; he, but a particle of Thy creation. Thou awakest us to delight in
							Thy praise; for Thou madest us for Thyself, and our heart is restless,
							until it repose in Thee. Grant me, Lord, to know and understand which is
							first, to call on Thee or to praise Thee? and, again, to know Thee or to
							call on Thee? for who can call on Thee, not knowing Thee? for he that
							knoweth Thee not, may call on Thee as other than Thou art. Or, is it
							rather, that we call on Thee that we may know Thee? but how shall they
							call on Him in whom they have not believed? or how shall they believe
							without a preacher? and they that seek the Lord shall praise Him: for
							they that seek shall find Him, and they that find shall praise Him. I
							will seek Thee, Lord, by calling on Thee; and will call on Thee,
							believing in Thee; for to us hast Thou been preached. My faith, Lord,
							shall call on Thee, which Thou hast given me, wherewith Thou hast
							inspired me, through the Incarnation of Thy Son, through the ministry of
							the Preacher.
						</p>
						{/* ======================================================================== */}

						<p>
							Great art Thou, O Lord, and greatly to be praised; great is Thy power,
							and Thy wisdom infinite. And Thee would man praise; man, but a particle
							of Thy creation; man, that bears about him his mortality, the witness of
							his sin, the witness that Thou resistest the proud: yet would man praise
							Thee; he, but a particle of Thy creation. Thou awakest us to delight in
							Thy praise; for Thou madest us for Thyself, and our heart is restless,
							until it repose in Thee. Grant me, Lord, to know and understand which is
							first, to call on Thee or to praise Thee? and, again, to know Thee or to
							call on Thee? for who can call on Thee, not knowing Thee? for he that
							knoweth Thee not, may call on Thee as other than Thou art. Or, is it
							rather, that we call on Thee that we may know Thee? but how shall they
							call on Him in whom they have not believed? or how shall they believe
							without a preacher? and they that seek the Lord shall praise Him: for
							they that seek shall find Him, and they that find shall praise Him. I
							will seek Thee, Lord, by calling on Thee; and will call on Thee,
							believing in Thee; for to us hast Thou been preached. My faith, Lord,
							shall call on Thee, which Thou hast given me, wherewith Thou hast
							inspired me, through the Incarnation of Thy Son, through the ministry of
							the Preacher.
						</p>
						<p>
							Great art Thou, O Lord, and greatly to be praised; great is Thy power,
							and Thy wisdom infinite. And Thee would man praise; man, but a particle
							of Thy creation; man, that bears about him his mortality, the witness of
							his sin, the witness that Thou resistest the proud: yet would man praise
							Thee; he, but a particle of Thy creation. Thou awakest us to delight in
							Thy praise; for Thou madest us for Thyself, and our heart is restless,
							until it repose in Thee. Grant me, Lord, to know and understand which is
							first, to call on Thee or to praise Thee? and, again, to know Thee or to
							call on Thee? for who can call on Thee, not knowing Thee? for he that
							knoweth Thee not, may call on Thee as other than Thou art. Or, is it
							rather, that we call on Thee that we may know Thee? but how shall they
							call on Him in whom they have not believed? or how shall they believe
							without a preacher? and they that seek the Lord shall praise Him: for
							they that seek shall find Him, and they that find shall praise Him. I
							will seek Thee, Lord, by calling on Thee; and will call on Thee,
							believing in Thee; for to us hast Thou been preached. My faith, Lord,
							shall call on Thee, which Thou hast given me, wherewith Thou hast
							inspired me, through the Incarnation of Thy Son, through the ministry of
							the Preacher.
						</p>
						<p>
							Great art Thou, O Lord, and greatly to be praised; great is Thy power,
							and Thy wisdom infinite. And Thee would man praise; man, but a particle
							of Thy creation; man, that bears about him his mortality, the witness of
							his sin, the witness that Thou resistest the proud: yet would man praise
							Thee; he, but a particle of Thy creation. Thou awakest us to delight in
							Thy praise; for Thou madest us for Thyself, and our heart is restless,
							until it repose in Thee. Grant me, Lord, to know and understand which is
							first, to call on Thee or to praise Thee? and, again, to know Thee or to
							call on Thee? for who can call on Thee, not knowing Thee? for he that
							knoweth Thee not, may call on Thee as other than Thou art. Or, is it
							rather, that we call on Thee that we may know Thee? but how shall they
							call on Him in whom they have not believed? or how shall they believe
							without a preacher? and they that seek the Lord shall praise Him: for
							they that seek shall find Him, and they that find shall praise Him. I
							will seek Thee, Lord, by calling on Thee; and will call on Thee,
							believing in Thee; for to us hast Thou been preached. My faith, Lord,
							shall call on Thee, which Thou hast given me, wherewith Thou hast
							inspired me, through the Incarnation of Thy Son, through the ministry of
							the Preacher.
						</p>
					</section>

					<section id="section2">
						<h3>Chapter ІІ</h3>
						<h3 id="confes-part1-ch2" ref={confesPart1Ch2Ref}>
							That the God Whom We Invoke is in Us, and We in Him.
						</h3>
						<div className="group relative">
							<span className={isHighlighted ? 'text-primary' : ''}>
								And how shall I call upon my God — my God and my Lord?
							</span>{' '}
							For when I call on Him I ask Him to come into me. And what place is
							there in me into which my God can come — into which God can come, even
							He who made heaven and earth? Is there anything in me, O Lord my God,
							that can contain You? Do indeed the very heaven and the earth, which You
							have made, and in which You have made me, contain You? Or, as nothing
							could exist without You, does whatever exists contain You? Why, then, do
							I ask You to come into me, since I indeed exist, and could not exist if
							You were not in me? Because I am not yet in hell, though You are even
							there;{' '}
							<span className="relative inline-block italic text-primary hover:text-primary-dark">
								«for if I go down into hell You are there».
								<div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
									<Link
										href="/library/bible/psalms-en/#psalomEn138&scroll=true"
										className="underline"
									>
										The Book of Psalms, Psalm 138
									</Link>
								</div>
							</span>
						</div>
						<div className="group relative">
							«I could not therefore exist, could not exist at all, O my God, unless
							You were in me. Or should I not rather say, that I could not exist
							unless I were in You{' '}
							<span className="relative inline-block italic text-primary hover:text-primary-dark">
								«from whom are all things, by whom are all things, in whom are all
								things»?
								<div className="absolute bottom-full left-[25%] -translate-x-[25%] bg-yellow-300 text-gray-800 p-2 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap z-10">
									<Link
										href="/library/bible/romans-en#romansEn-11-32&scroll=true"
										className="underline"
									>
										Epistle of Paul to the Romans, Ch. 11:32–36
									</Link>
								</div>
							</span>
						</div>
						<p>
							«Even so, Lord; even so. Where do I call You to, since You are in me, or
							whence can You come into me? For where outside heaven and earth can I go
							that from thence my God may come into me who has said, I fill heaven and
							earth?».{' '}
						</p>
					</section>

					<section id="section3">
						<h3>Chapter ІІІ</h3>
						<h3>
							Everywhere God wholly filleth all things, but neither heaven nor Earth
							containeth him.
						</h3>
						<p>
							Do the heaven and earth then contain Thee, since Thou fillest them? or
							dost Thou fill them and yet overflow, since they do not contain Thee?
							And whither, when the heaven and the earth are filled, pourest Thou
							forth the remainder of Thyself? or hast Thou no need that aught contain
							Thee, who containest all things, since what Thou fillest Thou fillest by
							containing it? for the vessels which Thou fillest uphold Thee not,
							since, though they were broken, Thou wert not poured out. And when Thou
							art poured out on us, Thou art not cast down, but Thou upliftest us;
							Thou art not dissipated, but Thou gatherest us. But Thou who fillest all
							things, fillest Thou them with Thy whole self? or, since all things
							cannot contain Thee wholly, do they contain part of Thee? and all at
							once the same part? or each its own part, the greater more, the smaller
							less? And is, then, one part of Thee greater, another less? or, art Thou
							wholly every where, while nothing contains Thee wholly?
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
