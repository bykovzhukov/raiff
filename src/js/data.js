export default {
    title: 'Угадайте, чья это карта',
    description: 'Мы зашифровали 12 личностей в дизайнах 12 карт. Попробуйте угадать, кому они могли бы принадлежать.',
    link: 'https://www.raiffeisen.ru/',
    tryLink: 'https://www.raiffeisen.ru/retail/cards/debit/new/request_auth/?card=CS0200-VS06&utm_source=vc.ru&utm_medium=article&utm_campaign=vsesrazu-vc-aug-2018',
    questions: [{
        img: 'images/cards/1.jpg',
        img2x: 'images/cards/1@2x.jpg',
        holder: 'Pavel Durov',
        correct: 'Да! Дуров, как известно, бунтарь. И в своём профиле Instagram <a href="https://www.instagram.com/p/BhwWI03l82y" target="_blank">называл</a> «300 спартанцев» любимым фильмом.',
        incorrect: 'Нет, это карта Дурова. А он, как известно, бунтарь. И в своём профиле Instagram <a href="https://www.instagram.com/p/BhwWI03l82y" target="_blank">называл</a> «300 спартанцев» любимым фильмом.',
        options: [{
            text: 'Павел Дуров',
            isCorrect: true
        }, {
            text: 'Киану Ривз'
        }, {
            text: 'Майк Тайсон'
        }, {
            text: 'Герман Стерлигов'
        }]
    }, {
        img: 'images/cards/2.jpg',
        img2x: 'images/cards/2@2x.jpg',
        holder: 'Elon Musk',
        correct: 'Верно! Все знают, что Маск мечтает колонизировать Марс, построить там дом, посадить дерево и, конечно же, поставить в гараж Tesla.',
        incorrect: 'Нет :( Такой могла бы быть карта Илона Маска. Он мечтает колонизировать Марс, построить там дом, посадить дерево и, конечно же, поставить в гараж Tesla.',
        options: [{
            text: 'Илон Маск',
            isCorrect: true
        }, {
            text: 'Рэй Брэдбери'
        }, {
            text: 'Джордж Лукас'
        }, {
            text: 'Марк Цукерберг'
        }]
    }, {
        img: 'images/cards/3.jpg',
        img2x: 'images/cards/3@2x.jpg',
        holder: 'Vitalik Buterin',
        correct: 'Да, это карта Виталика. Когда-нибудь он избавит мир от наличных и посредников, на Уолл-Стрит опустится туман, и бык отступит назад.',
        incorrect: 'Нет, здесь зашифрован Виталик Бутерин. Когда-нибудь он избавит мир от наличных и посредников, на Уолл-Стрит опустится туман, и бык отступит назад.',
        options: [{
            text: 'Виталик Бутерин',
            isCorrect: true
        }, {
            text: 'Уоррен Баффет'
        }, {
            text: 'Дональд Трамп'
        }, {
            text: 'Джордан Белфорт'
        }]
    }, {
        img: 'images/cards/4.jpg',
        img2x: 'images/cards/4@2x.jpg',
        isDark: true,
        holder: 'Sergey Brin',
        correct: 'Да, это карта Брина. На карте стоит число, которое называется «гугол» — от него произошло название главной поисковой системы.',
        incorrect: 'Нет, это карта основателя Google — можно было догадаться по набору цветов. На карте стоит число, которое называется «гугол».',
        options: [{
            text: 'Сергей Брин',
            isCorrect: true
        }, {
            text: 'Альберт Эйнштейн'
        }, {
            text: 'Джефф Безос'
        }, {
            text: 'Григорий Перельман'
        }]
    }, {
        img: 'images/cards/5.jpg',
        img2x: 'images/cards/5@2x.jpg',
        holder: 'Richard Branson',
        correct: 'Правильно, тот самый Ричард. Он мечтает о том, чтобы однажды стерлась граница между его развлечениями на Земле и в космосе.',
        incorrect: 'К сожалению, нет. На карте предприниматель Ричард Брэнсон, который мечтает о том, чтобы однажды стерлась граница между его развлечениями на Земле и в космосе.',
        options: [{
            text: 'Ричард Брэнсон',
            isCorrect: true
        }, {
            text: 'Пол Маккартни'
        }, {
            text: 'Джон Траволта'
        }, {
            text: 'Олег Тиньков'
        }]
    }, {
        img: 'images/cards/6.jpg',
        img2x: 'images/cards/6@2x.jpg',
        holder: 'Bill Gates',
        correct: 'Да, это карта Гейтса! Много кто занимается благотворительностью, но именно создатель Microsoft считает своей миссией поиск технологий, которые позволят обеспечить питьевой водой всех нуждающихся.',
        incorrect: 'Нет, это карта Билла Гейтса. Много кто занимается благотворительностью, но именно создатель Microsoft считает своей миссией поиск технологий, которые позволят обеспечить питьевой водой всех нуждающихся.',
        options: [{
            text: 'Билл Гейтс',
            isCorrect: true
        }, {
            text: 'Анджелина Джоли'
        }, {
            text: 'Барак Обама'
        }, {
            text: 'Тим Кук'
        }]
    }, {
        img: 'images/cards/7.jpg',
        img2x: 'images/cards/7@2x.jpg',
        holder: 'Jonathan Ive',
        isHiddenLogo: true,
        correct: 'Да, это карта Джонатана Айва! Он обязательно бы добился абсолютной чистоты на макете и, скорее всего, попросил бы сделать карту алюминиевой.',
        incorrect: 'Нет, это карта главного дизайнера Apple. Он обязательно бы добился абсолютной чистоты на макете и, скорее всего, попросил бы сделать карту алюминиевой.',
        options: [{
            text: 'Джони Айв',
            isCorrect: true
        }, {
            text: 'Артемий Лебедев'
        }, {
            text: 'Заха Хадид'
        }, {
            text: 'Казимир Малевич'
        }]
    }, {
        img: 'images/cards/8.jpg',
        img2x: 'images/cards/8@2x.jpg',
        holder: 'Phil Knight',
        correct: 'Да, это карта Найта. Все перечисленные здесь предприниматели выбрали себе логотипы, написанные одним и тем же шрифтом — Futura. Но заглавными и курсивом — только Nike.',
        incorrect: 'Сложный вопрос! Все перечисленные здесь предприниматели выбрали себе логотипы, написанные одним и тем же шрифтом — Futura. Но заглавными и курсивом — только Nike. А её основателя зовут Фил Найт.',
        options: [{
            text: 'Фил Найт',
            isCorrect: true
        }, {
            text: 'Джеймс Джеббиа'
        }, {
            text: 'Кинг Жилетт'
        }, {
            text: 'Луи Виттон'
        }]
    }, {
        img: 'images/cards/9.jpg',
        img2x: 'images/cards/9@2x.jpg',
        holder: 'Angela Merkel',
        correct: 'Знаете мемы! Это карта Ангелы Меркель, федерального канцлера Германии. У Ангелы очень много фотографий, на которых она складывает руки в такой ромб.',
        incorrect: 'Нет, это была бы карта Ангелы Меркель, федерального канцлера Германии. У Ангелы очень много фотографий, на которых она складывает руки в такой ромб.',
        options: [{
            text: 'Ангела Меркель',
            isCorrect: true
        }, {
            text: 'Ксения Собчак'
        }, {
            text: 'Иван Павлов'
        }, {
            text: 'Амаяк Акопян'
        }]
    }, {
        img: 'images/cards/10.jpg',
        img2x: 'images/cards/10@2x.jpg',
        isDark: true,
        holder: 'Gosha Rubchinsky',
        correct: 'Да, это карта Гоши Рубчинского — российского дизайнера, известного в Японии и на Западе. В своих работах он любит отсылаться к атрибутам прошлого.',
        incorrect: 'Нет, это карта Гоши Рубчинского — российского дизайнера, известного в Японии и на Западе. В своих работах он любит отсылаться к атрибутам прошлого.',
        options: [{
            text: 'Гоша Рубчинский',
            isCorrect: true
        }, {
            text: 'Владимир Путин'
        }, {
            text: 'Герман Греф'
        }, {
            text: 'Покрас Лампас'
        }]
    }, {
        img: 'images/cards/11.jpg',
        img2x: 'images/cards/11@2x.jpg',
        imgR: 'images/cards/11.2.jpg',
        imgR2x: 'images/cards/11.2@2x.jpg',
        isReplaceCard: true,
        isDark: true,
        holder: 'Banksy',
        correct: 'Да, это карта Бэнкси. А купюра с принцессой Дианой — одна из его нашумевших работ.',
        incorrect: 'Нет, это же карта Бэнкси. Купюра с принцессой Дианой — одна из его нашумевших работ.',
        options: [{
            text: 'Бэнкси',
            isCorrect: true
        }, {
            text: 'Артемий Лебедев'
        }, {
            text: 'Анатолий Кашпировский'
        }, {
            text: 'Принц Уэльский'
        }]
    }, {
        img: 'images/cards/12.jpg',
        img2x: 'images/cards/12@2x.jpg',
        isLoupe: true,
        isDarkLogo: true,
        holder: 'Anatoly Vasserman',
        correct: 'Да, это карта Вассермана — он любит носить в своей жилетке инструменты на все случаи жизни.',
        incorrect: 'Нет, это карта Анатолия Вассермана — большого любителя носить с собой в жилетке инструменты на все случаи жизни.',
        options: [{
            text: 'Анатолий Вассерман',
            isCorrect: true
        }, {
            text: 'Фёдор Конюхов'
        }, {
            text: 'Пётр Павленский'
        }, {
            text: 'Слава ПТРК'
        }]
    }]
};