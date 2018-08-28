var Raiff =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPageView = exports.sendEvent = undefined;

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    var value = _config2.default.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action;

    if (false) {}

    if (window.dataLayer !== undefined && _config2.default.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: value
        });
    }
};

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (false) {}

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(19),
    utils   = __webpack_require__(2),
    svg     = __webpack_require__(20);

var services = {
    odnoklassniki: __webpack_require__(21),
    vkontakte:     __webpack_require__(22),
    facebook:      __webpack_require__(23),
    twitter:       __webpack_require__(24),
    gplus:         __webpack_require__(25),
    pocket:        __webpack_require__(26),
    telegram:      __webpack_require__(27),
    whatsapp:      __webpack_require__(28),
    viber:         __webpack_require__(29),
    email:         __webpack_require__(30),
    more:          __webpack_require__(31)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Raiff', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
  analyticsCategory: 'Raiff Cards',
  sendPageView: false, // отключаем, если спецпроект не на отдельной странице
  listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if (classNames) {
        if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
            classNames.forEach(function (cname) {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

    var newObj = {},
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];
        newObj[name] = el;
    });

    Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
var isElementInDom = exports.isElementInDom = function isElementInDom(el) {
    return el.parentNode;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _special = __webpack_require__(9);

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Special = _special2.default; // Тут используется CommonJS модуль, чтобы можно было использовать название класса как глобальную переменную
/**
 * Entry point
 */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _data = __webpack_require__(13);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(14);

var _svg2 = _interopRequireDefault(_svg);

var _share = __webpack_require__(15);

var Share = _interopRequireWildcard(_share);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

var _dom = __webpack_require__(7);

var _array = __webpack_require__(34);

var _loadImage = __webpack_require__(35);

var _loadImage2 = _interopRequireDefault(_loadImage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSS = {
    main: 'Raiff'
};

var EL = {};
var IMAGES = {};

function pluralize(number, words) {
    if (number % 10 == 1 && number % 100 != 11) {
        return words[0];
    } else if ([2, 3, 4].indexOf(number % 10) > -1 && [12, 13, 14].indexOf(number % 100) < 0) {
        return words[1];
    } else {
        return words[2];
    }
}

var Special = function (_BaseSpecial) {
    _inherits(Special, _BaseSpecial);

    function Special() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Special);

        var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this));

        Object.assign(_this.params, params);
        _this.saveParams();

        if (_data2.default && params.data) {
            Object.assign(_data2.default, params.data);
        }

        if (_this.params.css) {
            _this.loadStyles(_this.params.css).then(function () {
                return _this.init();
            });
        } else {
            _this.init();
        }
        return _this;
    }

    _createClass(Special, [{
        key: 'createEnter',
        value: function createEnter() {
            EL.enter = (0, _dom.makeElement)('div', CSS.main + '-enter');
            EL.eLogo = (0, _dom.makeElement)('a', CSS.main + '-enter__logo', {
                href: _data2.default.link,
                target: '_blank',
                innerHTML: _svg2.default.logo
            });
            EL.eImg = (0, _dom.makeElement)('img', CSS.main + '-enter__img', {
                src: this.params.path + 'images/enter.jpg',
                srcset: this.params.path + 'images/enter@2x.jpg 2x'
            });
            this.params.articleLink = this.params.articleLink || '#';
            EL.eTitle = (0, _dom.makeElement)('div', CSS.main + '-enter__title', {
                innerHTML: '<a href="' + this.params.articleLink + '">' + _data2.default.title + '</a>'
            });
            EL.eDesc = (0, _dom.makeElement)('div', CSS.main + '-enter__desc', {
                innerHTML: _data2.default.description
            });
            EL.eStartBtn = (0, _dom.makeElement)('button', [CSS.main + '-enter__start-btn', CSS.main + '-btn'], {
                textContent: 'Начать',
                data: {
                    click: 'start'
                }
            });

            EL.enter.appendChild(EL.eLogo);
            EL.enter.appendChild(EL.eTitle);
            EL.enter.appendChild(EL.eDesc);
            EL.enter.appendChild(EL.eImg);
            EL.enter.appendChild(EL.eStartBtn);

            this.container.appendChild(EL.enter);
        }
    }, {
        key: 'createQuestion',
        value: function createQuestion() {
            EL.question = (0, _dom.makeElement)('div', CSS.main + '-question');

            EL.qPages = (0, _dom.makeElement)('div', CSS.main + '-question__pages');

            EL.qCard = (0, _dom.makeElement)('div', [CSS.main + '-question__card', CSS.main + '-card']);
            EL.qCardImg = (0, _dom.makeElement)('img', CSS.main + '-card__img');
            EL.qCardLoupe = (0, _dom.makeElement)('img', CSS.main + '-card__loupe', {
                src: this.params.path + 'images/cards/loupe.png',
                srcset: this.params.path + 'images/cards/loupe@2x.png',
                style: 'display: none;'
            });
            EL.qCardLogo = (0, _dom.makeElement)('a', CSS.main + '-card__logo', {
                href: _data2.default.link,
                target: '_blank',
                innerHTML: _svg2.default.logoEn
            });
            EL.qCardHolder = (0, _dom.makeElement)('div', CSS.main + '-card__holder');

            EL.qOptions = (0, _dom.makeElement)('div', CSS.main + '-question__options');

            EL.qUserAnswer = (0, _dom.makeElement)('div', CSS.main + '-question__user-answer');
            EL.qAnswer = (0, _dom.makeElement)('div', CSS.main + '-question__answer');
            EL.qNextBtn = (0, _dom.makeElement)('div', CSS.main + '-question__next-btn', {
                innerHTML: '<span>Продолжить</span>' + _svg2.default.arrow,
                data: {
                    click: 'continue'
                }
            });
            EL.qResultBtn = (0, _dom.makeElement)('div', CSS.main + '-question__next-btn', {
                innerHTML: '<span>Результат</span>' + _svg2.default.arrow,
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
    }, {
        key: 'createResult',
        value: function createResult() {
            EL.result = (0, _dom.makeElement)('div', CSS.main + '-result');
            EL.rHead = (0, _dom.makeElement)('div', CSS.main + '-result__head');
            EL.rBottom = (0, _dom.makeElement)('div', CSS.main + '-result__bottom');

            EL.rImg = (0, _dom.makeElement)('img', CSS.main + '-result__img');
            EL.rText = (0, _dom.makeElement)('div', CSS.main + '-result__text');
            EL.rShare = (0, _dom.makeElement)('div', CSS.main + '-result__share');
            EL.rRestartBtn = (0, _dom.makeElement)('div', CSS.main + '-result__restart-btn', {
                innerHTML: '<span>Пройти еще раз</span>' + _svg2.default.refresh,
                data: {
                    click: 'restart'
                }
            });

            EL.rCard = (0, _dom.makeElement)('div', [CSS.main + '-result__card', CSS.main + '-card']);
            EL.rCardImg = (0, _dom.makeElement)('img', CSS.main + '-card__img', {
                src: this.params.path + 'images/result/card.jpg',
                srcset: this.params.path + 'images/result/card@2x.jpg 2x'
            });
            EL.rCardLogo = (0, _dom.makeElement)('a', CSS.main + '-card__logo', {
                href: _data2.default.link,
                target: '_blank',
                innerHTML: _svg2.default.logoEn
            });
            EL.rTitle = (0, _dom.makeElement)('div', CSS.main + '-result__title', {
                textContent: 'Создайте уникальный дизайн карты'
            });
            EL.rLink = (0, _dom.makeElement)('a', CSS.main + '-result__try-btn', {
                href: _data2.default.tryLink,
                target: '_blank',
                innerHTML: '<button class="' + CSS.main + '-btn' + '">Попробовать</button>'
            });
            EL.rNote = (0, _dom.makeElement)('div', CSS.main + '-result__note', {
                textContent: 'Правила международных платежных систем запрещают использовать в дизайне надписи, цифры и изображения денежных купюр.'
            });

            EL.rLicense = (0, _dom.makeElement)('div', CSS.main + '-result__license', {
                textContent: 'АО «Райффайзенбанк», Генеральная лицензия Банка России № 3292, от 17.02.2015'
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
            EL.rBottom.appendChild(EL.rLicense);

            EL.result.appendChild(EL.rHead);
            EL.result.appendChild(EL.rBottom);
        }
    }, {
        key: 'storeImages',
        value: function storeImages(data) {
            var _this2 = this;

            data.forEach(function (item, i) {
                var img = document.createElement('img');
                img.src = _this2.params.path + item.img;
                img.srcset = _this2.params.path + item.img2x + ' 2x';

                IMAGES[i] = { 'img': img };

                if (item.isReplaceCard) {
                    var imgR = document.createElement('img');
                    imgR.src = _this2.params.path + item.imgR;
                    imgR.srcset = _this2.params.path + item.imgR2x + ' 2x';

                    IMAGES[i]['imgR'] = imgR;
                }
            });
        }
    }, {
        key: 'makeNextQuestion',
        value: function makeNextQuestion() {
            var question = _data2.default.questions[this.activeIndex];

            EL.qPages.innerHTML = this.activeIndex + 1 + '<span>/</span>' + _data2.default.questions.length;
            EL.question.appendChild(EL.qPages);

            question.isHiddenLogo ? EL.qCardLogo.style.display = 'none' : EL.qCardLogo.style.display = 'block';
            question.isLoupe ? EL.qCardLoupe.style.display = 'block' : EL.qCardLoupe.style.display = 'none';

            EL.qCardImg.src = this.params.path + question.img;
            EL.qCardImg.srcset = this.params.path + question.img2x + ' 2x';
            EL.qCardHolder.textContent = '';

            question.isDark ? EL.qCard.classList.add('is-dark') : EL.qCard.classList.remove('is-dark');
            question.isDarkLogo ? EL.qCard.classList.add('is-dark-logo') : EL.qCard.classList.remove('is-dark-logo');
            this.makeOptions(question.options);

            EL.qCard.style.opacity = 0;
            EL.qCard.style.transition = 'opacity 0s';
            (0, _loadImage2.default)(EL.qCardImg, function () {
                EL.qCard.style.opacity = 1;
                EL.qCard.style.transition = 'opacity .4s';
            });
        }
    }, {
        key: 'makeOptions',
        value: function makeOptions(options) {
            (0, _dom.removeChildren)(EL.qOptions);

            options = options.map(function (item, i) {
                item.id = i;return item;
            });
            (0, _array.shuffle)(options);
            options.forEach(function (item) {
                var optionWrap = (0, _dom.makeElement)('div', CSS.main + '-question__options-item');
                var option = (0, _dom.makeElement)('button', CSS.main + '-question__option', {
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
    }, {
        key: 'makeAnswer',
        value: function makeAnswer(el) {
            var id = el.dataset.id,
                question = _data2.default.questions[this.activeIndex];

            EL.question.removeChild(EL.qPages);

            if (question.isReplaceCard) {
                EL.qCardImg.src = this.params.path + question.imgR;
                EL.qCardImg.srcset = this.params.path + question.imgR2x + ' 2x';
            }

            EL.qCardHolder.textContent = question.holder;

            EL.qUserAnswer.textContent = question.options[id].text;
            if (question.options[id].isCorrect) {
                this.correctAnswers++;
                EL.qUserAnswer.classList.add(CSS.main + '-question__user-answer--correct');
                EL.qAnswer.innerHTML = question.correct;
            } else {
                EL.qUserAnswer.classList.remove(CSS.main + '-question__user-answer--correct');
                EL.qAnswer.innerHTML = question.incorrect;
            }
            EL.question.classList.add(CSS.main + '-question--answer');
            EL.question.removeChild(EL.qOptions);
            EL.question.appendChild(EL.qUserAnswer);
            EL.question.appendChild(EL.qAnswer);

            if (this.activeIndex < _data2.default.questions.length - 1) {
                EL.question.appendChild(EL.qNextBtn);
            } else {
                EL.question.appendChild(EL.qResultBtn);
            }
        }
    }, {
        key: 'start',
        value: function start() {
            if (!this.params.isFeed) {
                document.body.classList.add(CSS.main + '-body--testing');
            }

            (0, _dom.removeChildren)(this.container);
            this.createQuestion();
            this.createResult();

            this.container.appendChild(EL.question);

            this.setInitialParams();
            this.makeNextQuestion();

            Analytics.sendEvent('Start');
        }
    }, {
        key: 'continue',
        value: function _continue() {
            this.activeIndex++;

            EL.question.classList.remove(CSS.main + '-question--answer');
            EL.question.removeChild(EL.qUserAnswer);
            EL.question.removeChild(EL.qAnswer);
            EL.question.removeChild(EL.qNextBtn);
            EL.question.appendChild(EL.qOptions);
            this.makeNextQuestion();

            Analytics.sendEvent('Question — ' + (this.activeIndex + 1), 'Hit');
        }
    }, {
        key: 'showResult',
        value: function showResult() {
            if (!this.params.isFeed) {
                document.body.classList.remove(CSS.main + '-body--testing');
            }

            (0, _dom.removeChildren)(this.container);
            this.container.appendChild(EL.result);

            var word = pluralize(this.correctAnswers, ['личность', 'личности', 'личностей']);
            EL.rText.innerHTML = 'Я расшифровал<br>' + this.correctAnswers + ' ' + word + ' из ' + _data2.default.questions.length;
            EL.rImg.src = this.params.path + 'images/result/jobs/' + (this.correctAnswers || 1) + '.jpg';
            EL.rImg.srcset = this.params.path + 'images/result/jobs/' + (this.correctAnswers || 1) + '@2x.jpg 2x';

            (0, _dom.removeChildren)(EL.rShare);
            Share.make(EL.rShare, {
                url: this.params.share.url + this.correctAnswers,
                title: this.params.share.title,
                twitter: this.params.share.twitter
            });

            Analytics.sendEvent('Result — ' + this.correctAnswers, 'Hit');
        }
    }, {
        key: 'restart',
        value: function restart() {
            if (!this.params.isFeed) {
                document.body.classList.add(CSS.main + '-body--testing');
            }

            (0, _dom.removeChildren)(this.container);
            this.container.appendChild(EL.question);
            EL.question.classList.remove(CSS.main + '-question--answer');
            EL.question.removeChild(EL.qUserAnswer);
            EL.question.removeChild(EL.qAnswer);
            EL.question.removeChild(EL.qResultBtn);
            EL.question.appendChild(EL.qOptions);

            this.setInitialParams();
            this.makeNextQuestion();

            Analytics.sendEvent('Restart');
        }
    }, {
        key: 'setInitialParams',
        value: function setInitialParams() {
            this.activeIndex = 0;
            this.correctAnswers = 0;
        }
    }, {
        key: 'init',
        value: function init() {
            if (!this.params.isFeed) {
                document.body.classList.add(CSS.main + '-body');
                this.container.classList.add('is-single');
            }

            this.params.path = this.params.path || '';
            (0, _dom.removeChildren)(this.container);
            this.createEnter();
            this.storeImages(_data2.default.questions);
        }
    }]);

    return Special;
}(_base2.default);

exports.default = Special;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base special constructor with common methods
 */
var BaseSpecial = function () {
    function BaseSpecial() {
        _classCallCheck(this, BaseSpecial);

        this.keyCodes = {
            enter: 13
        };
        this.params = {
            container: document.body
        };

        if (_config2.default.sendPageView) {
            Analytics.sendPageView();
        }
    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


    _createClass(BaseSpecial, [{
        key: 'saveParams',
        value: function saveParams() {
            Object.assign(this.params, _config2.default);
            this.container = this.params.container;

            this.addEventListeners();
        }

        /**
         * Load css file
         * @param {String} path
         */

    }, {
        key: 'loadStyles',
        value: function loadStyles(path) {
            return new Promise(function (resolve, reject) {
                var link = document.createElement('link');

                link.rel = 'stylesheet';
                link.href = path;

                link.onload = function () {
                    return resolve();
                };
                link.onerror = function () {
                    return reject();
                };

                document.body.appendChild(link);
            });
        }

        /**
         * Add event listeners to document
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            this.params.listenedEvents.forEach(function (eventName) {
                _this.container.addEventListener(eventName, function (event) {
                    return _this.defaultEventHandler(event, eventName);
                });
            });
        }

        /**
         * Default events handler
         * @param {Object} event
         * @param {String} eventName
         */

    }, {
        key: 'defaultEventHandler',
        value: function defaultEventHandler(event, eventName) {
            var target = event.target;
            var action = void 0;

            while (target.parentNode && target !== event.currentTarget) {
                action = target.dataset[eventName];

                /** Send all links clicks to analytics */
                if (eventName === 'click' && target.tagName.toLowerCase() === 'a') {
                    Analytics.sendEvent(target.href);
                }

                if (action) break;
                target = target.parentNode;
            }

            action = target.dataset[eventName];

            if (action && this[action]) {
                this[action](event.target, event);
            }
        }
    }]);

    return BaseSpecial;
}();

exports.default = BaseSpecial;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    logo: '<svg width="176" height="40"><path d="M74.847 39.936c.17-.808.34-1.616.51-2.402.617-2.976 1.212-5.93 1.807-8.907.32-1.53.638-3.06.936-4.613.042-.17.085-.234.276-.234h3.847c.17 0 .234 0 .192.213-.362 1.764-.723 3.55-1.084 5.314-.043.192-.064.298.212.298 1.573-.021 3.125-.021 4.698 0 .17 0 .255-.042.276-.213.362-1.806.723-3.592 1.085-5.378.02-.148.085-.212.255-.212h3.869c.19 0 .233.064.19.234l-2.423 11.861c-.276 1.36-.552 2.7-.829 4.06H84.37c0-.085.022-.148.022-.234.404-1.998.807-4.017 1.211-6.015.022-.15.064-.213-.148-.213h-4.826c-.149 0-.191.043-.234.191-.17.85-.34 1.68-.51 2.509-.255 1.254-.489 2.487-.744 3.741h-4.294zM92.342 1.312c0 .064-.021.127-.021.191v4.315c0 .192.043.234.234.234.935 0 1.828.191 2.678.574 1.36.638 2.232 1.7 2.594 3.146a7.52 7.52 0 0 1 0 3.763c-.49 1.87-1.743 2.997-3.593 3.486a6.53 6.53 0 0 1-1.68.234c-.17 0-.233.042-.233.234v4.102c0 .213-.064.277-.276.255-1.063-.02-2.105 0-3.168 0-.191 0-.233-.042-.233-.233 0-1.36 0-2.721.02-4.082 0-.234-.063-.276-.276-.276-1.041-.021-2.062-.234-2.976-.765-1.296-.723-2.04-1.85-2.317-3.274-.255-1.254-.234-2.53.15-3.741.573-1.743 1.827-2.764 3.57-3.21a7.052 7.052 0 0 1 1.637-.213c.192 0 .213-.064.213-.234V1.312h3.677zm-.255 10.416v2.806c0 .191.064.234.234.212.808-.085 1.446-.489 1.807-1.211.595-1.148.595-2.317.064-3.486-.362-.766-.978-1.212-1.85-1.318-.212-.022-.255.042-.255.233v2.764zm-3.21.021V8.943c0-.17-.042-.234-.233-.212-.83.106-1.467.51-1.829 1.254-.552 1.126-.552 2.296-.042 3.443.34.766.978 1.212 1.807 1.318.191.022.276-.02.276-.233.021-.936.021-1.85.021-2.764zM108.668 1.312v4.506c0 .192.063.234.255.234.892 0 1.764.17 2.572.532 1.445.637 2.338 1.743 2.72 3.252a7.425 7.425 0 0 1 0 3.614c-.51 2.02-1.849 3.167-3.826 3.635-.489.106-.977.17-1.488.17-.19 0-.212.064-.212.234v4.102c0 .192-.043.255-.255.255-1.063-.02-2.105 0-3.168 0-.19 0-.233-.042-.233-.233v-4.06c0-.213-.043-.298-.277-.298-1.02-.021-1.998-.234-2.89-.702-1.17-.616-1.935-1.594-2.297-2.848-.382-1.297-.382-2.615-.042-3.933.489-1.892 1.764-2.997 3.614-3.486a5.553 5.553 0 0 1 1.658-.213c.191 0 .234-.042.234-.233V1.588c0-.085-.022-.17.02-.255 1.191-.021 2.403-.021 3.615-.021zm-3.423 10.416V8.922c0-.191-.064-.234-.234-.213a2.359 2.359 0 0 0-1.594.872c-.872 1.105-.872 3.188.021 4.294.404.51.936.786 1.595.85.17.021.212-.021.212-.212v-2.785zm3.21.021c0 .914.021 1.828 0 2.721 0 .255.085.298.298.255.892-.127 1.488-.638 1.849-1.424.361-.83.404-1.7.191-2.572-.276-1.17-1.063-1.913-2.125-2.02-.192-.02-.234.022-.234.213.021.956.021 1.892.021 2.827zM43.408 39.936c.234-1.211.489-2.423.722-3.635.66-3.23 1.318-6.44 1.977-9.672.17-.871.362-1.743.532-2.614.042-.192.106-.213.276-.213h10.841c.192 0 .255.021.213.255-.255 1.148-.468 2.275-.701 3.423-.043.17-.107.233-.277.233h-6.483c-.234 0-.34.043-.383.32-.106.637-.255 1.275-.383 1.891-.042.17 0 .213.17.213 1 0 1.999-.022 3.019.021.872.021 1.743.17 2.508.638.957.574 1.446 1.466 1.573 2.55.362 3.21-1.721 5.953-4.91 6.505-.276.043-.574.043-.83.15-2.614-.065-5.228-.065-7.864-.065zm6.908-6.61h-1.084c-.127 0-.191.042-.212.17-.192 1.02-.404 2.019-.617 3.04-.021.148 0 .17.128.17.744 0 1.488.02 2.232-.043 1.254-.085 1.998-.914 1.934-2.147-.021-.574-.361-.978-.914-1.106-.489-.127-1.02-.085-1.467-.085zM0 1.524h37.137c.34 0 .34 0 .34.34v36.882c0 .255-.064.319-.32.319-11.01-.022-22.022-.022-33.033-.022-1.382 0-2.764-.02-4.124-.02V1.523zm36.371 18.792c.022 0 .022 0 0 0 .022-2.466.022-4.953.022-7.42v-9.99c0-.255-.064-.298-.32-.298-11.585 0-23.191 0-34.798-.021-.233 0-.297.064-.297.319 0 11.606.021 23.213 0 34.82 0 .233.064.297.297.297 8.63 0 17.261 0 25.892.021h8.907c.255 0 .319-.042.319-.319-.022-5.824-.022-11.606-.022-17.41zM91.98 39.936c.064-.574.213-1.148.32-1.722.595-2.976 1.211-5.93 1.806-8.907.362-1.764.723-3.528 1.084-5.314.043-.17.107-.213.277-.213h3.805c.212 0 .276.043.212.277-.446 2.126-.871 4.23-1.296 6.356v.085c.276-.319.552-.617.807-.914 1.659-1.87 3.317-3.763 4.975-5.633.085-.107.17-.17.318-.17h4.74c.022 0 .043 0 .107.02-.319.34-.616.66-.914.979-2.126 2.274-4.251 4.527-6.377 6.802-.106.127-.106.191-.021.319 1.381 2.636 2.763 5.293 4.145 7.929.021.021.021.064.042.085h-5.208c0-.043 0-.064-.021-.106-1.02-2.233-2.062-4.443-3.082-6.675-.022-.043-.022-.085-.085-.064-.17.808-.34 1.615-.51 2.445-.298 1.466-.596 2.912-.893 4.379-1.36.042-2.806.042-4.23.042zM57.033 39.936c-.085-.085.022-.127.043-.191 1.616-2.997 3.252-5.995 4.868-8.992 1.212-2.253 2.445-4.507 3.656-6.76.085-.149.17-.213.34-.213h4.74c.17 0 .256.022.298.234.234 1.913.51 3.827.766 5.74l.637 4.74c.213 1.573.425 3.168.638 4.74.021.234.064.468.106.702h-4.549c-.085-.85-.17-1.7-.234-2.53-.02-.19-.085-.255-.276-.255h-4.72c-.19 0-.275.064-.34.213-.446.85-.892 1.7-1.36 2.572h-4.613zm10.502-12.265c-.362.744-.702 1.445-1.042 2.125-.574 1.19-1.148 2.36-1.722 3.55-.021.064-.234.234.064.234h3.167c.107 0 .15-.021.128-.149-.021-.085 0-.148-.021-.233-.192-1.807-.383-3.635-.574-5.527zM50.975 1.312c.34.085.702.127 1.02.233 1.956.574 3.019 1.935 3.402 3.87.318 1.594.063 3.103-.85 4.463-.787 1.17-1.935 1.765-3.317 1.956-.956.127-1.892.064-2.848.064-.192 0-.234.063-.234.234v4.719c0 .212-.064.255-.255.255-1.19-.022-2.381 0-3.572 0-.19 0-.255-.043-.255-.255V1.29c2.317.02 4.613.02 6.91.02zM48.17 6.583V8.22c0 .149.021.213.191.213.298-.022.617 0 .914 0 .383 0 .766-.043 1.127-.192.66-.276 1-.977.914-1.849-.085-.893-.489-1.34-1.36-1.53-.553-.107-1.127-.043-1.68-.043-.148 0-.106.106-.106.191v1.573zM175.65 17.127c-1.063 0-2.104-.021-3.167-.021-.49 0-.49 0-.49-.49v-3.613c0-.191-.042-.255-.254-.255-.957.021-1.913 0-2.849 0-.19 0-.233.042-.233.234v3.869c0 .212-.064.276-.277.276-1.063-.021-2.104 0-3.167 0-.17 0-.234-.043-.234-.213V6.434c0-.17.064-.212.213-.212h3.188c.192 0 .255.042.255.255-.021 1.105 0 2.232 0 3.337 0 .213.064.255.255.255h2.849c.17 0 .234-.042.234-.233V6.498c0-.191.042-.276.255-.276 1.126.021 2.253 0 3.401 0 .021 3.635.021 7.27.021 10.905zM136.877 1.312c.17.17.403.212.616.297l1.403.574c.191.064.234.128.128.32-.426.87-1.042 1.53-1.935 1.891-1.424.595-2.848.574-4.273-.064-.85-.382-1.445-1.02-1.828-1.87-.064-.15-.064-.213.107-.277a45.693 45.693 0 0 0 1.806-.722c.085-.043.213-.043.277-.15h.106c.085.298.191.596.425.83.468.489 1.34.659 2.062.382.553-.212.872-.616.935-1.211h.17zM77.908 1.312c.595.297 1.233.51 1.85.765.488.213.51.213.233.68-.616 1.084-1.551 1.7-2.763 1.935-1.318.255-2.593.127-3.741-.596-.638-.403-1.085-.956-1.403-1.636-.085-.17-.022-.213.106-.255.638-.256 1.254-.51 1.892-.766.064-.02.17-.02.212-.127h.107c.148.595.467 1.063 1.105 1.254.319.106.638.085.957.064.722-.064 1.318-.66 1.36-1.318h.085zM123.611 7.433c0-.318.022-.637 0-.956-.02-.213.064-.255.277-.255.978.021 1.955.021 2.933 0 .234 0 .32.042.32.297v9.928c0 .17-.022.318 0 .489.02.19-.065.212-.213.212h-3.061c-.17 0-.234-.042-.234-.212.02-.32 0-.638 0-1.02-.15.17-.255.276-.362.403-1.509 1.658-4.251 1.637-5.867.064-.893-.85-1.381-1.935-1.594-3.125-.298-1.594-.17-3.189.489-4.677.616-1.381 1.594-2.36 3.146-2.636 1.637-.297 3.061.107 4.081 1.488.022.022.022.064.043.086-.021-.064 0-.086.042-.086zm.128 4.443c.042-.404 0-.807-.128-1.211-.255-.914-.977-1.552-1.849-1.616-.957-.064-1.7.361-2.083 1.276-.383.935-.362 1.87.085 2.784.361.723.956 1.106 1.785 1.127.808.021 1.425-.34 1.829-1.042.233-.382.34-.829.361-1.318zM64.686 7.519V6.413c0-.148.021-.212.191-.212h3.104c.149 0 .212.042.212.191v10.501c0 .149-.042.213-.19.213h-3.104c-.17 0-.213-.043-.192-.213.021-.34 0-.659 0-.999-.042-.021-.064 0-.085.021-1.573 2.147-5.038 2.105-6.717-.276a6.125 6.125 0 0 1-1.063-2.806c-.191-1.488-.085-2.976.553-4.358.637-1.424 1.658-2.402 3.252-2.657 1.233-.191 2.38-.042 3.337.83.213.276.447.53.702.87zm-4.188 4.209c0 .297.043.68.17 1.041.298.914.936 1.425 1.85 1.488a1.964 1.964 0 0 0 1.977-1.169c.446-.978.446-1.977-.043-2.933-.361-.723-.999-1.084-1.828-1.084-.808 0-1.403.36-1.807 1.062-.234.468-.319.978-.319 1.595zM133.05 11.962c.064-.107.127-.192.191-.298 1.084-1.743 2.19-3.507 3.274-5.25.106-.15.212-.213.382-.213h3.04c.17 0 .234.042.234.234v10.458c0 .17-.043.234-.234.234h-3.21c-.191 0-.234-.064-.234-.255v-5.378-.276c-.106.063-.127.148-.17.212-1.105 1.828-2.19 3.657-3.294 5.485-.086.148-.192.212-.362.212h-3.06c-.171 0-.256-.021-.256-.234V6.435c0-.192.064-.234.234-.213h3.188c.213 0 .234.064.234.255v5.485c0-.022.022 0 .043 0zM74.103 11.94c.085-.042.106-.127.149-.19 1.105-1.787 2.232-3.55 3.316-5.336.085-.15.191-.213.361-.213h3.04c.17 0 .255.021.255.234v10.458c0 .17-.042.234-.212.234h-3.21c-.191 0-.234-.042-.234-.234v-5.399-.319c-.446.744-.872 1.446-1.275 2.126l-2.169 3.635c-.085.149-.17.212-.361.212H70.68c-.17 0-.234-.042-.234-.233V6.456c0-.17.042-.234.212-.234h3.189c.191 0 .234.043.234.234v5.25c0 .064-.021.15.021.234zM159.41 12.536h-3.593c-.17 0-.234.042-.213.233.064.914.34 1.722 1.212 2.147.701.362 1.424.298 2.104-.063.362-.192.595-.51.702-.893.042-.107.063-.17.191-.17h3.189c.17 0 .148.063.106.191-.702 2.02-2.126 3.189-4.23 3.486-.978.128-1.956.107-2.913-.17-1.806-.531-2.976-1.722-3.507-3.529-.425-1.466-.425-2.954.085-4.421.723-2.083 2.21-3.21 4.379-3.486 1.042-.128 2.062-.043 3.04.34 1.552.616 2.423 1.828 2.912 3.358.276.893.383 1.807.383 2.743 0 .191-.064.234-.255.234h-3.593zm-1.701-2.147h1.573c.51 0 .51 0 .403-.51-.297-1.234-1.275-1.893-2.402-1.637-.85.19-1.551 1.084-1.573 1.998 0 .149.064.149.17.149h1.829zM148.908 11.451c.659.192 1.19.49 1.573 1.042.914 1.297.552 3.146-.808 4.124-.765.553-1.658.786-2.572.85a8.904 8.904 0 0 1-5.25-1.169c-.15-.085-.192-.128-.128-.319.276-.723.531-1.445.786-2.168.064-.213.149-.191.298-.085.68.425 1.382.765 2.19.871.467.064.935.085 1.402-.02a1.12 1.12 0 0 0 .66-.426c.36-.51.148-1.17-.447-1.36a2.777 2.777 0 0 0-.83-.107h-1.445c-.148 0-.191-.042-.191-.191v-1.998c0-.17.043-.213.213-.213.637 0 1.275 0 1.913-.021.616-.021.956-.425.893-1-.043-.403-.277-.637-.638-.743-.574-.192-1.148-.128-1.743 0a5.86 5.86 0 0 0-1.637.701c-.128.085-.17.085-.234-.063-.276-.702-.553-1.425-.85-2.126-.043-.128-.043-.192.085-.234 1.977-.935 4.017-1.34 6.143-.68 1.042.319 1.807.978 2.02 2.104.234 1.254-.213 2.572-1.36 3.168 0 .02-.022.042-.043.063z" fill="#1B1A1A"/><path d="M36.371 20.316v17.388c0 .277-.085.32-.319.32h-8.906c-8.63 0-17.261-.022-25.892-.022-.234 0-.297-.064-.297-.298V2.884c.02-.233.085-.297.318-.297h34.82c.234 0 .319.064.319.298v9.99c-.021 2.488-.021 4.975-.043 7.44.022 0 .022 0 0 0zm-.978-6.973c-.02-.51-.042-.935-.127-1.36-.383-2.19-1.34-4.082-2.976-5.612-2.21-2.062-4.91-1.7-6.696 0-1.765 1.7-3.465 3.465-5.208 5.187-.106.106-.128.17 0 .276.361.34.701.702 1.063 1.063.106.106.106.149 0 .255l-.702.702c-.659.637-1.297 1.296-1.956 1.934-.085.085-.148.128-.255.021-.892-.893-1.785-1.764-2.678-2.657-.106-.106-.085-.149 0-.234.34-.34.68-.701 1.042-1.02.17-.149.127-.234 0-.383l-2.232-2.232c-1.02-1.02-1.999-2.062-3.062-3.04-1.105-1.02-2.444-1.466-3.953-1.211-.978.149-1.829.637-2.551 1.296-1.85 1.701-2.806 3.848-3.04 6.314-.021.212-.064.425-.021.553.404-.362.829-.744 1.233-1.148.148-.15.233-.15.382 0 1.7 1.722 3.423 3.422 5.123 5.123.17.17.255.149.404 0 .383-.404.765-.787 1.17-1.17.127-.106.17-.233.17-.403v-3.083c0-.085-.043-.17.042-.233.446.467.893.914 1.36 1.36a.466.466 0 0 1 .15.361v3.954c0 .15.042.277.148.383.616.616 1.233 1.233 1.87 1.85.15.148.17.212 0 .36-.68.66-1.339 1.319-2.019 1.999L3.252 31.37c-.148.148-.127.212 0 .361 1.36 1.36 2.721 2.7 4.082 4.081.149.15.234.128.361 0 .872-.871 1.743-1.721 2.594-2.593 2.742-2.785 5.484-5.506 8.205-8.248.127-.127.191-.149.34 0l3.316 3.316 7.589 7.59c.149.148.213.17.383 0 1.339-1.361 2.7-2.7 4.039-4.04.17-.17.17-.255 0-.425-3.635-3.635-7.27-7.27-10.905-10.884-.15-.148-.15-.212 0-.361.616-.595 1.211-1.19 1.806-1.786a.625.625 0 0 0 .192-.467v-3.912c0-.148.042-.255.149-.361.318-.298.616-.616.914-.914l.489-.489v3.401c0 .149.042.255.148.362.425.403.83.807 1.233 1.211.128.15.213.128.34-.021l4.146-4.145c.36-.362.722-.702 1.062-1.063.085-.085.15-.106.256 0 .148.17.318.319.467.468.298.297.595.574.935.892z" fill="#F3E737"/><path d="M35.393 13.343c-.34-.319-.616-.616-.914-.893-.148-.148-.318-.297-.467-.467-.085-.107-.149-.085-.255 0-.34.361-.702.701-1.063 1.063l-4.145 4.145c-.128.127-.213.149-.34.021-.404-.404-.808-.808-1.233-1.212a.466.466 0 0 1-.15-.361v-3.401l-.488.489-.914.914a.466.466 0 0 0-.149.361v3.912c0 .19-.064.34-.191.467-.617.595-1.212 1.212-1.807 1.786-.149.149-.149.212 0 .361 3.635 3.635 7.27 7.27 10.905 10.884.17.17.17.255 0 .425-1.36 1.34-2.7 2.679-4.04 4.039-.148.149-.233.128-.382 0l-7.589-7.589-3.316-3.316c-.149-.149-.212-.128-.34 0-2.742 2.742-5.484 5.463-8.226 8.205-.872.872-1.744 1.722-2.594 2.594-.127.127-.212.17-.361 0l-4.082-4.082c-.148-.127-.148-.212 0-.361 2.955-2.934 5.889-5.867 8.822-8.822.66-.659 1.34-1.34 2.02-1.998.148-.149.148-.234 0-.361-.638-.617-1.233-1.233-1.871-1.85a.482.482 0 0 1-.149-.382V13.96a.466.466 0 0 0-.149-.362l-1.36-1.36c-.085.085-.043.17-.043.234v3.082c0 .17-.042.276-.17.404-.404.382-.786.765-1.169 1.169-.149.149-.234.191-.404 0-1.7-1.722-3.422-3.422-5.123-5.123-.149-.149-.234-.149-.382 0-.404.404-.83.765-1.233 1.148-.043-.128 0-.361.02-.553.256-2.466 1.191-4.613 3.04-6.313.723-.66 1.574-1.148 2.552-1.297 1.509-.234 2.848.213 3.953 1.212 1.063.978 2.041 2.02 3.062 3.04l2.232 2.232c.148.148.17.212 0 .382-.362.319-.68.68-1.042 1.02-.085.086-.106.15 0 .234.893.893 1.786 1.765 2.678 2.658.107.106.17.085.255-.022.638-.659 1.297-1.296 1.956-1.934l.702-.702c.106-.106.085-.17 0-.255-.362-.34-.702-.722-1.063-1.063-.128-.106-.107-.17 0-.276 1.743-1.722 3.443-3.486 5.208-5.187 1.785-1.722 4.464-2.062 6.696 0 1.637 1.53 2.593 3.401 2.976 5.612.064.468.106.914.127 1.403z" fill="#1B1A1A"/></svg>',
    logoEn: '<svg width="131" height="35" viewBox="0 0 131 35"><path fill="#000000" d="M0 .6h34.4V35H0V.6z"/><path d="M1 1.59h32.41V34H1V1.59z" fill="#fff200"/><path d="M2.71 27.46l4.23 4.31 9.91-10.05L27.09 32l4.29-4.25-10.14-10.16 1.95-1.89v-4l1.22-1v3.1L26 15.08l4.7-4.7 1.51 1.16c.89-3.29-4.27-10.78-8.54-6.63l-5 4.93 1 1.22-2.53 2.47-2.45-2.4L16 10l-5.43-5.3c-4.1-3.38-8.31 1.76-8.46 6.78l1.49-1.24 4.58 4.93 1.64-1.37v-3l1 .77v4l2 2z" fill="#000"/><path d="M88.28 15.54c3.25 0 4.46-1.37 5.16-3.34h-3.29a1.92 1.92 0 0 1-3.56-1h7c0-3.81-2-5.62-5.26-5.62A5 5 0 0 0 83 10.61a5.06 5.06 0 0 0 5.28 4.93zm1.47-6.59h-2.69c.04-1.14 2.53-1.14 2.7 0zM43.19 10.88l3.11 4.39h4.31l-3.84-5.41c4.44-2.16 2.78-8-1.89-8.1h-5.34v13.51h3.65v-4.39zm0-6.16h1.28c1.28.12 1.76 2.65 0 3h-1.28v-3zM63.81 5.88h3.79v9.39h-3.79zM69.61 15.27h3.67v-6.4h3.44v6.4h3.79V8.83h2.36V5.92h-2.46V3.83c-.06-.77 1.74-1.08 2.36-.46V.31c-3.48-1.1-6.3.87-6.28 3.92v1.65h-3.23V3.83c0-.77 1.53-1.08 2.45-.46V.31c-3-.89-6.26.58-6.24 3.9v1.65h-1.16v3h1.31v6.4zM65.72 4.53a2 2 0 1 0-2-2 2 2 0 0 0 2 2zM55.64 15.54a4.68 4.68 0 0 0 2.69-.85v.58h3.61V5.88h-3.6v.52a4.69 4.69 0 0 0-2.69-.87 4.94 4.94 0 0 0-4.83 5 4.92 4.92 0 0 0 4.82 5.01zm.77-7a2.11 2.11 0 0 1 2.18 2 2.17 2.17 0 0 1-4.33 0 2.1 2.1 0 0 1 2.15-2.03zM96.39.51a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM94.5 5.88h3.79v9.39H94.5zM106 9.38c-2.2-.31-2-.75-2-1s1.33-.48 2.74 0l1.12-2.28a10.27 10.27 0 0 0-3.79-.54c-3.46 0-4.66 4.08-2.55 5.39 1.18.89 3.13.52 3 1.58-.12.85-1.78.35-3.5-.5l-1.22 2.45a8.33 8.33 0 0 0 3.75 1.1c5.45.42 5.73-5.68 2.45-6.2z"/><path d="M114.11 5.55a5 5 0 0 0-5.26 5.06 5.06 5.06 0 0 0 5.26 4.93c3.27 0 4.48-1.37 5.18-3.34H116a1.92 1.92 0 0 1-3.56-1h7c-.07-3.85-2.08-5.65-5.33-5.65zm-1.22 3.4c0-1.14 2.53-1.14 2.69 0h-2.69zM124.22 6.59v-.71h-3.4v9.39h3.54V9.53c.1-1.43 2.92-1.68 2.94 0v5.74h3.58V9.38c-.07-3.29-3.53-4.89-6.66-2.79zM57.88 21.09L50.65 35h4.06l1.22-2.45h4.6l.69 2.45H65l-3.28-13.91h-3.84zm-.62 8.5L59 25.92l.81 3.67h-2.55zM49.14 27.37c2.76-2.55 1.35-6.38-1.62-6.42l-5.89.05-2.36 13.94H46c4.5 0 6.37-5.64 3.14-7.57zm-4-3h.62c1.72 0 .89 2-.54 1.89h-.48zm.29 7.3h-1.56l.48-2.3H46c1-.05 1.19 2.33-.57 2.25zM77.22 29.73l-5.37-8.76h-3.88L66.25 35h3.76l.95-8.73 5.37 8.69h4.02l1.68-13.95h-3.76l-1.05 8.72zM92.22 20.95l-4.43 4.93.7-4.93-3.77.02-2.63 13.99h3.96l1.05-5.23 3.55 5.23h5.2l-5.08-7.34 6.49-6.67h-5.04z"/>',
    arrow: '<svg width="10" height="18"><path d="M1.821 16.976L9.828 8.97a.543.543 0 0 0 0-.79L1.821.172a.543.543 0 0 0-.79 0l-.86.859a.543.543 0 0 0 0 .79l6.753 6.753-6.753 6.753a.543.543 0 0 0 0 .79l.86.86a.543.543 0 0 0 .79 0z"/></svg>',
    refresh: '<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(16);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(7);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]);
    var socials = ['facebook', 'vkontakte', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'facebook') button.innerHTML = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(17),
    config = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(18);

var services = __webpack_require__(4),
    config   = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(6);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    config = __webpack_require__(0),
    fetch = __webpack_require__(32),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(6);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter';
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(1);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(0);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(0);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(0);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    Factory  = __webpack_require__(33),
    utils    = __webpack_require__(2),
    dom      = __webpack_require__(1);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Find most frequent value in array
 * @param {Array} array
 */
var getMostFrequentValue = exports.getMostFrequentValue = function getMostFrequentValue(array) {
    var result = [].concat(_toConsumableArray(array));

    return result.sort(function (a, b) {
        return result.filter(function (v) {
            return v === a;
        }).length - result.filter(function (v) {
            return v === b;
        }).length;
    }).pop();
};

/**
 * Shuffle an array (original array will be modified)
 * @param {Array} array
 */
var shuffle = exports.shuffle = function shuffle(array) {
    var j = void 0,
        x = void 0,
        i = void 0;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
};

/**
 * Convert nodelist to array
 * @param {NodeList} nodeList
 */
var toArray = exports.toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (el, callback) {
    el.addEventListener('load', callback);
    if (isImageLoaded(el)) {
        el.dispatchEvent(new Event('load'));
    }
};

function isImageLoaded(img) {
    if (!img.complete || typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
        return false;
    }

    return true;
};

;

/***/ })
/******/ ]);
//# sourceMappingURL=all.js.map