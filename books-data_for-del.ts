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
        "anotation": "Злата заприсяглась упродовж семи років приходити за ніч до Різдва до Яна — брата-близнюка свого зниклого чоловіка. І бути з ним до ранку в його замку у горах. Ян — геніальний органіст, але його музика — лиха. Коли він грає, каміння падає з башт церков, стіни тріскаються і блискавки влучають у вежі. Цією музикою кричить Адам, вигнанець із Раю. Події розгортаються в уявні часи, культурно близькі першій половині ХХ ст. Оповідь алегорична, сплетена з казкових, біблійних і міфологічних образів та мотивів.",
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
        "anotation": "Сповідь — автобіографічний твір, у якому Авґустин у формі молитви розповідає про своє життя, що відрізнялося занепокоєнням, постійним пошуком і багатьма помилками, про свій досвід грішника, котрий відкрив шлях до Бога, саме у Ньому віднайшов усе, чого шукав. Він вважав, що нема святих без минулого, нема грішників без майбутнього. У молодому віці Авґустин втратив віру в Бога, переживав духовну еволюцію і лише згодом повернувся до Церкви і був визнаний взірцем християнського способу життя і служіння.",
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
        "author": "пер. І. Огієнко",
        "title": "Євангеліє від Івана",
        "anotation": "Переклад Євангеліє від Івана Івана Огієнка українською мовою.",
        "genre": "bibliya",
        "type": "text",
        "kategory": "bibl",
        "link": "/library/bible/gospel-of-john",
       "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrykvYAhtth_OBMIlHB7ukNw_eOSZFMTplckvrzs_yHgEoqrMYawOJx70&s"
    },
    {
        "id": "29",
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
        "id": "30",
        "author": "Blessed Augustine",
        "title": "Confession",
        "anotation": "«St. Augustine (354–430) was a Christian theologian, Doctor of the Church, philosopher, rhetorician, and bishop. According to his own testimony, he wrote 232 books; in addition, 224 letters and more than 500 sermon texts have survived. The structure and style of these works reflect the restless nature of their author. It has been said of him that no great thinker embodied such extremes—that among the saints of the Church, he was the least holy and the most human. «Confessions» is an autobiographical work in which Augustine, in the form of a prayer, recounts his life, marked by anxiety, a constant search for truth, and many errors, as the journey of a sinner who ultimately found the path to God. In Him, Augustine discovered everything he had long sought. He believed that «there are no saints without a past, no sinners without a future.» In his youth, Augustine lost his faith in God, underwent a profound spiritual transformation, and only later returned to the Church, where he was ultimately recognized as a model of Christian life and ministry.»",
        "genre": "biblical",
        "type": "text",
        "kategory": "patristl",
        "link": "/library/avgustine-en",
        "icon": "/images/confess-thumb.jpg"
    },
    {
        "id": "31",
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
        "id": "32",
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
        "id": "33",
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