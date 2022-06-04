const videoBlock = document.querySelector('.yb-video');

const parseMediaURL = (link) => {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.href;
  const match = url.match(regexp);

  return match[1];
};

const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('yb-video__media');

  return iframe;
};

const generateURL = (id) => {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
};

const setupVideo = (video) => {
  let link = video.querySelector('.yb-video__link');

  if (link) {
    let id = parseMediaURL(link);

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('yb-video--enabled');
  }
};

if (videoBlock) {
  setupVideo(videoBlock);
}
