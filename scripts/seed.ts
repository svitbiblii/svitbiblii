import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type LibrarySeed = {
	title: string;
	author?: string;
	link?: string;
	content?: string;
	category?: string;
};

const libraries: LibrarySeed[] = [
	{
		title: 'A Brief Commentary on the Apocalypse',
		author: 'Sylvester Bliss',
		link: '/library/sylvester-bliss',
		content:
			"A Brief Commentary on the Apocalypse by Sylvester Bliss is a theological analysis written in the mid-19th century. This work focuses on interpreting the Book of Revelation, aiming to demystify its complex symbols and prophetic messages for a Christian audience. The commentary is particularly relevant for those interested in biblical prophecy, exploring meanings and interpretations that have often led to confusion and various contradictory views among readers. The opening of the commentary sets the stage by addressing the perceived challenges surrounding the Book of Revelation, which many regard as a sealed book fraught with enigmatic symbols. The author expresses a belief that the Apocalypse can be understood and provides a rationale for approaching its study, referencing other scholars and their works on the subject. Bliss emphasizes the importance of scriptural interpretation by comparing scripture to scripture, introducing fundamental principles of prophetic interpretation, and providing a clear structure for the commentary that follows. This early section outlines the author's intention to make the Apocalypse accessible and relevant for those eager to grasp its teachings",
		category: 'Bibl',
	},
	{
		title: 'The Book of Exodus',
		author: 'G. A. Chadwick',
		link: '/library/chadwick',
		content:
			"The Expositor's Bible: The Book of Exodus by G. A. Chadwick is a theological work written in the late 19th century. This text is an exposition on the Book of Exodus from the Old Testament, aiming to explore its spiritual significance and connection to Christianity, presenting an interpretation of the events and characters found within. The author, a notable church leader, seeks to provide insights that are both educational and edifying, reflecting his belief in the enduring authority of biblical scripture. At the start of this volume, the introduction presents the context of the Book of Exodus, discussing the transition from personal stories of the patriarchs to the national narrative of Israel. The preface establishes the significance of Exodus, emphasizing its impact on the Hebrew nation and the underlying spiritual lessons that extend beyond its historical events. The opening sections highlight the oppression of the Israelites in Egypt and introduces Moses, whose birth occurs amid a climate of fear and tyranny. Chadwick elaborates on Moses’ early life, the influence of his parents, his upbringing in Pharaoh's household, and the formative choices that shape his identity and destiny, setting the stage for the significant events that will follow in the narrative",
		category: 'Cloud of biblical tradition',
	},
	{
		title: 'The Epistles',
		author: 'St. John',
		link: '/library/john',
		content:
			"The Expositor's Bible: The Epistles of St. John by William Alexander is a theological exposition written in the late 19th century. This work is part of a series that aims to provide in-depth commentary and analysis of Biblical texts, specifically focusing on the epistles attributed to St. John. It explores the historical context, theological significance, and practical implications of these letters, which are crucial for understanding early Christian doctrine and ethics. The opening of the text presents a preface by the author, explaining his long-standing engagement with the Epistles of St. John. He outlines his approach, which combines historical background with exegetical analysis, framing the epistles within the broader context of St. John's life and the challenges faced by the early Church in Asia Minor, particularly Ephesus. The author prepares the reader for a detailed examination of the epistles, highlighting the importance of understanding the unique spiritual and theological insights that St. John offers, especially against the backdrop of contemporary heresies such as Gnosticism. The opening sets the stage for a scholarly yet accessible exploration intended for both serious theological study and general readers interested in the New Testament.",
		category: 'Biblical Studies',
	},
	{
		title: 'Український переклад Біблії (УПБ)',
		author: 'І. Огієнко',
		link: '/library/bible/bible-ua',
		content:
			'Переклад Біблії Івана Огієнка — це найбільш поширений і вживаний переклад Біблії українською мовою.',
		category: 'Patristics',
	},
	{
		title: 'Поліанна',
		author: 'Елеонор Портер',
		link: '/library/porter',
		content:
			'Це захоплива розповідь про 12ти річну чарівну дівчинку, з появою якої змінилося життя в спокійному провінційному містечку. Це маленьке дівчисько завдяки своїй доброті, безпосередності, життєрадісності та енергійності зуміла розтопити черстві серця людей, приречених на сіре та безпросвітне існування.',
		category: 'Philosophy and History',
	},
	{
		title: 'Листи крутеня',
		author: 'К.С. Люїc',
		link: '/library/lewis',
		content:
			'Часом ми не віримо, що зло й справді існує у світі. Натомість воно настільки витончене, то деколи його просто не помічаємо. Спокуси й пастки нечистого чекають нас будь-де. І не зауважуємо, як в них потрапляємо. Відомий в усьому світі християнський письменник Клайв Стейтиз Люїс, автор Хронік Нарнії, прагне показати механізм дії зла у світі. Форма, яку обрав автор — листи-повчання старого, досвідченого диявола (Крутеня) до молодого бісика про те, як спокушати людей.',
		category: 'Dictionaries and Encyclopedias',
	},
	{
		title: 'Theology (World English Bible)',
		author: 'Author G (Michael Paul Johnson with volunteers)',
		link: '/library/bible/bible-en',
		content:
			'The World English Bible (WEB) is an English translation of the Bible freely shared online. The translation work began in 1994 and was deemed complete in 2020. Created by Michael Paul Johnson with help from volunteers,[1][6] the WEB is an updated revision of the American Standard Version from 1901.',
		category: 'Theology',
	},
];

async function main() {
	try {
		await db.library.deleteMany(); // Очистка таблицы перед вставкой
		await db.library.createMany({
			data: libraries,
			skipDuplicates: true,
		});
		console.log('✅ Libraries seeded successfully.');
	} catch (error) {
		console.error('❌ Error seeding Libraries:', error);
	} finally {
		await db.$disconnect();
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
