// Постоянные
	let body 				= document.querySelector('body'),
			table 			= document.querySelector('table'),
			tbody 			= document.querySelector('tbody'),
			filters 		= {
				allContinents: 	true,
				africa: 				false,
				america: 				false,
				asia: 					false,
				europa: 				false,	
				oceania: 				false,
				allNaselenie: 	true,
				n0: 						false,
				n1: 						false,
				n2: 						false,
				n3: 						false,
				n4: 						false,
				n5: 						false,
				n6: 						false,
				n7: 						false,
				allTerra: 			true,
				dwarf: 					false,
				tiny: 					false,
				verySmall: 			false,
				small: 					false,
				medium: 				false,
				big: 						false,
				veryBig: 				false,
				huge: 					false};
			handlerFilter 	= function() { clickFilter(this.getAttribute('id')) };

// СТРАНЫ
const whenua = [
	{id:"AUS",n:"Австралия",c:"Канберра",ct:"Океания",ns:25728080,t:7686850},
	{id:"AUT",n:"Австрия",c:"Вена",ct:"Европа",ns:8902600,t:83871},
	{id:"AZE",n:"Азербайджан",c:"Баку",ct:"Азия",ns:10067108,t:75100},
	{id:"ALA",n:"Аландские острова",c:"Мариехамн",ct:"Европа",ns:29931,t:1553},
	{id:"ALB",n:"Албания",c:"Тирана",ct:"Европа",ns:2845955,t:28748},
	{id:"ALG",n:"Алжир",c:"Алжир",ct:"Африка",ns:43000000,t:2381740},
	{id:"ASA",n:"Американское Самоа",c:"Паго-Паго",ct:"Океания",ns:56700,t:199},
	{id:"AIA",n:"Ангилья",c:"Валли",ct:"Америка",ns:14869,t:100},
	{id:"ANG",n:"Ангола",c:"Луанда",ct:"Африка",ns:31127674,t:1246700},
	{id:"AND",n:"Андорра",c:"Андорра-ла-Велья",ct:"Европа",ns:77543,t:468},
	{id:"ATA",n:"Антарктида",c:"—",ct:"Антарктида",ns:0,t:14107000},
	{id:"ATG",n:"Антигуа и Барбуда",c:"Сент-Джонс",ct:"Америка",ns:96453,t:442},
	{id:"ARG",n:"Аргентина",c:"Буэнос-Айрес",ct:"Америка",ns:44938712,t:2780400},
	{id:"ARM",n:"Армения",c:"Ереван",ct:"Азия",ns:2956900,t:29743},
	{id:"ARU",n:"Аруба",c:"Ораньестад",ct:"Америка",ns:112190,t:193},
	{id:"AFG",n:"Афганистан",c:"Кабул",ct:"Азия",ns:32225560,t:647500},
	{id:"BAH",n:"Багамы",c:"Нассау",ct:"Америка",ns:385340,t:13940},
	{id:"BAN",n:"Бангладеш",c:"Дакка",ct:"Азия",ns:175000000,t:144000},
	{id:"BRB",n:"Барбадос",c:"Бриджтаун",ct:"Америка",ns:287025,t:430},
	{id:"BHR",n:"Бахрейн",c:"Манама",ct:"Азия",ns:1543300,t:665},
	{id:"BLZ",n:"Белиз",c:"Бельмопан",ct:"Америка",ns:408487,t:22966},
	{id:"BLR",n:"Белоруссия",c:"Минск",ct:"Европа",ns:9397800,t:207600},
	{id:"BEL",n:"Бельгия",c:"Брюссель",ct:"Европа",ns:11534131,t:32545},
	{id:"BEN",n:"Бенин",c:"Порто-Ново",ct:"Африка",ns:11733059,t:112620},
	{id:"BER",n:"Бермуды",c:"Гамильтон",ct:"Америка",ns:64027,t:54},
	{id:"BUL",n:"Болгария",c:"София",ct:"Европа",ns:6951482,t:110910},
	{id:"BOL",n:"Боливия",c:"Сукре",ct:"Америка",ns:11469896,t:1098580},
	{id:"BES",n:"Бонайре, Синт-Эстатиус и Саба",c:"Кралендейк",ct:"Америка",ns:25000,t:322},
	{id:"BIH",n:"Босния и Герцеговина",c:"Сараево",ct:"Европа",ns:3301000,t:51129},
	{id:"BOT",n:"Ботсвана",c:"Габороне",ct:"Африка",ns:2338851,t:581730},
	{id:"BRA",n:"Бразилия",c:"Бразилиа",ct:"Америка",ns:213710000,t:8515767},
	{id:"BRU",n:"Бруней",c:"Бандар-Сери-Бегаван",ct:"Азия",ns:459500,t:5770},
	{id:"BFA",n:"Буркина-Фасо",c:"Уагадугу",ct:"Африка",ns:21510181,t:274200},
	{id:"BDI",n:"Бурунди",c:"Бужумбура",ct:"Африка",ns:10953317,t:27830},
	{id:"BHU",n:"Бутан",c:"Тхимпху",ct:"Азия",ns:741672,t:47000},
	{id:"VAN",n:"Вануату",c:"Порт-Вила",ct:"Океания",ns:304500,t:12200},
	{id:"VAT",n:"Ватикан",c:"Ватикан",ct:"Европа",ns:453,t:0},
	{id:"GBR",n:"Великобритания",c:"Лондон",ct:"Европа",ns:67081234,t:244820},
	{id:"HUN",n:"Венгрия",c:"Будапешт",ct:"Европа",ns:9769000,t:93030},
	{id:"VEN",n:"Венесуэла",c:"Каракас",ct:"Америка",ns:32219521,t:912050},
	{id:"VGB",n:"Виргинские Острова (Великобритания)",c:"Род-Таун",ct:"Америка",ns:30030,t:153},
	{id:"VIR",n:"Виргинские Острова (США)",c:"Шарлотта-Амалия",ct:"Америка",ns:104578,t:352},
	{id:"TLS",n:"Восточный Тимор",c:"Дили",ct:"Азия",ns:1387149,t:14874},
	{id:"VIE",n:"Вьетнам",c:"Ханой",ct:"Азия",ns:98208984,t:329560},
	{id:"GAB",n:"Габон",c:"Либревиль",ct:"Африка",ns:2172579,t:267667},
	{id:"HAI",n:"Гаити",c:"Порт-о-Пренс",ct:"Америка",ns:11577779,t:27750},
	{id:"GUY",n:"Гайана",c:"Джорджтаун",ct:"Америка",ns:782766,t:214970},
	{id:"GAM",n:"Гамбия",c:"Банжул",ct:"Африка",ns:2347706,t:11300},
	{id:"GHA",n:"Гана",c:"Аккра",ct:"Африка",ns:30280811,t:238540},
	{id:"GPE",n:"Гваделупа",c:"Бас-Тер",ct:"Америка",ns:403750,t:1780},
	{id:"GUA",n:"Гватемала",c:"Гватемала",ct:"Америка",ns:16604026,t:108890},
	{id:"GUI",n:"Гвинея",c:"Конакри",ct:"Африка",ns:12218357,t:245857},
	{id:"GNB",n:"Гвинея-Бисау",c:"Бисау",ct:"Африка",ns:1604528,t:36120},
	{id:"GER",n:"Германия",c:"Берлин",ct:"Европа",ns:83149300,t:357021},
	{id:"GGY",n:"Гернси",c:"Сент-Питер-Порт",ct:"Европа",ns:63196,t:78},
	{id:"GIB",n:"Гибралтар",c:"Гибралтар",ct:"Европа",ns:33691,t:7},
	{id:"HON",n:"Гондурас",c:"Тегусигальпа",ct:"Америка",ns:9158345,t:112090},
	{id:"HKG",n:"Гонконг",c:"—",ct:"Азия",ns:7500700,t:1016},
	{id:"GRN",n:"Гренада",c:"Сент-Джорджес",ct:"Америка",ns:112003,t:340},
	{id:"GRL",n:"Гренландия",c:"Нуук",ct:"Америка",ns:56081,t:2166086},
	{id:"GRE",n:"Греция",c:"Афины",ct:"Европа",ns:10724599,t:131940},
	{id:"GEO",n:"Грузия",c:"Тбилиси",ct:"Азия",ns:3716858,t:57200},
	{id:"GUM",n:"Гуам",c:"Хагатна",ct:"Океания",ns:172400,t:548},
	{id:"DEN",n:"Дания",c:"Копенгаген",ct:"Европа",ns:5824857,t:43094},
	{id:"COD",n:"Демократическая Республика Конго",c:"Киншаса",ct:"Африка",ns:97000000,t:2345410},
	{id:"JEY",n:"Джерси",c:"Сент-Хелиер",ct:"Европа",ns:106800,t:116},
	{id:"DJI",n:"Джибути",c:"Джибути",ct:"Африка",ns:1078373,t:22000},
	{id:"DMA",n:"Доминика",c:"Розо",ct:"Америка",ns:71808,t:754},
	{id:"DOM",n:"Доминиканская Республика",c:"Санто-Доминго",ct:"Америка",ns:10358320,t:48730},
	{id:"EGY",n:"Египет",c:"Каир",ct:"Африка",ns:103456444,t:1001450},
	{id:"ZAM",n:"Замбия",c:"Лусака",ct:"Африка",ns:17885422,t:752614},
	{id:"SAH",n:"Западная Сахара",c:"Эль-Аюн",ct:"Африка",ns:582463,t:266000},
	{id:"ZIM",n:"Зимбабве",c:"Хараре",ct:"Африка",ns:15159624,t:390580},
	{id:"ISR",n:"Израиль",c:"Иерусалим",ct:"Азия",ns:9204865,t:22072},
	{id:"IND",n:"Индия",c:"Нью-Дели",ct:"Азия",ns:1393809280,t:3287590},
	{id:"IDN",n:"Индонезия",c:"Джакарта",ct:"Азия",ns:271350000,t:1904556},
	{id:"JOR",n:"Иордания",c:"Амман",ct:"Азия",ns:10693560,t:92300},
	{id:"IRQ",n:"Ирак",c:"Багдад",ct:"Азия",ns:40150200,t:437072},
	{id:"IRN",n:"Иран",c:"Тегеран",ct:"Азия",ns:85497484,t:1648000},
	{id:"IRL",n:"Ирландия",c:"Дублин",ct:"Европа",ns:4921500,t:70273},
	{id:"ISL",n:"Исландия",c:"Рейкьявик",ct:"Европа",ns:366130,t:103000},
	{id:"ESP",n:"Испания",c:"Мадрид",ct:"Европа",ns:47100396,t:497304},
	{id:"ITA",n:"Италия",c:"Рим",ct:"Европа",ns:60238522,t:301340},
	{id:"YEM",n:"Йемен",c:"Сана",ct:"Азия",ns:29825968,t:527970},
	{id:"CPV",n:"Кабо-Верде",c:"Прая",ct:"Африка",ns:550483,t:4033},
	{id:"KAZ",n:"Казахстан",c:"Нур-Султан",ct:"Азия",ns:18712048,t:2724902},
	{id:"CAM",n:"Камбоджа",c:"Пномпень",ct:"Азия",ns:15288489,t:181040},
	{id:"CMR",n:"Камерун",c:"Яунде",ct:"Африка",ns:26545864,t:475440},
	{id:"CAN",n:"Канада",c:"Оттава",ct:"Америка",ns:38050445,t:9984670},
	{id:"QAT",n:"Катар",c:"Доха",ct:"Азия",ns:2795484,t:11437},
	{id:"KEN",n:"Кения",c:"Найроби",ct:"Африка",ns:47564296,t:582650},
	{id:"CYP",n:"Кипр",c:"Никосия",ct:"Европа",ns:875900,t:6000},
	{id:"KGZ",n:"Киргизия",c:"Бишкек",ct:"Азия",ns:6533500,t:198500},
	{id:"KIR",n:"Кирибати",c:"Южная Тарава",ct:"Океания",ns:120100,t:717},
	{id:"CHN",n:"Китай",c:"Пекин",ct:"Азия",ns:1430915880,t:9598962},
	{id:"PRK",n:"КНДР",c:"Пхеньян",ct:"Азия",ns:25450000,t:120540},
	{id:"CC",n:"Кокосовые острова (Килинг)",c:"Уэст-Айленд",ct:"Азия",ns:555,t:14},
	{id:"COL",n:"Колумбия",c:"Богота",ct:"Америка",ns:50395678,t:1138910},
	{id:"COM",n:"Коморы",c:"Морони",ct:"Африка",ns:873724,t:1862},
	{id:"CGO",n:"Конго",c:"Браззавиль",ct:"Африка",ns:5518092,t:342000},
	{id:"CRC",n:"Коста-Рика",c:"Сан-Хосе",ct:"Америка",ns:5058007,t:51100},
	{id:"CIV",n:"Кот-д’Ивуар",c:"Ямусукро",ct:"Африка",ns:25823071,t:322460},
	{id:"CUB",n:"Куба",c:"Гавана",ct:"Америка",ns:11209628,t:110860},
	{id:"KUW",n:"Кувейт",c:"Эль-Кувейт",ct:"Азия",ns:4420110,t:17820},
	{id:"CUW",n:"Кюрасао",c:"Виллемстад",ct:"Америка",ns:156223,t:444},
	{id:"LAO",n:"Лаос",c:"Вьентьян",ct:"Азия",ns:7123205,t:236800},
	{id:"LVA",n:"Латвия",c:"Рига",ct:"Европа",ns:1904600,t:64589},
	{id:"LES",n:"Лесото",c:"Масеру",ct:"Африка",ns:2007201,t:30355},
	{id:"LBR",n:"Либерия",c:"Монровия",ct:"Африка",ns:4475353,t:111370},
	{id:"LIB",n:"Ливан",c:"Бейрут",ct:"Азия",ns:6825442,t:10452},
	{id:"LBY",n:"Ливия",c:"Триполи",ct:"Африка",ns:6871287,t:1759540},
	{id:"LTU",n:"Литва",c:"Вильнюс",ct:"Европа",ns:2793271,t:65200},
	{id:"LIE",n:"Лихтенштейн",c:"Вадуц",ct:"Европа",ns:38749,t:160},
	{id:"LUX",n:"Люксембург",c:"Люксембург",ct:"Европа",ns:626108,t:2586},
	{id:"MRI",n:"Маврикий",c:"Порт-Луи",ct:"Африка",ns:1265475,t:2040},
	{id:"MTN",n:"Мавритания",c:"Нуакшот",ct:"Африка",ns:4077347,t:1030700},
	{id:"MAD",n:"Мадагаскар",c:"Антананариву",ct:"Африка",ns:26251309,t:587040},
	{id:"MYT",n:"Майотта",c:"Мамудзу",ct:"Африка",ns:246496,t:374},
	{id:"MAC",n:"Макао",c:"—",ct:"Азия",ns:696100,t:31},
	{id:"MWI",n:"Малави",c:"Лилонгве",ct:"Африка",ns:19129952,t:118480},
	{id:"MAS",n:"Малайзия",c:"Куала-Лумпур",ct:"Азия",ns:32798760,t:329750},
	{id:"MLI",n:"Мали",c:"Бамако",ct:"Африка",ns:20250833,t:1240000},
	{id:"MDV",n:"Мальдивы",c:"Мале",ct:"Азия",ns:374775,t:298},
	{id:"MLT",n:"Мальта",c:"Валлетта",ct:"Европа",ns:493559,t:316},
	{id:"MAR",n:"Марокко",c:"Рабат",ct:"Африка",ns:35915525,t:446550},
	{id:"MTQ",n:"Мартиника",c:"Фор-де-Франс",ct:"Америка",ns:381326,t:1100},
	{id:"MHL",n:"Маршалловы Острова",c:"Маджуро",ct:"Океания",ns:55500,t:181},
	{id:"MEX",n:"Мексика",c:"Мехико",ct:"Америка",ns:126014024,t:1972550},
	{id:"MOZ",n:"Мозамбик",c:"Мапуту",ct:"Африка",ns:30066648,t:801590},
	{id:"MDA",n:"Молдавия",c:"Кишинёв",ct:"Европа",ns:2681735,t:29680},
	{id:"MCO",n:"Монако",c:"Монако",ct:"Европа",ns:38100,t:2},
	{id:"MGL",n:"Монголия",c:"Улан-Батор",ct:"Азия",ns:3320588,t:1564116},
	{id:"MSR",n:"Монтсеррат",c:"Плимут / Брейдс",ct:"Америка",ns:4989,t:102},
	{id:"MYA",n:"Мьянма",c:"Нейпьидо",ct:"Азия",ns:54817919,t:678500},
	{id:"NAM",n:"Намибия",c:"Виндхук",ct:"Африка",ns:2746746,t:825418},
	{id:"NRU",n:"Науру",c:"Ярен",ct:"Океания",ns:11000,t:21},
	{id:"NEP",n:"Непал",c:"Катманду",ct:"Азия",ns:29996478,t:140800},
	{id:"NIG",n:"Нигер",c:"Ниамей",ct:"Африка",ns:22314743,t:1267000},
	{id:"NGA",n:"Нигерия",c:"Абуджа",ct:"Африка",ns:213000000,t:923768},
	{id:"NED",n:"Нидерланды",c:"Амстердам",ct:"Европа",ns:17472381,t:41526},
	{id:"NCA",n:"Никарагуа",c:"Манагуа",ct:"Америка",ns:6460411,t:129494},
	{id:"NIU",n:"Ниуэ",c:"Алофи",ct:"Океания",ns:1520,t:260},
	{id:"NZL",n:"Новая Зеландия",c:"Веллингтон",ct:"Океания",ns:5006437,t:268680},
	{id:"NCL",n:"Новая Каледония",c:"Нумеа",ct:"Океания",ns:271407,t:19060},
	{id:"NOR",n:"Норвегия",c:"Осло",ct:"Европа",ns:5372355,t:324220},
	{id:"UAE",n:"Объединённые Арабские Эмираты",c:"Абу-Даби",ct:"Азия",ns:9890400,t:82880},
	{id:"OMA",n:"Оман",c:"Маскат",ct:"Азия",ns:4645249,t:309500},
	{id:"IMN",n:"Остров Мэн",c:"Дуглас",ct:"Европа",ns:83314,t:572},
	{id:"NF",n:"Остров Норфолк",c:"Кингстон",ct:"Океания",ns:1735,t:35},
	{id:"CX",n:"Остров Рождества",c:"Флайинг-Фиш-Коув",ct:"Азия",ns:1955,t:135},
	{id:"SHN",n:"Остров Святой Елены",c:"Джеймстаун",ct:"Африка",ns:5633,t:410},
	{id:"CAY",n:"Острова Кайман",c:"Джорджтаун",ct:"Америка",ns:65813,t:262},
	{id:"COK",n:"Острова Кука",c:"Аваруа",ct:"Океания",ns:15200,t:240},
	{id:"PCN",n:"Острова Питкэрн",c:"Адамстаун",ct:"Океания",ns:50,t:47},
	{id:"PAK",n:"Пакистан",c:"Исламабад",ct:"Азия",ns:227983706,t:803940},
	{id:"PLW",n:"Палау",c:"Нгерулмуд",ct:"Океания",ns:17900,t:458},
	{id:"PLE",n:"Палестина",c:"Рамалла",ct:"Азия",ns:4976684,t:6020},
	{id:"PAN",n:"Панама",c:"Панама",ct:"Америка",ns:4218808,t:78200},
	{id:"PNG",n:"Папуа — Новая Гвинея",c:"Порт-Морсби",ct:"Океания",ns:8935000,t:462840},
	{id:"PAR",n:"Парагвай",c:"Асунсьон",ct:"Америка",ns:7252672,t:406750},
	{id:"PER",n:"Перу",c:"Лима",ct:"Америка",ns:32824358,t:1285220},
	{id:"POL",n:"Польша",c:"Варшава",ct:"Европа",ns:38379000,t:312685},
	{id:"POR",n:"Португалия",c:"Лиссабон",ct:"Европа",ns:10276617,t:92082},
	{id:"RMN",n:"Приднестровская Молдавская Республика",c:"Тирасполь",ct:"Европа",ns:469000,t:4163},
	{id:"PUR",n:"Пуэрто-Рико",c:"Сан-Хуан",ct:"Америка",ns:3193694,t:9104},
	{id:"ABH",n:"Республика Абхазия",c:"Сухуми",ct:"Азия",ns:244832,t:8600},
	{id:"Artsakh",n:"Республика Арцах",c:"Степанакерт",ct:"Азия",ns:148000,t:11458},
	{id:"KOR",n:"Республика Корея",c:"Сеул",ct:"Азия",ns:51780579,t:98480},
	{id:"KVX",n:"Республика Косово",c:"Приштина",ct:"Европа",ns:1795666,t:10888},
	{id:"REU",n:"Реюньон",c:"Сен-Дени",ct:"Африка",ns:844994,t:2517},
	{id:"RUS",n:"Россия",c:"Москва",ct:"Европа",ns:146171015,t:17125191},
	{id:"RWA",n:"Руанда",c:"Кигали",ct:"Африка",ns:12374397,t:26338},
	{id:"ROU",n:"Румыния",c:"Бухарест",ct:"Европа",ns:19405156,t:237500},
	{id:"SLV",n:"Сальвадор",c:"Сан-Сальвадор",ct:"Америка",ns:6486201,t:21040},
	{id:"SAM",n:"Самоа",c:"Апиа",ct:"Океания",ns:200874,t:2860},
	{id:"SMR",n:"Сан-Марино",c:"Сан-Марино",ct:"Европа",ns:33553,t:61},
	{id:"STP",n:"Сан-Томе и Принсипи",c:"Сан-Томе",ct:"Африка",ns:210240,t:1001},
	{id:"KSA",n:"Саудовская Аравия",c:"Эр-Рияд",ct:"Азия",ns:34218169,t:2149690},
	{id:"MKD",n:"Северная Македония",c:"Скопье",ct:"Европа",ns:2077132,t:25333},
	{id:"NMI",n:"Северные Марианские Острова",c:"Сайпан",ct:"Океания",ns:56200,t:477},
	{id:"SEY",n:"Сейшельские Острова",c:"Виктория",ct:"Африка",ns:98055,t:455},
	{id:"BLM",n:"Сен-Бартелеми",c:"Густавия",ct:"Америка",ns:9961,t:21},
	{id:"SEN",n:"Сенегал",c:"Дакар",ct:"Африка",ns:16705608,t:196190},
	{id:"SMT",n:"Сен-Мартен",c:"Мариго",ct:"Америка",ns:35334,t:53},
	{id:"SPM",n:"Сен-Пьер и Микелон",c:"Сен-Пьер",ct:"Америка",ns:5997,t:242},
	{id:"VIN",n:"Сент-Винсент и Гренадины",c:"Кингстаун",ct:"Америка",ns:110608,t:389},
	{id:"SKN",n:"Сент-Китс и Невис",c:"Бастер",ct:"Америка",ns:52823,t:261},
	{id:"LCA",n:"Сент-Люсия",c:"Кастри",ct:"Америка",ns:178696,t:620},
	{id:"SRB",n:"Сербия",c:"Белград",ct:"Европа",ns:6963764,t:77473},
	{id:"SIN",n:"Сингапур",c:"Сингапур",ct:"Азия",ns:5703600,t:778},
	{id:"SXM",n:"Синт-Мартен",c:"Филипсбург",ct:"Америка",ns:40614,t:35},
	{id:"SYR",n:"Сирия",c:"Дамаск",ct:"Азия",ns:17500657,t:185180},
	{id:"SVK",n:"Словакия",c:"Братислава",ct:"Европа",ns:5457873,t:48845},
	{id:"SVN",n:"Словения",c:"Любляна",ct:"Европа",ns:2095861,t:20253},
	{id:"USA",n:"Соединённые Штаты Америки",c:"Вашингтон",ct:"Америка",ns:332514384,t:9525067},
	{id:"SOL",n:"Соломоновы Острова",c:"Хониара",ct:"Океания",ns:680806,t:28450},
	{id:"SOM",n:"Сомали",c:"Могадишо",ct:"Африка",ns:15893219,t:637657},
	{id:"SUD",n:"Судан",c:"Хартум",ct:"Африка",ns:42553875,t:1886065},
	{id:"SUR",n:"Суринам",c:"Парамарибо",ct:"Америка",ns:581372,t:163270},
	{id:"SLE",n:"Сьерра-Леоне",c:"Фритаун",ct:"Африка",ns:7901454,t:71740},
	{id:"TJK",n:"Таджикистан",c:"Душанбе",ct:"Азия",ns:9127000,t:143100},
	{id:"THA",n:"Таиланд",c:"Бангкок",ct:"Азия",ns:67512242,t:514000},
	{id:"TPE",n:"Тайвань (Китайская Республика)",c:"Тайбэй",ct:"Азия",ns:23596493,t:35980},
	{id:"TAN",n:"Танзания",c:"Додома",ct:"Африка",ns:63637628,t:948087},
	{id:"TCA",n:"Теркс и Кайкос",c:"Коберн-Таун",ct:"Америка",ns:42953,t:430},
	{id:"TOG",n:"Того",c:"Ломе",ct:"Африка",ns:7538000,t:56785},
	{id:"TKL",n:"Токелау",c:"Атафу",ct:"Океания",ns:1400,t:12},
	{id:"TGA",n:"Тонга",c:"Нукуалофа",ct:"Океания",ns:100651,t:748},
	{id:"TRI",n:"Тринидад и Тобаго",c:"Порт-оф-Спейн",ct:"Америка",ns:1363985,t:5128},
	{id:"TUV",n:"Тувалу",c:"Фунафути",ct:"Океания",ns:10200,t:26},
	{id:"TUN",n:"Тунис",c:"Тунис",ct:"Африка",ns:11722038,t:163610},
	{id:"NCP",n:"Турецкая Республика Северного Кипра",c:"Никосия",ct:"Азия",ns:351965,t:3300},
	{id:"TKM",n:"Туркмения",c:"Ашхабад",ct:"Азия",ns:6031187,t:491200},
	{id:"TUR",n:"Турция",c:"Анкара",ct:"Азия",ns:84154997,t:780580},
	{id:"UGA",n:"Уганда",c:"Кампала",ct:"Африка",ns:41590300,t:236040},
	{id:"UZB",n:"Узбекистан",c:"Ташкент",ct:"Азия",ns:34217144,t:447400},
	{id:"UKR",n:"Украина",c:"Киев",ct:"Европа",ns:41830619,t:576604},
	{id:"WLF",n:"Уоллис и Футуна",c:"Мата-Уту",ct:"Океания",ns:11700,t:274},
	{id:"URU",n:"Уругвай",c:"Монтевидео",ct:"Америка",ns:3518552,t:176220},
	{id:"FRO",n:"Фареры",c:"Торсхавн",ct:"Европа",ns:52428,t:1399},
	{id:"FSM",n:"Федеративные Штаты Микронезии",c:"Паликир",ct:"Океания",ns:104468,t:702},
	{id:"FIJ",n:"Фиджи",c:"Сува",ct:"Океания",ns:884887,t:18270},
	{id:"PHI",n:"Филиппины",c:"Манила",ct:"Азия",ns:110941613,t:299764},
	{id:"FIN",n:"Финляндия",c:"Хельсинки",ct:"Европа",ns:5498806,t:337030},
	{id:"FLK",n:"Фолклендские (Мальвинские) острова",c:"Стэнли",ct:"Америка",ns:3198,t:12173},
	{id:"FRA",n:"Франция",c:"Париж",ct:"Европа",ns:68075000,t:547030},
	{id:"GYF",n:"Французская Гвиана",c:"Кайенна",ct:"Америка",ns:254541,t:91000},
	{id:"TAH",n:"Французская Полинезия (Таити)",c:"Папеэте",ct:"Океания",ns:275918,t:4167},
	{id:"CRO",n:"Хорватия",c:"Загреб",ct:"Европа",ns:4076246,t:56542},
	{id:"CTA",n:"Центральноафриканская Республика",c:"Банги",ct:"Африка",ns:5496011,t:622984},
	{id:"CHA",n:"Чад",c:"Нджамена",ct:"Африка",ns:16244513,t:1284000},
	{id:"MNE",n:"Черногория",c:"Подгорица",ct:"Европа",ns:622359,t:14026},
	{id:"CZE",n:"Чехия",c:"Прага",ct:"Европа",ns:10693939,t:78866},
	{id:"CHI",n:"Чили",c:"Сантьяго",ct:"Америка",ns:19107216,t:756950},
	{id:"SUI",n:"Швейцария",c:"Берн",ct:"Европа",ns:8603899,t:41290},
	{id:"SWE",n:"Швеция",c:"Стокгольм",ct:"Европа",ns:10343403,t:449964},
	{id:"SRI",n:"Шри-Ланка",c:"Шри-Джаяварденепура-Котте",ct:"Азия",ns:21803000,t:65610},
	{id:"ECU",n:"Эквадор",c:"Кито",ct:"Америка",ns:17497960,t:283560},
	{id:"EQG",n:"Экваториальная Гвинея",c:"Малабо",ct:"Африка",ns:1454789,t:28051},
	{id:"ERI",n:"Эритрея",c:"Асмэра",ct:"Африка",ns:3497117,t:121320},
	{id:"SWZ",n:"Эсватини",c:"Мбабане",ct:"Африка",ns:1093238,t:17363},
	{id:"EST",n:"Эстония",c:"Таллин",ct:"Европа",ns:1328976,t:45226},
	{id:"ETH",n:"Эфиопия",c:"Аддис-Абеба",ct:"Африка",ns:117876000,t:1127127},
	{id:"OSE",n:"Южная Осетия",c:"Цхинвал",ct:"Азия",ns:53532,t:3900},
	{id:"RSA",n:"Южно-Африканская Республика",c:"Претория",ct:"Африка",ns:61075022,t:1219912},
	{id:"SSD",n:"Южный Судан",c:"Джуба",ct:"Африка",ns:12778250,t:619745},
	{id:"JAM",n:"Ямайка",c:"Кингстон",ct:"Америка",ns:2726667,t:10990},
	{id:"JPN",n:"Япония",c:"Токио",ct:"Азия",ns:125900000,t:377835}
	];

// Функции
function createInitialTable() {
	tbody.innerHTML = whenua.map(X => `
		<tr class="${X.id}">
		<td><p>${X.n}</p></td>
		<td>${X.c}</td>
		<td>${X.ct}</td>
		<td>${X.ns.toLocaleString('ru')}</td>
		<td>${X.t.toLocaleString('ru')}</td>
		</tr>`).join('');
}
function clickSort() {
	let COL = this.getAttribute('id'),
			CLS = this.classList;
	if (CLS.contains('sorted')) 
		{sorting('reverse');
		CLS.toggle('z-a');}
	else {
		sorting(COL);
		cleanClasses();
		CLS.add('sorted');
		if (COL == 'naselenie' || COL == 'terra') {CLS.add('z-a');} }
}
function sorting(COL) {
	let sortedRows = Array.from(document.querySelectorAll('tbody>tr'));
	if (COL === 'reverse') {sortedRows.reverse();}
	else if (COL === 'naselenie' || COL === 'terra') {
		if (COL === 'naselenie') { COL = 3 }
		if (COL === 'terra') { COL = 4 }
		for (var i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[COL].innerHTML = sortedRows[i].cells[COL].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, "");}
		sortedRows.sort((a, b) => b.cells[COL].innerHTML - a.cells[COL].innerHTML);
		for (var i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[COL].innerHTML = sortedRows[i].cells[COL].innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, " ");} }
	else {
		if (COL === 'strana') { COL = 0 }
		if (COL === 'stolica') { COL = 1 }
		if (COL === 'continent') { COL = 2 }
		sortedRows.sort((a, b) => a.cells[COL].innerHTML.toLowerCase() > b.cells[COL].innerHTML.toLowerCase() ? 1 : -1 ); }
	document.querySelector('tbody').append(...sortedRows);
}
function clickFilter() {
	let a = this.getAttribute('id');
	// Фильтры "Все"
	if (a === 'allContinents') {
		filters[a] = true;
		filters.africa = filters.america = filters.asia = filters.europa = filters.oceania = false;
		body.classList.remove('africa','america','asia','europa','oceania'); }
	else if (a === 'allNaselenie') {
		filters[a] = true;
		filters.n0 = filters.n1 = filters.n2 = filters.n3 = filters.n4 = filters.n5 = filters.n6 = filters.n7 = false;
		body.classList.remove('n0','n1','n2','n3','n4','n5','n6','n7'); }
	else if (a === 'allTerra') {
		filters[a] = true;
		filters.dwarf = filters.tiny = filters.verySmall = filters.small = filters.medium = filters.big = filters.veryBig = filters.huge = false;
		body.classList.remove('dwarf','tiny','verySmall','small','medium','big','veryBig','huge'); }
	// Отдельные фильтры
	else {
		filters[a] = !filters[a];
		body.classList.toggle(a);
		if (filters.africa || filters.america || filters.asia || filters.europa || filters.oceania) 
			{filters.allContinents = false;}
		else {filters.allContinents = true;} 
		if (filters.n0 || filters.n1 || filters.n2 || filters.n3 || filters.n4 || filters.n5 || filters.n6 || filters.n7) 
			{filters.allNaselenie = false;}
		else {filters.allNaselenie = true;} 
		if (filters.dwarf || filters.tiny || filters.verySmall || filters.small || filters.medium || filters.big || filters.veryBig || filters.huge) 
			{filters.allTerra = false;}
		else {filters.allTerra = true;} }
	filtering();
}
function filtering() {
	for (var i = 1; i < table.rows.length; i++) {
		let continent = table.rows[i].cells[2].innerHTML,
				tr = table.rows[i].classList;
		if (
			filters.allContinents || 
			((filters.africa) 	&& continent == 'Африка') ||
			((filters.america) 	&& continent == 'Америка') ||
			((filters.asia) 		&& continent == 'Азия') ||
			((filters.europa) 	&& continent == 'Европа') ||
			((filters.oceania) 	&& continent == 'Океания') )
			{tr.remove('hidden-by-cont');}
		else {tr.add('hidden-by-cont');} }
		if (filters.allNaselenie) {
			document.querySelector('#nasMin').value = 0;
			document.querySelector('#nasMax').value = 1500000000;
		}
}
function filterNas() {
	nasMin = document.querySelector('#nasMin').value.replace(/ /g, "");
	nasMax = document.querySelector('#nasMax').value.replace(/ /g, "");
	if (nasMax < 1) {nasMax = 1500000000;}
	for (var i = 1; i < table.rows.length; i++) {
		value = Number(table.rows[i].cells[3].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, ""));
		if (value > nasMin && value < nasMax)
			{table.rows[i].classList.remove('hidden-by-nas');}
		else {table.rows[i].classList.add('hidden-by-nas');} }
	this.value = this.value.replace(/ /g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
}
function filterTerra() {
	terraMin = document.querySelector('#terraMin').value.replace(/ /g, "");
	terraMax = document.querySelector('#terraMax').value.replace(/ /g, "");
	if (terraMax < 1) {terraMax = 18000000;}
	for (var i = 1; i < table.rows.length; i++) {
		value = Number(table.rows[i].cells[4].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, ""));
		if (value >= terraMin && value < terraMax)
			{table.rows[i].classList.remove('hidden-by-terra');}
		else {table.rows[i].classList.add('hidden-by-terra');} }
}
function tableSearch() {
	let regPhrase = new RegExp(document.querySelector('#tableSearch').value, 'i'),
			flag = false;
	for (var i = 1; i < table.rows.length; i++) {
		flag = false;
		for (var j = 0; j < 2; j++) {
			flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
			if (flag) break;}
		if (flag) 
			{table.rows[i].classList.remove('hidden-by-search');}
		else {table.rows[i].classList.add('hidden-by-search');} } 
}
function activeOption() {
	
}
function cleanClasses() {for (var i = 0; i < 5; i++) {document.querySelectorAll('th')[i].className = ''} }

// Фильтр
	document.querySelectorAll('.filter [id]').forEach((element) => {element.onclick = clickFilter;});

	document.querySelector('#allNaselenie').onclick = clickFilter;
	// document.querySelector('#allNaselenie').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n0').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n1').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n2').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n3').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n4').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n5').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n6').addEventListener('click', handlerFilter, false);
	// document.querySelector('#n7').addEventListener('click', handlerFilter, false);
	// document.querySelector('#allTerra').addEventListener('click', handlerFilter, false);
	// document.querySelector('#dwarf').addEventListener('click', handlerFilter, false);
	// document.querySelector('#tiny').addEventListener('click', handlerFilter, false);
	// document.querySelector('#verySmall').addEventListener('click', handlerFilter, false);
	// document.querySelector('#small').addEventListener('click', handlerFilter, false);
	// document.querySelector('#medium').addEventListener('click', handlerFilter, false);
	// document.querySelector('#big').addEventListener('click', handlerFilter, false);
	// document.querySelector('#veryBig').addEventListener('click', handlerFilter, false);
	// document.querySelector('#huge').addEventListener('click', handlerFilter, false);
	// document.querySelector('#allContinents').addEventListener('click', handlerFilter, false);

// Сортировка
	document.querySelectorAll('th').forEach((element) => {element.onclick = clickSort;});

// Фильтры (числовые)
	document.querySelector('#nasMin').onkeyup = filterNas;
	document.querySelector('#nasMax').onkeyup = filterNas;
	document.querySelector('#terraMin').onkeyup = filterTerra;
	document.querySelector('#terraMax').onkeyup = filterTerra;

createInitialTable();
