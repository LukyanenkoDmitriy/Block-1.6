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
