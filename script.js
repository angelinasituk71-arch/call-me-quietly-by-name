// === 1. ВСІ НАШІ ЕЛЕМЕНТИ З HTML ===
const splashScreen = document.getElementById('splash-screen');
const mainMenu = document.getElementById('main-menu');
const chaptersMenu = document.getElementById('chapters-menu');

const enterBtn = document.getElementById('enter-btn');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const chap1Btn = document.getElementById('chap1-btn');
const chap2Btn = document.getElementById('chap2-btn'); // Додано оголошення другої кнопки!

const menuMusic = document.getElementById('menu-music');

// Елементи самого екрана гри
const gameScreen = document.getElementById('game-screen');
const chapterTitleScreen = document.getElementById('chapter-title-screen');
const dialogueBox = document.getElementById('dialogue-box');
const storyText = document.getElementById('story-text');
const chapterMusic = document.getElementById('chapter-music');

// Нові елементи для імені та персонажа
const nameBox = document.getElementById('name-box');
const charLeft = document.getElementById('character-left');
const charRight = document.getElementById('character-right');

// === [ОСЬ ТУТ!] Нові змінні для тексту на заставці ===
// Стало (розумний пошук):
const chapterNumText = document.getElementById('chapter-num-text') || (chapterTitleScreen ? chapterTitleScreen.querySelector('h2') : null);
const chapterTitleText = document.getElementById('chapter-title-text') || (chapterTitleScreen ? chapterTitleScreen.querySelector('h1') : null);

// === 2. ТВІЙ СЮЖЕТ ===

// --- ГЛАВА 1: ПРОБУЖДЕНИЕ ---
const awakeningLines = [
    {
        name: "", 
        emotion: "none", 
        text: "Запах ладана в учебной церковной гимназии легкой дымкой окутывал пространство."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Крест, висящий на стене в спальне, купался в солнечных лучах."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Белая сорочка пропиталась потом, прилипла к моему худому телу от дурного сна."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Соседки еще спали, но колокольный звон уже раздался — нужно было просыпаться и ступать на утреннюю молитву перед занятиями.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я распахнула глаза, когда чьи-то пальцы вонзились мне в ребра:",
    },
    {
        name: "", 
        emotion: "none", 
        text: "«Эстель…»",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Послышался чей-то сонный, но раздраженный голос.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "В глаза сразу бросилась рыжая копна волос.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Её жест заставил остатки кошмара мгновенно раствориться в холодном поту.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Глаза режет от бьющего сквозь узкое стрельчатое окно солнца.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Лицо Маргариты находится совсем близко:",
    },
    {
        name: "", 
        emotion: "none", 
        text: "ее рыжие растрепанные волосы кажутся огненным пятном на фоне серой, унылой спальни, а в карих глазах застыло привычное, загнанное раздражение.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Колокол на главной башне продолжает свой монотонный, бьющий по барабанным перепонкам гул,...",
    },
    {
        name: "", 
        emotion: "none", 
        text: "...призывая воспитанниц к первому из семи обязательных молитвенных часов — утрене.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Вокруг нас уже начинается едва слышное, пугливое шевеление.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девочки соскальзывают со своих жестких коек, стараясь не скрипеть пружинами.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "За любой лишний шум старшая наставница, сестра Агнесса, заставит бедняг стоять на коленях на горохе во время завтрака.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита отдергивает руку, оглядываясь на дверь, из-за которой уже доносится тяжелый, размеренный стук подкованных туфель дежурной монахини.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но затем на её лице появляется ухмылка.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Эта лисья, неуместная в святых стенах усмешка на лице в условиях монастырского надзора кажется настоящим преступлением.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девчонка резко наклоняется к самому моему уху, так что я чувствую ее горячее, прерывистое дыхание.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Подруга дергает подбородком в сторону моей груди, где белая, пропитанная ночным потом сорочка облепила худое тело, очерчивая соски, ставшие твердыми то ли от утренней прохлады, то ли от пережитого во сне ужаса.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_neutral.png", 
        text: "Опять своего дьявола во сне видела?"
    },
    {
        name: "Маргарита", 
        emotion: "hero_serious.png", 
        text: "Твоя рубаха насквозь мокрая."
    },
    {
        name: "Маргарита", 
        emotion: "hero_serious.png", 
        text: "Если Агнесса увидит, что ты не успела переодеться, она заставит тебя читать покаянные псалмы прямо на холодном каменном полу часовни."
    },
    {
        name: "Эстель", 
        emotion: "estel_anger.png", 
        text: "Ты по своему опыту судишь?"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я выгнула бровь.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Пусть пожалеет, что вообще затеяла этот разговор.",
    },
    {
        name: "Эстель", 
        emotion: "estel_lips.png", 
        text: "У самой вон — колени все в синяках."
    },  
    {
        name: "", 
        emotion: "none", 
        text: "Моя шпилька бьет точно в цель: ухмылка мгновенно слетает с лица Маргариты, а ее бледные щеки покрываются румянцем.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она инстинктивно дергает подол своей сорочки вниз, пытаясь спрятать эти уродливые, багрово-синие следы.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "В ее глазах на секунду вспыхивает настоящая, почти звериная злость, но ответить мне она уже не успевает.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Тяжелая тень сестры Агнессы ложится на мою кровать еще до того, как ее шаги затихают у изголовья.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Воздух вокруг меня мгновенно становится ледяным, пропитанным запахом воска и дешевого мыла.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Наставница смотрит на меня сверху вниз, и в ее бледных, лишенных ресниц глазах я вижу лишь бездушную пустоту церковного закона.",
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_natural.png", 
        text: "Воспитанница Эстель."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Её голос звучит в гробовой тишине спальни."
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_natural.png", 
        text: "На утреннюю литургию даровано пятнадцать минут."
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Ты же позволяешь себе лежать в постели, оскверняя час Господень праздностью, да еще и ведешь недозволенные речи."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она оборачивается, обращаясь ко всем послушницам."
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Переодевайтесь и спускайтесь на низ."
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Живо."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она резко разворачивается, и тяжелые шаги наставницы быстро удаляются по коридору, оставляя после себя лишь давящую, звенящую тишину."
    },
    {
        name: "Эстель", 
        emotion: "estel_anger.png", 
        text: "«Эта старая карга подслушивала наш разговор…»"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Тяжелым свинцом бьется у меня в висках, пока я судорожно натягиваю сухое белье."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Руки мелко дрожат, пальцы путаются в завязках."
    },
    {
        name: "Эстель", 
        emotion: "estel_bitelips.png", 
        text: "«А что если про дьявола, которого упоминала Маргарита, она тоже слышала?»"
    },
    {
        name: "Эстель", 
        emotion: "estel_bitelips.png", 
        text: "«Что если она доложит отцу-настоятелю?»"
    },
    {
        name: "", 
        emotion: "none", 
        text: "В нашей гимназии за одно лишь упоминание лукавого в суе можно было оказаться запертой в сыром карцере под часовней на трое суток, без еды и света, наедине с крысами и собственными грехами."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я мотаю головой, пытаясь отогнать эти мысли — сейчас на это мало времени."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Колокол на башне бьет последние, предупреждающие удары, и его гул вибрирует прямо в грудной клетке."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девочки вокруг меня беззвучно, как призраки, мечутся по спальне, натягивая рясы."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита, даже не глядя в мою сторону, стремительно натягивает туфли."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ее лицо бледное, почти прозрачное в утреннем свете, а рыжие волосы заплетены в косу, которая растрепалась с ночи."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Пора идти."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мы гуськом выходим в длинный, нескончаемый коридор, где уже выстроились в ровные шеренги воспитанницы из других комнат."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Впереди, нас уже ждет сестра Агнесса, держа в руках раскрытый часослов и внимательно вглядываясь в каждое проходящее мимо лицо.",
        bg: "church_bg.jpeg",
        music: "church.mp3"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Хор уже пел утрену, заполняя пространство ангельскими звенящими голосами."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мы быстро и беззвучно встали по своим местам в строго отведенные ряды, как делали это каждый день."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но сегодня в воздухе, обычно пропитанном лишь страхом и покорностью, вибрировал едва уловимый, детский интерес."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я заметила, как девчонки то и дело бросают робкие, косые взгляды в сторону алтаря и переглядываются."
    },
    {
        name: "", 
        emotion: "none", 
        text: "По гимназии уже несколько дней ползли слухи: с сегодняшнего дня у нас новый священник — отец Адриан."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Говорят, совсем молодой, только что выучился и сразу нашел работу в нашем «райском уголке», который я просто называла Дарк передайсом — прямо как пела Лана Дель Рей."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я его еще не видела, но эта таинственность и непривычная перемена еще больше подогревали мой интерес, заставляя сердце биться чуть быстрее."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я выпрямила спину, сложила ладони перед грудью в благочестивом жесте и уставилась вперед, стараясь не выдать своего любопытства сестре Агнессе."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Тяжелые шаги из ризницы заставили хор взять более высокую, чистую ноту. В облаке густого ладанного дыма у алтаря появилась фигура в черной сутане."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Он действительно был молод — неприлично молод для этого места, где время словно остановилось."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Острые скулы, бледная кожа, резко контрастирующая с глухим черным цветом его облачения, и темные, глубокие глаза, которые медленно и внимательно окинули замерший перед ним строй девушек."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Положив руки на тяжелый алтарный миссал, он открыл рот, и его низкий, бархатный баритон разнесся под сводами, начиная молитву, от которой по моей шее побежали мурашки."
    },
    {
        emotion: "none", 
        bg: "adriane_catscene.jpeg"
    },
    {
        emotion: "none",
        bg: "church_bg.jpeg"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я не успела насладиться им: его голосом, его взглядом, его сущностью и присутствием."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Еще никогда утрена не проходила для меня так быстро, словно время сжалось в одну короткую, звенящую секунду."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я ловила каждое движение его бледных рук, перелистывающих страницы священной книги, вслушивалась в глубокие вибрации латыни, раскатывающейся под сводами."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но стоило священнику поднять руку для финального благословения, как этот морок развеялся."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Не успев и прошептать тихое «Аминь», я оказалась в столовой.",
        bg: "eatroom_bg.jpeg",
        music: "eatroom.mp3"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Реальность обрушилась на меня привычным холодом огромного зала с серыми каменными стенами и длинными деревянными столами, за которыми уже чинно рассаживались воспитанницы."
    },
    {
        name: "", 
        emotion: "none", 
        text: "В воздухе стоял удушливый, тошнотворный запах разваренной овсянки без соли и ячменного чая."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Посуда глухо гремела, но разговоры были строго запрещены."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я опустилась на свое место на жесткой скамье, чувствуя, как внутри все еще дрожит натянутая струна."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита села напротив."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она гордо выпрямила спину и улыбнулась."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Чего хочет эта лисица?"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девушка едва заметно наклонилась вперед над столом."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ее пальцы под тяжелой дубовой столешницей судорожно сжали какой-то мелкий предмет, спрятанный в складках белья. "
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она скользнула блестящим взглядом по мне, а затем заговорщически прищурилась, явно собираясь втянуть меня в очередную опасную игру против монастырского устава."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но она быстро спрятала предмет обратно, когда взгляд наставницы скользнул к нам."
    },
    {
        name: "", 
        emotion: "none", 
        text: "Выйдя из трапезной, я тут же нагнала её за углом.",
        bg: "hall_bg.jpeg",
        music: "eatroom.mp3"
    },
    {
        name: "Эстель", 
        emotion: "estelnun_lips.png", 
        text: "Что это ты там прятала, а?"
    },
    {
        text: "🪽", // Кінець першої глави!
        name: "",
        bg: ""
    }
];

// --- ГЛАВА 2: ПЫЛЬНЫЙ ЗАНАВЕС ---
const dustyCurtainLines = [
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита воровато оглянулась на угол, откуда в любую секунду могла показаться черная ряса наставницы.",
        bg: "hall_bg.jpeg",
        music: "eatroom.mp3"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Вместо ответа она медленно разжала пальцы, демонстрируя на ладони тонкий, блестящий латунный ключ с витиеватой бородкой, на котором еще осталась свежая кладбищенская грязь."
    },
    {
        emotion: "none", 
        bg: "key.jpeg"
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Ключ от старой исповедальни в южном крыле.",
        bg:"hall_bg.jpeg"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Выдохнула она, и её глаза расширились от дикого, запретного восторга.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Туда годами никого не пускали.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Но сегодня после вечерни наш новый святой отец пойдет туда разбирать старые архивы.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Один.",
    },
    {
        name: "Эстель", 
        emotion: "estelnun_brow.png", 
        text: "Ты хочешь, чтобы мы…",
    },
    {
        name: "Эстель", 
        emotion: "estelnun_smile.png", 
        text: "Присоединились к нему?",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я улыбнулась, будто уже с ним флиртовала.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_brow.png", 
        text: "Присоединились?",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Святая Эстель сошла сума…",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Но мне нравится этот ход мыслей.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_side.png", 
        text: "Если мы проберемся туда через боковую галерею после отбоя, мы застанем его врасплох.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она сунула ключ обратно себе в белье.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Из-за угла послышался отчетливый шорох тяжелой ткани и стук четок — наставницы заканчивали обход столовой и направлялись в нашу сторону.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Решайся сейчас.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Быстро прошептала Маргарита, прижимаясь плечом к стене и делая вид, что просто ведет непринужденную беседу.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Если ты со мной, мы встретимся у винтовой лестницы сразу, как только Агнесса закроет ворота спальни.",
    },
    {
        name: "Эстель", 
        emotion: "estelnun_brow.png", 
        text: "Откуда у тебя вообще этот ключ?",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Прошептала я.",
    },
    {
        name: "Эстель", 
        emotion: "estelnun_brow.png", 
        text: "Это оригинал, а у него — копия?",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита лишь закатила глаза.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_eyes.png", 
        text: "Какой оригинал, Эстель?",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Наш новый святой отец получил связку от парадных дверей и часовни.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_down.png", 
        text: "А этот ключ принадлежал старому отцу Бенедикту.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Помнишь, как он внезапно преставился прошлой зимой?",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_normal.png", 
        text: "Его комнату опечатали, а вещи должны были сжечь, чтобы очистить от «скверны его болезни».",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Но кое-что затерялось в прачечной среди грязных простыней.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_down.png", 
        text: "Я нашла его на дне корзины, покрытого налетом и пахнущего подвальной плесенью.",
    },
    {
        name: "Маргарита", 
        emotion: "margarita_smile.png", 
        text: "Сестра Агнесса даже не знает о его существовании.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Шаги сестры Агнессы за углом стали отчетливыми, тяжелыми.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Шорох ее жесткого апостольника о стены заставил кровь застыть у меня в жилах.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Еще секунда — и ее грузная тень падет на нашу нишу.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита резко вырвала свой локоть из моих пальцев, мгновенно стирая с лица любое подобие заговорщической улыбки.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ее губы сжались в покорную, скорбную линию, а глаза уставились в пол, словно она усердно повторяла утреннюю молитву.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Агнесса зовет нас на занятия. Когда мы слегка отрываемся, я киваю Маргарите в знак согласия на эту, не такую уж и маленькую, шалость.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "После уроков и вечерней молитвы мы снова переодеваемся в сорочки, делая вид, что послушно пойдем спать.",
        bg: "room_night.jpeg",
        music: "chapter1.mp3"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Из своей прикроватной тумбочки я достаю тот самый ключ, который взяла разглядеть у Маргариты, но вернуть не успела — мне задали вопрос о стихе из псалма.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но рыжулю привлекло совсем другое — на дне стопкой лежали пластинки Ланы Дель Рей, которые передала мне мама, ещё до этой церковной гимназии. ",
    },
    { 
        emotion: "none", 
        bg: "lana.jpeg"
    },
    {
        name: "Маргарита", 
        emotion: "margarita_bb.png", 
        text: "Ты всё ещё хранишь их?",
        bg: "room_night.jpeg"
    },
    {
        name: "Эстель", 
        emotion: "estel_lips.png", 
        text: "Храню.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Шикнула я, закатив глаза.",
    },
    {
        name: "Эстель", 
        emotion: "estel_eyes.png", 
        text: "Это единственное, что связывает меня с нормальной жизнью.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита осторожно, словно к величайшей святыне, прикоснулась кончиками пальцев к глянцевому картону конверта.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_neutral.png", 
        text: "Боже, Эстель, это же музыка грешников.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_neutral.png", 
        text: "О свободе, наркотиках, печали и мужчинах.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я невольно вспомнила детство.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мне десять лет — мир тогда казался огромным, ярким и совсем не страшным.",
        music: "westcoast.mp3",
        bg: "westcoast.jpeg"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я отчетливо вижу маму.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ей тогда исполнилось тридцать девять — возраст, который казался мне вершиной взрослой, загадочной жизни.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она стоит на веранде нашего старого дома в летнем платье, которое колышется от ленивого морского бриза.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "В ее тонких пальцах с красным маникюром тлеет тонкая сигарета, пуская в чистое синее небо сизые струйки дыма.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мама затягивается, слегка прикрыв глаза, густо подведенные черным карандашом.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "От нее пахнет дорогими парфюмами, табаком и кремом.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она кажется мне самой красивой женщиной в мире, сошедшей с обложки старого глянцевого журнала.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "А на фоне, заполняя собой все пространство нагретого солнцем двора, из старого проигрывателя доносится тягучий, гипнотический голос Ланы — West Coast.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мама стряхивает пепел прямо в куст растущих у крыльца цветов, и улыбается мне.",
    },
    {
        name: "Эстель", 
        emotion: "little_estel.png", 
        text: "Мама, снова ты включила эту песню!",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я обиженно дую губы.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Вот уже как два месяца мы не жили с отцом — они стали законно разведенными.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но маму это, кажется, не расстраивало.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Напротив, избавившись от его удушающего контроля, она словно сбросила с себя тяжелый, уродливый панцирь.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она стала носить эти открытые летние платья, красить губы ярче, курить прямо на веранде и часами слушать Лану, растворяясь в тягучих гитарных аккордах.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Для нее этот развод стал глотком чистой свободы, триумфом ее эгоизма и красоты.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "А для меня, десятилетней, все это было в новинку — я обижалась, надувала губы, скучала по привычному порядку, но в то же время не могла отвести глаз от этой обновленной, опасной и такой притягательной мамы.",
    },
    {
        name: "Мама", 
        emotion: "mom.png", 
        text: "Привыкай, детка.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она стряхнула пепел своими тонкими пальцами прямо в землю горшка с цветком.",
    },
    {
        name: "Мама", 
        emotion: "mom.png", 
        text: "Под эту музыку куда легче начинать все сначала.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_angry.png", 
        text: "Эстель!",
        bg: "room_night.jpeg",
        music: "chapter1.mp3"
    },
    {
        name: "Маргарита", 
        emotion: "hero_angry.png", 
        text: "Да очнись же ты.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита больно дернула меня за локоть, окончательно разбивая залитую солнцем веранду и удушающий запах маминых сигарет.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_neutral.png", 
        text: "Ты как будто призрака увидела.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_angry.png", 
        text: "Хватит чахнуть над этим винилом.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_serious.png", 
        text: "Шаги дежурной монахини на первом этаже затихли, она ушла на обход дальнего крыла.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_serious.png", 
        text: "У нас есть минут двадцать, пока Агнесса не двинется проверять посты.",
    },
    {
        name: "Маргарита", 
        emotion: "hero_angry.png", 
        text: "Если мы не выйдем сейчас, то не выйдем вообще.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она потянула меня за рукав ночной сорочки к приоткрытой двери спальни.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Нам предстояло спуститься по винтовой лестнице в южное крыло.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Дверь нашей спальни поддалась без единого звука — мы с Маргаритой знали каждую скрипучую половицу в этом проклятом крыле.",
        bg: "nighthall_bg.jpeg"
    },
    {
        name: "", 
        emotion: "none", 
        text: "Босые ступни мгновенно обожгло ледяным холодом каменного пола.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ночная сорочка казалась слишком тонкой, почти прозрачной под порывами сквозняка, который гулял по бесконечным галереям гимназии, шевеля тяжелые черные занавески на окнах.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита шла чуть впереди.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она вела меня к винтовой лестнице южного крыла — заброшенной части монастыря, куда воспитанницам вход был строго воспрещен.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Когда мы наконец спустились к тяжелой дубовой двери старой исповедальни, мое сердце колотилось так сильно, что казалось, его стук разносится по всему зданию.",
        bg: "night_bg.jpeg",
        music: "bruno.mp3"
    },
    {
        name: "", 
        emotion: "none", 
        text: "В щели под дверью брезжил слабый, дрожащий желтый свет — там горела свеча.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я разжала кулак.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Латунный ключ, согретый теплом моей ладони, тускло блеснул.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я протянула руку, вставляя ключ в тяжелую замочную скважину.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Металл внутри замка повернулся с глухим, маслянистым скрежетом, который показался мне оглушительным взрывом.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Дверь медленно, со стоном поддалась назад.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Внутри небольшой, заваленной старыми фолиантами и полусгнившими коробками комнаты было прохладно.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "У узкого стола, заваленного пожелтевшими бумагами, спиной к нам стоял он.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "От звука открывшейся двери он резко обернулся.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Вздрогнувшее пламя свечи выхватило из темноты его строгое, бледное лицо и темные, почти черные глаза, в которых вместо праведного гнева на мгновение отразился чистый, земной испуг.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мы стояли на пороге в своих тонких, помятых ночных сорочках, тяжело дыша, и взгляд молодого священника медленно скользнул от моих босых ног вверх, задерживаясь на ключах в моей руке, а затем остановился прямо на моих губах.",
    },
    {
        text: "🪽",
        name: "",
        bg: "" // Кінець другої глави!        
    }
];

// === 3. КЕРУВАННЯ ГРОЮ ===
let currentStory = [];       // Сюди завантажиться активна глава
let currentLineIndex = 0;    // Номер поточного речення

// 1. Натискання "УВІЙТИ"
if (enterBtn) {
    enterBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        mainMenu.classList.remove('hidden');
        if (menuMusic) menuMusic.play().catch(e => console.log("Музика чекає взаємодії"));
    });
}

// 2. Натискання "ПОЧАТИ ГРУ" -> перехід до вибору глав
if (startBtn) {
    startBtn.addEventListener('click', () => {
        mainMenu.classList.add('hidden');
        chaptersMenu.classList.remove('hidden');
    });
}

// 3. Натискання "НАЗАД" -> повернення в головне меню
if (backBtn) {
    backBtn.addEventListener('click', () => {
        chaptersMenu.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    });
}

// [СУПЕР-ОНОВЛЕНО!] Функція для запуску екрана гри з примусовим фарбуванням тексту в білий колір
function startChapter(selectedLines) {
    chaptersMenu.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    if (menuMusic) menuMusic.pause();
    if (chapterMusic) chapterMusic.play().catch(e => console.log("Музика чекає кліку"));

    currentStory = selectedLines; // Завантажуємо вибрану главу
    currentLineIndex = 0;         // Починаємо спочатку

    // Знаходимо тексти (якщо раптом не знайшли раніше)
    const activeNumText = document.getElementById('chapter-num-text') || (chapterTitleScreen ? chapterTitleScreen.querySelector('h2') : null);
    const activeTitleText = document.getElementById('chapter-title-text') || (chapterTitleScreen ? chapterTitleScreen.querySelector('h1') : null);

    // --- ЗМІНА ЗАСТАВКИ ТА ПРИМУСОВИЙ БІЛИЙ КОЛІР ---
    if (activeNumText && activeTitleText) {
        if (selectedLines === awakeningLines) {
            activeNumText.textContent = "ГЛАВА 1";
            activeTitleText.textContent = "Пробуждение";
        } else if (selectedLines === dustyCurtainLines) {
            activeNumText.textContent = "ГЛАВА 2";
            activeTitleText.textContent = "Пыльный занавес";
        }

        // Робимо магію: фарбуємо в білий колір, центруємо і робимо видимими!
        activeNumText.style.color = "#ffffff";
        activeNumText.style.display = "block";
        activeNumText.style.opacity = "1";

        activeTitleText.style.color = "#ffffff";
        activeTitleText.style.display = "block";
        activeTitleText.style.opacity = "1";
    }

    // Показуємо заставку назви глави, якщо вона є
    if (chapterTitleScreen) {
        chapterTitleScreen.classList.remove('hidden');
        chapterTitleScreen.style.opacity = '1';
    }

    // Плавно прибираємо заставку через 2.5 секунди
    setTimeout(() => {
        if (chapterTitleScreen) {
            chapterTitleScreen.style.opacity = '0';
            setTimeout(() => {
                chapterTitleScreen.classList.add('hidden');
                
                // Показуємо текстове вікно та запускаємо першу репліку
                if (dialogueBox) dialogueBox.classList.remove('hidden');
                updateDialogue();
            }, 1500);
        } else {
            if (dialogueBox) dialogueBox.classList.remove('hidden');
            updateDialogue();
        }
    }, 2500);
}

// Клік по кнопці "Глава 1: Пробуждение"
if (chap1Btn) {
    chap1Btn.addEventListener('click', () => {
        startChapter(awakeningLines); // Передаємо сюжет першої глави
    });
}

// Клік по кнопці "Глава 2: Пыльный занавес"
if (chap2Btn) {
    chap2Btn.addEventListener('click', () => {
        startChapter(dustyCurtainLines); // Передаємо сюжет другої глави
    });
}

// Функція, яка оновлює текст, ім'я, емоцію, ФОН та МУЗИКУ
function updateDialogue() {
    const currentLine = currentStory[currentLineIndex];
    
    if (!currentLine) return;

    // --- Текст ---
    if (!currentLine.text || currentLine.text.trim() === "") {
        if (dialogueBox) {
            dialogueBox.style.opacity = "0";
            dialogueBox.style.pointerEvents = "none";
        }
        if (storyText) storyText.textContent = "";
    } else {
        if (dialogueBox) {
            dialogueBox.style.opacity = "1";
            dialogueBox.style.pointerEvents = "auto";
        }
        if (storyText) storyText.textContent = currentLine.text;
    }
    
    // --- Ім'я ---
    if (!currentLine.name || currentLine.name === "") {
        if (nameBox) nameBox.style.display = "none";
    } else {
        if (nameBox && currentLine.text && currentLine.text.trim() !== "") {
            nameBox.style.display = "block";
            nameBox.textContent = currentLine.name;
        } else if (nameBox) {
            nameBox.style.display = "none";
        }
    }
    
    // --- Персонажі ---
    if (charLeft) charLeft.classList.add('hidden');
    if (charRight) charRight.classList.add('hidden');
    
    if (currentLine.emotion && currentLine.emotion !== "none") {
        if (currentLine.emotion.includes("estel")) {
            if (charLeft) {
                charLeft.classList.remove('hidden');
                charLeft.src = "images/" + currentLine.emotion;
            }
        } else {
            if (charRight) {
                charRight.classList.remove('hidden');
                charRight.src = "images/" + currentLine.emotion;
            }
        }
    }

    // --- Зміна фону ---
    if (currentLine.bg) {
        if (gameScreen) {
            gameScreen.style.opacity = "0.3"; 
            gameScreen.style.transition = "opacity 0.8s ease-in-out";

            setTimeout(() => {
                gameScreen.style.backgroundImage = "url('images/" + currentLine.bg + "')";
                setTimeout(() => {
                    gameScreen.style.opacity = "1";
                }, 100);
            }, 800);
        }
    }

    // --- Зміна музики ---
    if (currentLine.music) {
        if (chapterMusic) {
            let vol = 1.0;
            const fadeInterval = setInterval(() => {
                if (vol > 0.1) {
                    vol -= 0.1;
                    chapterMusic.volume = vol;
                } else {
                    clearInterval(fadeInterval);
                    chapterMusic.pause();
                    chapterMusic.src = "audio/" + currentLine.music;
                    chapterMusic.volume = 1.0;
                    chapterMusic.load();
                    chapterMusic.play().catch(e => console.log("Музика чекає кліку"));
                }
            }, 100);
        }
    }
}

// Клік по екрану гри -> наступний слайд або вихід в меню глав
if (gameScreen) {
    gameScreen.addEventListener('click', () => {
        if (chapterTitleScreen && !chapterTitleScreen.classList.contains('hidden')) {
            return; 
        }

        currentLineIndex++;

        if (currentLineIndex < currentStory.length) {
            // ПЕРЕВІРКА: Якщо наступний рядок — це твоя мітка кінця глави 🪽
            if (currentStory[currentLineIndex].text === "🪽") {
                alert("Главу завершено! Повертаємось до вибору глав.");
                
                gameScreen.classList.add('hidden'); // Ховаємо гру
                chaptersMenu.classList.remove('hidden'); // Повертаємо в меню вибору глав
                
                if (chapterMusic) chapterMusic.pause();
                if (menuMusic) menuMusic.play().catch(e => console.log("Музика чекає взаємодії"));
                
                currentLineIndex = 0; // Скидаємо лічильник
                return;
            }

            updateDialogue(); 
        } else {
            // Якщо раптом дійшли до кінця файлу, а смайлик забули поставити
            gameScreen.classList.add('hidden');
            chaptersMenu.classList.remove('hidden');
            if (chapterMusic) chapterMusic.pause();
            if (menuMusic) menuMusic.play().catch(e => console.log("Музика чекає взаємодії"));
            currentLineIndex = 0;
        }
    });
}
