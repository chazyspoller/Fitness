import Swiper from '../../vendor/swiper';

const feedbacksBox = document.querySelector('.feedbacks__wrap');
const feedbacksCards = document.querySelectorAll('.feedbacks__item');
const feedbacksButtons = document.querySelectorAll('.feedbacks__button');

let swiperFeedbacks = new Swiper('.feedbacks__list', {
  navigation: {
    nextEl: '.feedbacks__button--next',
    prevEl: '.feedbacks__button--prev',
  },

  simulateTouch: false,
  grabCursor: true,
  autoHeight: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Less slides than perview
  watchOverflow: true,

  loop: false,

  slidesPerView: 1,

  spaceBetween: 30,
});

const activateFeedbacksSwiper = () => {
  if (swiperFeedbacks && feedbacksBox && feedbacksButtons.length) {
    feedbacksBox.classList.remove('feedbacks__wrap--nojs');
    feedbacksButtons.forEach((button) => button.classList.remove('feedbacks__button--nojs'));
  }

  if (feedbacksBox && feedbacksCards.length) {
    feedbacksCards.forEach((card) => card.classList.remove('feedbacks__item--nojs'));
  }
};

activateFeedbacksSwiper();
