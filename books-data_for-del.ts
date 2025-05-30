export interface IBooks {
    id: string,
    author: string,
    title: string,
    anotation: string,
    genre: string,
    type: string,
    link: string,
    icon: string,
    kategory: string
  }
  
  export const BOOKS_DATA: IBooks[] = [    
    {
        "id": "16",
        "author": "Sylvester Bliss",
        "title": "A Brief Commentary on the Apocalypse",
        "anotation": "A Brief Commentary on the Apocalypse by Sylvester Bliss is a theological analysis written in the mid-19th century. This work focuses on interpreting the Book of Revelation, aiming to demystify its complex symbols and prophetic messages for a Christian audience. The commentary is particularly relevant for those interested in biblical prophecy, exploring meanings and interpretations that have often led to confusion and various contradictory views among readers. The opening of the commentary sets the stage by addressing the perceived challenges surrounding the Book of Revelation, which many regard as a sealed book fraught with enigmatic symbols. The author expresses a belief that the Apocalypse can be understood and provides a rationale for approaching its study, referencing other scholars and their works on the subject. Bliss emphasizes the importance of scriptural interpretation by comparing scripture to scripture, introducing fundamental principles of prophetic interpretation, and providing a clear structure for the commentary that follows. This early section outlines the author's intention to make the Apocalypse accessible and relevant for those eager to grasp its teachings",
        "genre": "biblical",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/sylvester-bliss",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "17",
        "author": "G. A. Chadwick",
        "title": "The Book of Exodus",
        "anotation": "The Expositor's Bible: The Book of Exodus by G. A. Chadwick is a theological work written in the late 19th century. This text is an exposition on the Book of Exodus from the Old Testament, aiming to explore its spiritual significance and connection to Christianity, presenting an interpretation of the events and characters found within. The author, a notable church leader, seeks to provide insights that are both educational and edifying, reflecting his belief in the enduring authority of biblical scripture. At the start of this volume, the introduction presents the context of the Book of Exodus, discussing the transition from personal stories of the patriarchs to the national narrative of Israel. The preface establishes the significance of Exodus, emphasizing its impact on the Hebrew nation and the underlying spiritual lessons that extend beyond its historical events. The opening sections highlight the oppression of the Israelites in Egypt and introduces Moses, whose birth occurs amid a climate of fear and tyranny. Chadwick elaborates on Moses’ early life, the influence of his parents, his upbringing in Pharaoh's household, and the formative choices that shape his identity and destiny, setting the stage for the significant events that will follow in the narrative",
        "genre": "biblical",
        "type": "text",
        "kategory": "cloud",
        "link": "/library/chadwick",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "18",
        "author": "St. John",
        "title": "The Epistles",
        "anotation": "The Expositor's Bible: The Epistles of St. John by William Alexander is a theological exposition written in the late 19th century. This work is part of a series that aims to provide in-depth commentary and analysis of Biblical texts, specifically focusing on the epistles attributed to St. John. It explores the historical context, theological significance, and practical implications of these letters, which are crucial for understanding early Christian doctrine and ethics. The opening of the text presents a preface by the author, explaining his long-standing engagement with the Epistles of St. John. He outlines his approach, which combines historical background with exegetical analysis, framing the epistles within the broader context of St. John's life and the challenges faced by the early Church in Asia Minor, particularly Ephesus. The author prepares the reader for a detailed examination of the epistles, highlighting the importance of understanding the unique spiritual and theological insights that St. John offers, especially against the backdrop of contemporary heresies such as Gnosticism. The opening sets the stage for a scholarly yet accessible exploration intended for both serious theological study and general readers interested in the New Testament.",
        "genre": "biblical",
        "type": "audio",
        "kategory": "bibl_studies",
        "link": "/library/john",
        "icon": "data:image/png;base64,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"
    },
    {
        "id": "19",
        "author": "І. Огієнко",
        "title": "Український переклад Біблії (УПБ)",
        "anotation": "Переклад Біблії Івана Огієнка — це найбільш поширений і вживаний переклад Біблії українською мовою.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/bible-ua",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "20",
        "author": "Елеонор Портер",
        "title": "Поліанна",
        "anotation": "Це захоплива розповідь про 12ти річну чарівну дівчинку, з появою якої змінилося життя в спокійному провінційному містечку. Це маленьке дівчисько завдяки своїй доброті, безпосередності, життєрадісності та енергійності зуміла розтопити черстві серця людей, приречених на сіре та безпросвітне існування.",
        "genre": "philosophy-and-history",
        "type": "text",
        "kategory": "theology",
        "link": "/library/porter",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "21",
        "author": "К.С. Люїc",
        "title": "Листи крутеня",
        "anotation": "Часом ми не віримо, що зло й справді існує у світі. Натомість воно настільки витончене, то деколи його просто не помічаємо. Спокуси й пастки нечистого чекають нас будь-де. І не зауважуємо, як в них потрапляємо. Відомий в усьому світі християнський письменник Клайв Стейтиз Люїс, автор Хронік Нарнії, прагне показати механізм дії зла у світі. Форма, яку обрав автор — листи-повчання старого, досвідченого диявола (Крутеня) до молодого бісика про те, як спокушати людей.",
        "genre": "philosophy-and-history",
        "type": "text",
        "kategory": "diction",
        "link": "/library/lewis",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "22",
        "author": "Michael Paul Johnson with volunteers",
        "title": "World English Bible (WEB)",
        "anotation": "The World English Bible (WEB) is an English translation of the Bible freely shared online. The translation work began in 1994 and was deemed complete in 2020. Created by Michael Paul Johnson with help from volunteers,[1][6] the WEB is an updated revision of the American Standard Version from 1901.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/bible-en",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
        {
        "id": "23",
        "author": "Новий переклад",
        "title": "Новий Завіт Новий",
        "anotation": "Переклад Нового Завіту",
        "genre": "fiction",
        "type": "text",
        "kategory": "bibl_studies",
        "link": "/library/bible/new-testament-new",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "24",
        "author": "Н. Данькова",
        "title": "Сім ночей перед Різдвом",
        "anotation": "Злата заприсяглась упродовж семи років приходити за ніч до Різдва до Яна — брата-близнюка свого зниклого чоловіка. І бути з ним до ранку в його замку в горах. Ян — геніальний органіст, але музика його — лиха. Коли він грає, каміння падає з башт церков, стіни тріскають і блискавки влучають у вежі. Цією музикою кричить Адам, вигнанець із Раю. Події розгортаються в уявні часи, культурно близькі першій половині ХХ ст. Оповідь алегорична, сплетена з казкових, біблійних і міфологічних образів і мотивів.",
        "genre": "fiction",
        "type": "text",
        "kategory": "fiction",
        "link": "/library/dankova/#section1&scroll=true",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "25",
        "author": "Блаженний Августин",
        "title": "Сповідь",
        "anotation": "Святий Авґустин (354—430) — християнський теолог, вчитель Церкви, філософ, ритор, єпископ. За його власними свідченнями, ним було створено 232 книги; збереглися також 224 листи і понад 500 текстів проповідей. Спосіб викладу матеріалу в цих працях відповідає бурхливому, неспокійному характеру автора. Про нього говорили, що ні в кого з великих мислителів не було таких перепадів між найвищим і найнижчим, що серед церковних святих він був найменш святим і найбільше людиною. Сповідь — автобіографічний твір, у якому Авґустин у формі молитви розповідає про своє життя, що відрізнялося занепокоєнням, постійним пошуком і багатьма помилками, про свій досвід грішника, котрий відкрив шлях до Бога, саме у Ньому віднайшов усе, чого шукав. Він вважав, що нема святих без минулого, нема грішників без майбутнього. У молодому віці Авґустин втратив віру в Бога, переживав духовну еволюцію і лише згодом повернувся до Церкви і був визнаний взірцем християнського способу життя і служіння.",
        "genre": "biblical",
        "type": "text",
        "kategory": "patrist",
        "link": "/library/avgustine",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s" 
    },
    {
        "id": "26",
        "author": "пер. І. Огієнко",
        "title": "Український переклад Біблії (Книга Псалмів)",
        "anotation": "Переклад Книги Псалмів українською мовою, зробленний Іваном Огієнко.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/psalmi",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s" 
    },
    {
        "id": "27",
        "author": "пер. І. Огієнко",
        "title": "Послання до Римлян",
        "anotation": "Переклад Послання до Римлян українською мовою, зробленний Іваном Огієнко.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/romans",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "28",
        "author": "Natalka Dankova",
        "title": "Seven Nights Before Christmas",
        "anotation": "To Jan, the twin brother of her missing husband, Zlata vowed to come each year for seven years, on the night before Christmas. She pledged to remain with him until morning in his mountain castle. Jan is a brilliant organist, but his music is evil. When he plays, rocks fall from church towers, walls split, and lightning strikes the spires. An exile from Paradise — Adam shouts through the music. The events unfold in an imaginary time, culturally reminiscent of the first half of the twentieth century. The story is allegorical, woven from fabulous, biblical, and mythological imagery and motifs.",
        "genre": "fiction",
        "type": "text",
        "kategory": "fiction",
        "link": "/library/dankova-en/#section1&scroll=true",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "29",
        "author": "Blessed Augustine",
        "title": "Confession",
        "anotation": "«St. Augustine (354–430) was a Christian theologian, Doctor of the Church, philosopher, rhetorician, and bishop. According to his own testimony, he wrote 232 books; in addition, 224 letters and more than 500 sermon texts have survived. The structure and style of these works reflect the restless nature of their author. It has been said of him that no great thinker embodied such extremes—that among the saints of the Church, he was the least holy and the most human. «Confessions» is an autobiographical work in which Augustine, in the form of a prayer, recounts his life, marked by anxiety, a constant search for truth, and many errors, as the journey of a sinner who ultimately found the path to God. In Him, Augustine discovered everything he had long sought. He believed that «there are no saints without a past, no sinners without a future.» In his youth, Augustine lost his faith in God, underwent a profound spiritual transformation, and only later returned to the Church, where he was ultimately recognized as a model of Christian life and ministry.»",
        "genre": "biblical",
        "type": "text",
        "kategory": "patristl",
        "link": "/library/avgustine-en",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "30",
        "author": "trans. New King James Version (NKJV)",
        "title": "The Book of Psalms",
        "anotation": "Commissioned in 1975 by Thomas Nelson Publishers, 130 respected Bible scholars, church leaders, and lay Christians worked for seven years to create a completely new, modern translation of Scripture, yet one that would retain the purity and stylistic beauty of the original King James. With unyielding faithfulness to the original Greek, Hebrew, and Aramaic texts, the translation applies the most recent research in archaeology, linguistics, and textual studies.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/psalms-en",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4nueQ6D63-wU4B7VYcpBrsgp04dozzIPqI_97a7dJrU21oUrblNt8x0&s"
    },
    {
        "id": "31",
        "author": "trans. New King James Version (NKJV)",
        "title": "Epistle of Paul to the Romans",
        "anotation": "Commissioned in 1975 by Thomas Nelson Publishers, 130 respected Bible scholars, church leaders, and lay Christians worked for seven years to create a completely new, modern translation of Scripture, yet one that would retain the purity and stylistic beauty of the original King James. With unyielding faithfulness to the original Greek, Hebrew, and Aramaic texts, the translation applies the most recent research in archaeology, linguistics, and textual studies.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/romans-en",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4nueQ6D63-wU4B7VYcpBrsgp04dozzIPqI_97a7dJrU21oUrblNt8x0&s"
    },
    {
        "id": "32",
        "author": "trans. New King James Version (NKJV)",
        "title": "Gospel of John",
        "anotation": "Commissioned in 1975 by Thomas Nelson Publishers, 130 respected Bible scholars, church leaders, and lay Christians worked for seven years to create a completely new, modern translation of Scripture, yet one that would retain the purity and stylistic beauty of the original King James. With unyielding faithfulness to the original Greek, Hebrew, and Aramaic texts, the translation applies the most recent research in archaeology, linguistics, and textual studies.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/gospel-of-johnEn",
       "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
]