import Swiper from '../../vendor/swiper';

const trainersBox = document.querySelector('.trainers__wrap');
const trainersCards = document.querySelectorAll('.trainers__item');
const trainersButtons = document.querySelectorAll('.trainers__button');
const breakpointDesktop = window.matchMedia('(min-width:1200px)');

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

  watchOverflow: true,
  observer: true,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 15,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      initialSlide: 0,
    },
  },

  on: {
    init() {
      const slidersWidth = this.params.spaceBetween * (this.loopedSlides - 1) + this.slidesSizesGrid[0] * this.loopedSlides;

      if (this.width >= slidersWidth) {
        this.enabled = false;
        this.loopDestroy();
        this.wrapperEl.style.justifyContent = 'center';
        this.navigation.nextEl.style.display = 'none';
        this.navigation.prevEl.style.display = 'none';
      } else {
        this.enabled = true;
        this.loopCreate();
        this.wrapperEl.style.justifyContent = 'flex-start';
        this.navigation.nextEl.style.display = 'block';
        this.navigation.prevEl.style.display = 'block';
      }
    },
    resize() {
      const slidersWidth = this.params.spaceBetween * (this.loopedSlides - 1) + this.slidesSizesGrid[0] * this.loopedSlides;

      if (this.width >= slidersWidth) {
        this.enabled = false;
        this.loopDestroy();
        this.wrapperEl.style.justifyContent = 'center';
        this.navigation.nextEl.style.display = 'none';
        this.navigation.prevEl.style.display = 'none';
      } else {
        this.enabled = true;
        this.loopCreate();
        this.wrapperEl.style.justifyContent = 'flex-start';
        this.navigation.nextEl.style.display = 'block';
        this.navigation.prevEl.style.display = 'block';
      }
    },
  },
});

const onCardClick = (evt) => {
  const card = evt.target.closest('.trainers__item');

  if (card) {
    swiperTrainers.slides.forEach((el) => {
      if (el.querySelector('h3').textContent !== card.querySelector('h3').textContent) {
        el.classList.remove('trainers__item--nojs');
      }
    });

    card.classList.toggle('trainers__item--nojs');
  }
};

const addTabIndexToSlide = (evt) => {
  if (evt.matches) {
    swiperTrainers.slides.forEach((slide) => {
      slide.setAttribute('tabindex', '0');

      if (slide.classList.contains('swiper-slide-duplicate')) {
        slide.setAttribute('tabindex', '-1');
        slide.setAttribute('aria-hidden', 'true');
      }
    });
  } else {
    swiperTrainers.slides.forEach((slide) => slide.removeAttribute('tabindex'));
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
  if (swiperTrainers) {
    swiperTrainers.slides.forEach((slide) => slide.classList.remove('trainers__item--nojs'));
    breakpointDesktop.addListener(addTabIndexToSlide);
    addTabIndexToSlide(breakpointDesktop);
  }
};

activateTrainersSwiper();
