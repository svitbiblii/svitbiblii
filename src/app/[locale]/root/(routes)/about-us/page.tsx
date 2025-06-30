'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsPage = () => {
	const t = useTranslations('AboutUs');

	return (
		<div className="h-min-full flex mt-16">
			<div className="relative h-full w-full overflow-hidden px-4">
				<h1>{t('title')}</h1>
				<section id="whowe" className="scroll-mt-40">
					<h2>{t('subtitle1')}</h2>
					<p>
						{t('par11')} (
						<a
							className="hover:text-blue-500 transition"
							href="http://mediaglagol.com.ua"
							target="_blank"
						>
							http://mediaglagol.com.ua
						</a>
						) — {t('par12')}
					</p>
					<p>{t('par13')}</p>
					<p>{t('par14')}</p>
					<p>{t('par15')}</p>
				</section>
				<section id="goal" className="scroll-mt-40">
					<h2>{t('subtitle2')}</h2>
					<p>{t('par21')}</p>
					<p>{t('par22')}</p>

					<Image
						className="fit-picture mx-auto block"
						src="/images/image-about-page.png"
						width={600}
						height={400}
						alt="image-about-page"
					/>
				</section>

				<section id="whywe" className="scroll-mt-40">
					<h2>{t('subtitle3')}</h2>
					<p>{t('par31')}</p>
				</section>

				<section id="forsponsor" className="">
					<h2>{t('subtitle4')}</h2>
					<p>{t('par41')}</p>
					<p>{t('par42')}</p>
					<ul>
						<li>{t('receive1')}</li>
						<li>{t('receive2')}</li>
						<li>{t('receive3')}</li>
					</ul>
					<p>{t('par43')}</p>
				</section>
			</div>
		</div>
	);
};

export default AboutUsPage;
