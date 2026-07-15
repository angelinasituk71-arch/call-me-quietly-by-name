// === 1. ВСІ НАШІ ЕЛЕМЕНТИ З HTML ===
const splashScreen = document.getElementById('splash-screen');
const mainMenu = document.getElementById('main-menu');
const chaptersMenu = document.getElementById('chapters-menu');

const enterBtn = document.getElementById('enter-btn');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const chap1Btn = document.getElementById('chap1-btn');

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

// === 2. ТВІЙ СЮЖЕТ ===
const storyLines = [
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
        text: "У самой вон — колени все в синяках.",
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
        text: "Воспитанница Эстель.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Её голос звучит в гробовой тишине спальни.",
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_natural.png", 
        text: "На утреннюю литургию даровано пятнадцать минут.",
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Ты же позволяешь себе лежать в постели, оскверняя час Господень праздностью, да еще и ведешь недозволенные речи.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она оборачивается, обращаясь ко всем послушницам.",
    },
    {
        name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Переодевайтесь и спускайтесь на низ.",
    },
    {
name: "Наставница Агнесса", 
        emotion: "nun_anger.png", 
        text: "Живо.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она резко разворачивается, и тяжелые шаги наставницы быстро удаляются по коридору, оставляя после себя лишь давящую, звенящую тишину.",
    },
    {
        name: "Эстель", 
        emotion: "estel_anger.png", 
        text: "«Эта старая карга подслушивала наш разговор…»",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Тяжелым свинцом бьется у меня в висках, пока я судорожно натягиваю сухое белье.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Руки мелко дрожат, пальцы путаются в завязках.",
    },
    {
        name: "Эстель", 
        emotion: "estel_bitelips.png", 
        text: "«А что если про дьявола, которого упоминала Маргарита, она тоже слышала?»",
    },
    {
        name: "Эстель", 
        emotion: "estel_bitelips.png", 
        text: "«Что если она доложит отцу-настоятелю?»",
    },
    {
        name: "", 
        emotion: "none", 
        text: "В нашей гимназии за одно лишь упоминание лукавого в суе можно было оказаться запертой в сыром карцере под часовней на трое суток, без еды и света, наедине с крысами и собственными грехами.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я мотаю головой, пытаясь отогнать эти мысли — сейчас на это мало времени.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Колокол на башне бьет последние, предупреждающие удары, и его гул вибрирует прямо в грудной клетке.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девочки вокруг меня беззвучно, как призраки, мечутся по спальне, натягивая рясы.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита, даже не глядя в мою сторону, стремительно натягивает туфли.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ее лицо бледное, почти прозрачное в утреннем свете, а рыжие волосы заплетены в косу, которая растрепалась с ночи.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Пора идти.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Мы гуськом выходим в длинный, нескончаемый коридор, где уже выстроились в ровные шеренги воспитанницы из других комнат.",
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
        text: "Мы быстро и беззвучно встали по своим местам в строго отведенные ряды, как делали это каждый день.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но сегодня в воздухе, обычно пропитанном лишь страхом и покорностью, вибрировал едва уловимый, детский интерес.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я заметила, как девчонки то и дело бросают робкие, косые взгляды в сторону алтаря и переглядываются.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "По гимназии уже несколько дней ползли слухи: с сегодняшнего дня у нас новый священник — отец Адриан.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Говорят, совсем молодой, только что выучился и сразу нашел работу в нашем «райском уголке», который я просто называла Дарк передайсом — прямо как пела Лана Дель Рей.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я его еще не видела, но эта таинственность и непривычная перемена еще больше подогревали мой интерес, заставляя сердце биться чуть быстрее.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я выпрямила спину, сложила ладони перед грудью в благочестивом жесте и уставилась вперед, стараясь не выдать своего любопытства сестре Агнессе.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Тяжелые шаги из ризницы заставили хор взять более высокую, чистую ноту. В облаке густого ладанного дыма у алтаря появилась фигура в черной сутане.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Он действительно был молод — неприлично молод для этого места, где время словно остановилось.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Острые скулы, бледная кожа, резко контрастирующая с глухим черным цветом его облачения, и темные, глубокие глаза, которые медленно и внимательно окинули замерший перед ним строй девушек.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Положив руки на тяжелый алтарный миссал, он открыл рот, и его низкий, бархатный баритон разнесся под сводами, начиная молитву, от которой по моей шее побежали мурашки."
    },
    {
        // Кат-сцена (без тексту, просто картинка Адріана)
        emotion: "none", 
        bg: "adriane_catscene.jpeg"
    },
    {
        // Наступний кадр (теж пауза, перехід на загальний фон церкви)
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
        text: "Еще никогда утрена не проходила для меня так быстро, словно время сжалось в одну короткую, звенящую секунду.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я ловила каждое движение его бледных рук, перелистывающих страницы священной книги, вслушивалась в глубокие вибрации латыни, раскатывающейся под сводами.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но стоило священнику поднять руку для финального благословения, как этот морок развеялся.",
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
        text: "Реальность обрушилась на меня привычным холодом огромного зала с серыми каменными стенами и длинными деревянными столами, за которыми уже чинно рассаживались воспитанницы.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "В воздухе стоял удушливый, тошнотворный запах разваренной овсянки без соли и ячменного чая.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Посуда глухо гремела, но разговоры были строго запрещены.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Я опустилась на свое место на жесткой скамье, чувствуя, как внутри все еще дрожит натянутая струна.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Маргарита села напротив.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она гордо выпрямила спину и улыбнулась.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Чего хочет эта лисица?",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Девушка едва заметно наклонилась вперед над столом.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Ее пальцы под тяжелой дубовой столешницей судорожно сжали какой-то мелкий предмет, спрятанный в складках белья. ",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Она скользнула блестящим взглядом по мне, а затем заговорщически прищурилась, явно собираясь втянуть меня в очередную опасную игру против монастырского устава.",
    },
    {
        name: "", 
        emotion: "none", 
        text: "Но она быстро спрятала предмет обратно, когда взгляд наставницы скользнул к нам.",
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
    }
];
let currentLineIndex = 0; // Номер речення, яке зараз читають

enterBtn.addEventListener('click', () => {
    splashScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    if (menuMusic) menuMusic.play().catch(e => console.log("Музика чекає взаємодії"));
});

// 2. Натискання "ПОЧАТИ ГРУ" -> перехід до вибору глав
startBtn.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    chaptersMenu.classList.remove('hidden');
});

// 3. Натискання "НАЗАД" -> повернення в головне меню
backBtn.addEventListener('click', () => {
    chaptersMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
});

chap1Btn.addEventListener('click', () => {
    chaptersMenu.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    if (menuMusic) menuMusic.pause();
    if (chapterMusic) chapterMusic.play().catch(e => console.log("Музика чекає кліку"));

    // Плавно прибираємо чорний екран «Пробуждение» через 2.5 секунди
    setTimeout(() => {
        if (chapterTitleScreen) {
            chapterTitleScreen.style.opacity = '0';
            setTimeout(() => {
                chapterTitleScreen.classList.add('hidden');
                
                // Показуємо текстове вікно
                if (dialogueBox) dialogueBox.classList.remove('hidden');
                
                // Запускаємо перше речення (ВИПРАВЛЕНО: тепер з маленької літери!)
                updateDialogue();
            }, 1500);
        }
    }, 2500);
});

// Розумна функція, яка оновлює текст, ім'я, емоцію, ФОН та МУЗИКУ
function updateDialogue() {
    const currentLine = storyLines[currentLineIndex];
    
    // --- Робота з діалоговим вікном та текстом ---
    if (!currentLine.text || currentLine.text.trim() === "") {
        // Якщо тексту взагалі немає (кат-сцена), ховаємо всю чорну плашку тексту
        if (dialogueBox) {
            dialogueBox.style.opacity = "0";
            dialogueBox.style.pointerEvents = "none"; // Щоб воно не заважало клікати по екрану
        }
        if (storyText) storyText.textContent = "";
    } else {
        // Якщо текст є, повертаємо плашку назад
        if (dialogueBox) {
            dialogueBox.style.opacity = "1";
            dialogueBox.style.pointerEvents = "auto";
        }
        if (storyText) storyText.textContent = currentLine.text;
    }
    
    // --- Перевіряємо ім'я ---
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
    
    // --- Спочатку ховаємо обох персонажів перед кожним новим рядком ---
    if (charLeft) charLeft.classList.add('hidden');
    if (charRight) charRight.classList.add('hidden');
    
    // --- Показуємо потрібного персонажа ---
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

    // --- Автоматична ПЛАВНА зміна фону ---
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

    // --- Автоматична ПЛАВНА зміна музики ---
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
} // Кінець функції updateDialogue

// Клік по всьому екрану гри -> показує наступний слайд (ВИПРАВЛЕНО: прибрали зайве вкладення)
if (gameScreen) {
    gameScreen.addEventListener('click', () => {
        // Дозволяємо клікати далі, тільки якщо не йде заставка з назвою глави
        if (chapterTitleScreen && !chapterTitleScreen.classList.contains('hidden')) {
            return; 
        }

        currentLineIndex++;

        if (currentLineIndex < storyLines.length) {
            updateDialogue(); // Оновлюємо все разом
        } else {
            // Якщо речення закінчилися (Кінець демо-версії)
            if (dialogueBox) {
                dialogueBox.style.opacity = "1";
                dialogueBox.style.pointerEvents = "auto";
            }
            if (storyText) {
                storyText.textContent = "🪽";
            }
            if (nameBox) {
                nameBox.style.display = "block";
                nameBox.textContent = "Система";
            }
            if (charLeft) charLeft.classList.add('hidden');
            if (charRight) charRight.classList.add('hidden');
        }
    });
}
