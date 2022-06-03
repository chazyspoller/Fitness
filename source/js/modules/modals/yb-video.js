const video = document.querySelector('[data-src]');
const videoBlock = document.querySelector('.yb-video');

const onVideoClick = (evt) => {
  evt.preventDefault();
  videoBlock.classList.add('yb-video--nojs');
  const src = video.getAttribute('src');
  video.setAttribute('src', src + '&autoplay=1');
};

videoBlock.addEventListener('click', onVideoClick);
