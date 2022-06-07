import Swiper from '../../vendor/swiper';

const trainersBox = document.querySelector('.trainers__wrap');
const trainersCards = document.querySelectorAll('.trainers__item');
const trainersButtons = document.querySelectorAll('.trainers__button');

let swiperTrainers = new Swiper('.trainers__list', {
  navigation: {
    nextEl: '.trainers__button--next',
    prevEl: '.trainers__button--prev',
  },

  simulateTouch: false,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Less slides than perview
  watchOverflow: true,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
});

const onCardClick = (evt) => {
  const card = evt.target.closest('.trainers__item');

  if (card) {
    trainersCards.forEach((el) => {
      if (el !== card) {
        el.classList.remove('trainers__item--nojs');
      }
    });

    card.classList.toggle('trainers__item--nojs');
  }
};

const activateTrainersSwiper = () => {
  if (swiperTrainers && trainersBox && trainersButtons.length) {
    trainersBox.classList.remove('trainers__wrap--nojs');
    trainersButtons.forEach((button) => button.classList.remove('trainers__button--nojs'));
  }

  if (trainersBox && trainersCards.length) {
    trainersCards.forEach((card) => card.classList.remove('trainers__item--nojs'));
    trainersBox.addEventListener('click', onCardClick);
  }
};

activateTrainersSwiper();
