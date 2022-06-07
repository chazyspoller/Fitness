import Swiper from '../../vendor/swiper';

const activateSwiper = (swiperClass, swiperBox, swiperBoxClass, swiperButtons, swiperButtonClass, swiperSlides, swiperSlideClass) => {
  let swiper = new Swiper('.' + swiperClass, {
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
    const card = evt.target.closest(`.${swiperSlideClass}`);

    if (card) {
      swiperSlides.forEach((el) => {
        if (el !== card) {
          el.classList.remove(`${swiperSlideClass}--nojs`);
        }
      });

      card.classList.toggle(`${swiperSlideClass}--nojs`);
    }
  };

  const changeDocWithSwiper = () => {
    if (swiper && swiperBox && swiperButtons.length) {
      swiperBox.classList.remove(`${swiperBoxClass}--nojs`);
      swiperButtons.forEach((button) => button.classList.remove(`${swiperButtonClass}--nojs`));
    }

    if (swiperBox && swiperSlides.length) {
      swiperSlides.forEach((card) => card.classList.remove(`${swiperSlideClass}--nojs`));
      swiperBox.addEventListener('click', onCardClick);
    }
  };

  changeDocWithSwiper();
};

export {activateSwiper};
