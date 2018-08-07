import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import Svg from './svg';
import * as Share from './lib/share';
import * as Analytics from './lib/analytics';
import { makeElement, removeChildren } from './lib/dom';
import { shuffle } from './lib/array';

const CSS = {
    main: 'Raiff',
};

const EL = {};

class Special extends BaseSpecial {
    constructor(params = {}) {
        super();

        Object.assign(this.params, params);
        this.saveParams();

        if (Data && params.data) {
            Object.assign(Data, params.data);
        }

        if (this.params.css) {
            this.loadStyles(this.params.css).then(() => this.init());
        } else {
            this.init();
        }
    }

    createEnter() {
        EL.enter = makeElement('div', CSS.main + '-enter');
        EL.eLogo = makeElement('a', CSS.main + '-enter__logo', {
            href: Data.link,
            target: '_blank',
            innerHTML: Svg.logo
        });
        EL.eImg = makeElement('img', CSS.main + '-enter__img', {
            src: 'images/enter.jpg',
            srcset: 'images/enter@2x.jpg 2x'
        });
        EL.eTitle = makeElement('div', CSS.main + '-enter__title', {
            textContent: Data.title
        });
        EL.eDesc = makeElement('div', CSS.main + '-enter__desc', {
            innerHTML: Data.description
        });
        EL.eStartBtn = makeElement('button', [CSS.main + '-enter__start-btn', CSS.main + '-btn'], {
            textContent: 'Начать',
            data: {
                click: 'start'
            }
        });

        EL.enter.appendChild(EL.eLogo);
        EL.enter.appendChild(EL.eImg);
        EL.enter.appendChild(EL.eTitle);
        EL.enter.appendChild(EL.eDesc);
        EL.enter.appendChild(EL.eStartBtn);

        this.container.appendChild(EL.enter);
    }

    createQuestion() {
        EL.question = makeElement('div', CSS.main + '-question');

        EL.qCard = makeElement('div', [CSS.main + '-question__card', CSS.main + '-card']);
        EL.qCardImg = makeElement('img', CSS.main + '-card__img');
        EL.qCardLoupe = makeElement('img', CSS.main + '-card__loupe', {
            src: 'images/cards/loupe.jpg',
            style: 'display: none;'
        });
        EL.qCardLogo = makeElement('a', CSS.main + '-card__logo', {
            href: Data.link,
            target: '_blank',
            innerHTML: Svg.logoEn
        });
        EL.qCardHolder = makeElement('div', CSS.main + '-card__holder');

        EL.qOptions = makeElement('div', CSS.main + '-question__options');

        EL.qUserAnswer = makeElement('div', CSS.main + '-question__user-answer');
        EL.qAnswer = makeElement('div', CSS.main + '-question__answer');
        EL.qNextBtn = makeElement('div', CSS.main + '-question__next-btn', {
            innerHTML: '<span>Продолжить</span>' + Svg.arrow,
            data: {
                click: 'continue'
            }
        });
        EL.qResultBtn = makeElement('div', CSS.main + '-question__next-btn', {
            innerHTML: '<span>Результат</span>' + Svg.arrow,
            data: {
                click: 'showResult'
            }
        });


        EL.qCard.appendChild(EL.qCardLoupe);
        EL.qCard.appendChild(EL.qCardImg);
        EL.qCard.appendChild(EL.qCardLogo);
        EL.qCard.appendChild(EL.qCardHolder);

        EL.question.appendChild(EL.qCard);
        EL.question.appendChild(EL.qOptions);
    }

    createResult() {
        EL.result = makeElement('div', CSS.main + '-result');
        EL.rHead = makeElement('div', CSS.main + '-result__head');
        EL.rBottom = makeElement('div', CSS.main + '-result__bottom');
        
        EL.rImg = makeElement('img', CSS.main + '-result__img');
        EL.rText = makeElement('div', CSS.main + '-result__text');
        EL.rShare = makeElement('div', CSS.main + '-result__share');
        EL.rRestartBtn = makeElement('div', CSS.main + '-result__restart-btn', {
            innerHTML: '<span>Пройти еще раз</span>' + Svg.refresh,
            data: {
                click: 'restart'
            }
        });

        EL.rCard = makeElement('div', [CSS.main + '-result__card', CSS.main + '-card']);
        EL.rCardImg = makeElement('img', CSS.main + '-card__img', {
            src: 'images/result/card.jpg',
            srcset: 'images/result/card@2x.jpg 2x'
        });
        EL.rCardLogo = makeElement('a', CSS.main + '-card__logo', {
            href: Data.link,
            target: '_blank',
            innerHTML: Svg.logoEn
        });
        EL.rTitle = makeElement('div', CSS.main + '-result__title', {
            textContent: 'Создайте уникальный дизайн карты'
        });
        EL.rLink = makeElement('a', CSS.main + '-result__try-btn', {
            href: Data.tryLink,
            target: '_blank',
            innerHTML: '<button class="' + CSS.main + '-btn' + '">Попробовать</button>'
        });
        EL.rNote = makeElement('div', CSS.main + '-result__note', {
            textContent: 'Правила международных платежных систем запрещают использовать в дизайне надписи, цифры и изображения денежных купюр.'
        });

        EL.rCard.appendChild(EL.rCardImg);
        EL.rCard.appendChild(EL.rCardLogo);

        EL.rHead.appendChild(EL.rImg);
        EL.rHead.appendChild(EL.rText);
        EL.rHead.appendChild(EL.rShare);
        EL.rHead.appendChild(EL.rRestartBtn);

        EL.rBottom.appendChild(EL.rCard);
        EL.rBottom.appendChild(EL.rTitle);
        EL.rBottom.appendChild(EL.rLink);
        EL.rBottom.appendChild(EL.rNote);

        EL.result.appendChild(EL.rHead);
        EL.result.appendChild(EL.rBottom);
    }

    makeNextQuestion() {
        let question = Data.questions[this.activeIndex];

        question.isHiddenLogo ? EL.qCardLogo.style.display = 'none' : EL.qCardLogo.style.display = 'block';
        question.isLoupe ? EL.qCardLoupe.style.display = 'block' : EL.qCardLoupe.style.display = 'none';
        EL.qCardImg.src = question.img;
        EL.qCardImg.srcset = question.img2x + ' 2x';
        EL.qCardHolder.textContent = '';

        question.isDark ? EL.qCard.classList.add('is-dark') : EL.qCard.classList.remove('is-dark');
        this.makeOptions(question.options);
    }

    makeOptions(options) {
        removeChildren(EL.qOptions);

        options = options.map((item, i) => { item.id = i; return item; });
        shuffle(options);
        options.forEach(item => {
            let optionWrap = makeElement('div', CSS.main + '-question__options-item');
            let option = makeElement('button', CSS.main + '-question__option', {
                textContent: item.text,
                data: {
                    id: item.id,
                    click: 'makeAnswer'
                }
            });
            optionWrap.appendChild(option);

            EL.qOptions.appendChild(optionWrap);
        });
    }

    makeAnswer(el) {
        let id = el.dataset.id,
            question = Data.questions[this.activeIndex];

        EL.qCardHolder.textContent = question.holder;

        EL.qUserAnswer.textContent = question.options[id].text;
        if (question.options[id].isCorrect) {
            this.correctAnswers++;
            EL.qUserAnswer.classList.add(CSS.main + '-question__user-answer--correct');
            EL.qAnswer.textContent = question.correct;
        } else {
            EL.qUserAnswer.classList.remove(CSS.main + '-question__user-answer--correct');
            EL.qAnswer.textContent = question.incorrect;
        }
        EL.question.classList.add(CSS.main + '-question--answer');
        EL.question.removeChild(EL.qOptions);
        EL.question.appendChild(EL.qUserAnswer);
        EL.question.appendChild(EL.qAnswer);

        if (this.activeIndex < Data.questions.length - 1) {
            EL.question.appendChild(EL.qNextBtn);
        } else {
            EL.question.appendChild(EL.qResultBtn);
        }

    }

    start() {
        EL.wrapper.classList.add(CSS.main + '-wrapper--answer');

        removeChildren(this.container);
        this.createQuestion();
        this.createResult();

        this.container.appendChild(EL.question);

        this.setInitialParams();
        this.makeNextQuestion();
    }

    continue() {
        this.activeIndex++;

        EL.question.classList.remove(CSS.main + '-question--answer');
        EL.question.removeChild(EL.qUserAnswer);
        EL.question.removeChild(EL.qAnswer);
        EL.question.removeChild(EL.qNextBtn);
        EL.question.appendChild(EL.qOptions);
        this.makeNextQuestion();
    }

    showResult() {
        EL.wrapper.classList.remove(CSS.main + '-wrapper--answer');
        removeChildren(this.container);
        this.container.appendChild(EL.result);

        EL.rText.innerHTML = 'Вы угадали<br>' + this.correctAnswers + '/' + Data.questions.length + ' личностей';
        EL.rImg.src = 'images/result/jobs/' + (this.correctAnswers || 1) + '.jpg';
        EL.rImg.srcset = 'images/result/jobs/' + (this.correctAnswers || 1) + '@2x.jpg 2x';

        removeChildren(EL.rShare);
        Share.make(EL.rShare, {
            title: 'Я угадал<br>' + this.correctAnswers + '/' + Data.questions.length + ' личностей',
            twitter: 'Я угадал<br>' + this.correctAnswers + '/' + Data.questions.length + ' личностей'
        });
    }

    restart() {
        removeChildren(this.container);
        this.container.appendChild(EL.question);
        EL.question.classList.remove(CSS.main + '-question--answer');
        EL.question.removeChild(EL.qUserAnswer);
        EL.question.removeChild(EL.qAnswer);
        EL.question.removeChild(EL.qResultBtn);
        EL.question.appendChild(EL.qOptions);

        this.setInitialParams();
        this.makeNextQuestion();
    }

    setInitialParams() {
        this.activeIndex = 0;
        this.correctAnswers = 0;
    }

    init() {
        removeChildren(this.container);
        this.createEnter();

        EL.wrapper = document.getElementById('raiff-wrapper');
        /** Демонстрация */
        // this.container.classList.add(CSS.main);
        // this.container.textContent = Data.title;
        // this.container.innerHTML += Svg.demo;
        // this.container.appendChild(this.demoButton());
        // this.container.appendChild(this.demoInput());

        // Share.make(this.container, this.params.share);
    }
}

export default Special;