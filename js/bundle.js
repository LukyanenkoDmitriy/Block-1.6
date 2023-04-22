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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_main_page_main_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-main/page-main__swiper.js */ "./src/page-main/page-main__swiper.js");
/* harmony import */ var _page_main_page_main_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_main_page_main_swiper_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/page-main/page-main__swiper.js":
/*!********************************************!*\
  !*** ./src/page-main/page-main__swiper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const breakpoint = window.matchMedia('(min-width:768px)')

function swiperCheck() {
  if (breakpoint.matches) {
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true)
      return
    }
  } else if (!breakpoint.matches) {
    return createSwiper()
  }
}
function swiperCheckVar2() {
  if (breakpoint.matches) {
    if (mySwiperVar2 !== undefined) {
      mySwiperVar2.destroy(true, true)
      return
    }
  } else if (!breakpoint.matches) {
    return createSwiperVar2()
  }
}
function swiperCheckVar3() {
  if (breakpoint.matches) {
    if (mySwiperVar3 !== undefined) {
      mySwiperVar3.destroy(true, true)
      return
    }
  } else if (!breakpoint.matches) {
    return createSwiperVar3()
  }
}

let mySwiper
let mySwiperVar2
let mySwiperVar3

function createSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    touchRatio: 1,
    slidesPerView: 'auto',
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: {
      invert: true,
      sensitivity: 1
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  })
}

function createSwiperVar2() {
  mySwiperVar2 = new Swiper('.swiper-containerVar2', {
    touchRatio: 1,
    slidesPerView: 'auto',
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: {
      invert: true,
      sensitivity: 1
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  })
}

function createSwiperVar3() {
  mySwiperVar3 = new Swiper('.swiper-containerVar3', {
    touchRatio: 1,
    slidesPerView: 'auto',
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: {
      invert: true,
      sensitivity: 1
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  })
}
breakpoint.addEventListener('change', swiperCheck)
breakpoint.addEventListener('change', swiperCheckVar2)
breakpoint.addEventListener('change', swiperCheckVar3)
swiperCheck()
swiperCheckVar2()
swiperCheckVar3()

const button = document.querySelector('.swiper__button-add')
const buttonVar2 = document.querySelector('.swiper__button-addVar2')
const buttonCollection = document.querySelectorAll('.visually-hidden')
const buttonCollectionVar2 = document.querySelectorAll('.visually-hiddenVar2')
const buttonSpan = button.querySelector('.button-add-content')
const buttonSpanVar2 = buttonVar2.querySelector('.button-add-contentVar2')
const buttonBurgerAdd = document.querySelector('.nav__button-burger')
const buttonBurgerRem = document.querySelector('.button-rem')
const menu = document.querySelector('.container-menu')
const menuCallButton = document.querySelector('.menu-call-button')
const menuChatButton = document.querySelector('.menu-chat-button')
const menuWraper = document.querySelector('.wrapper-menu')
const buttonCallAdd = document.querySelector('.nav__button-call')
const buttonChatAdd = document.querySelector('.nav__button-chat')
const modalFeedback = document.querySelector('.container-modal-feedback')
const modalFeedbackButtonClose = document.querySelector(
  '.modal-feedback-button-close'
)
const modalCall = document.querySelector('.container-modal-call')
const modalCallButtonClose = document.querySelector('.modal-call-button-close')
const mainDescriptionText = document.querySelector('.main__description-text')
const body = document.querySelector('.body')
const buttonImgCall = document.querySelector('.button-img-call')
const buttonImgChat = document.querySelector('.button-img-chat')
const modalChatWindow = document
  .querySelector('.container-modal-feedback')
  .querySelector('.modal-input')
const modalCallWindow = document
  .querySelector('.container-modal-call')
  .querySelector('.modal-input')

document.addEventListener('click', function (evt) {
  if (menuWraper.classList.contains('wrapper-menu-add')) {
    if (evt.clientX > menuWraper.clientWidth) {
      menuWraper.classList.remove('wrapper-menu-add')
      body.classList.remove('body-add')
    }
  }
  if (modalFeedback.classList.contains('modal-feedback-add')) {
    if (evt.target.parentNode.classList.value == 0) {
      modalFeedback.classList.remove('modal-feedback-add')
      body.classList.remove('body-add')
    }
  }
  if (modalCall.classList.contains('modal-call-add')) {
    if (evt.target.parentNode.classList.value == 0) {
      modalCall.classList.remove('modal-call-add')
      body.classList.remove('body-add')
    }
  }
})

button.addEventListener('click', function () {
  buttonCollection.forEach((elem) => {
    elem.classList.toggle('add')
  })
  buttonCheck()
})
buttonVar2.addEventListener('click', function () {
  buttonCollectionVar2.forEach((elem) => {
    elem.classList.toggle('add')
  })
  buttonCheckVar2()
})

function buttonCheck() {
  if (buttonSpan.textContent === 'Показать все') {
    buttonSpan.textContent = 'Скрыть'
    buttonSpan.classList.toggle('button-add-content')
    buttonSpan.classList.toggle('button-add-content-add')
  } else if (buttonSpan.textContent == 'Скрыть') {
    buttonSpan.textContent = 'Показать все'
    buttonSpan.classList.toggle('button-add-content-add')
    buttonSpan.classList.toggle('button-add-content')
  }
}
function buttonCheckVar2() {
  if (buttonSpanVar2.textContent === 'Показать все') {
    buttonSpanVar2.textContent = 'Скрыть'
    buttonSpanVar2.classList.toggle('button-add-contentVar2')
    buttonSpanVar2.classList.toggle('button-add-content-add')
  } else if (buttonSpanVar2.textContent == 'Скрыть') {
    buttonSpanVar2.textContent = 'Показать все'
    buttonSpanVar2.classList.toggle('button-add-content-add')
    buttonSpanVar2.classList.toggle('button-add-contentVar2')
  }
}

buttonBurgerAdd.addEventListener('click', function () {
  menuWraper.classList.add('wrapper-menu-add')
  body.classList.add('body-add')
})

buttonBurgerRem.addEventListener('click', function () {
  menuWraper.classList.remove('wrapper-menu-add')
  body.classList.remove('body-add')
})
buttonChatAdd.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback-add')
  body.classList.add('body-add')
})
buttonCallAdd.addEventListener('click', function () {
  modalCall.classList.add('modal-call-add')
  body.classList.add('body-add')
})

modalFeedbackButtonClose.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-feedback-add')
  body.classList.remove('body-add')
})

modalCallButtonClose.addEventListener('click', function () {
  modalCall.classList.remove('modal-call-add')
  body.classList.remove('body-add')
})
menuCallButton.addEventListener('click', function () {
  menuWraper.classList.remove('wrapper-menu-add')
  modalCall.classList.add('modal-call-add')
  body.classList.add('body-add')
})
menuChatButton.addEventListener('click', function () {
  menuWraper.classList.remove('wrapper-menu-add')
  modalFeedback.classList.add('modal-feedback-add')
  body.classList.add('body-add')
})

modalFeedback.addEventListener('transitionstart', (e) => {
  modalChatWindow.focus()
})

modalCall.addEventListener('transitionstart', (e) => {
  modalCallWindow.focus()
})


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map