const tabsBlock = document.querySelector('.tabs');
const tabsContentBlocks = tabsBlock.querySelectorAll('.tabs__content');
const tabLinks = Array.from(document.querySelector('.tabs__links').children);

const onContentClick = (evt) => {
  const card = evt.target.closest('li');
  const cardBox = Array.from(evt.target.closest('ul').children);

  cardBox.forEach((el) => {
    if (el.getAttribute('data-content') !== card.getAttribute('data-content')) {
      el.classList.remove('tabs__content-item--active');
    }
  });

  card.classList.toggle('tabs__content-item--active');
};

const onTabClick = (evt) => {
  evt.preventDefault();
  const id = evt.target.getAttribute('href');
  const content = document.querySelector(id);

  tabLinks.forEach((link) => {
    if (link.getAttribute('href') !== id) {
      let block = document.querySelector(link.getAttribute('href'));
      link.classList.remove('tabs__link--active');
      block.classList.remove('tabs__content--active');
      block.removeEventListener('click', onContentClick);
    }
  });

  evt.target.classList.add('tabs__link--active');
  content.classList.add('tabs__content--active');
  content.addEventListener('click', onContentClick);
};

tabsContentBlocks[2].addEventListener('click', onContentClick);
tabLinks[0].classList.add('tabs__link--active');
tabsBlock.classList.remove('tabs--nojs');
tabLinks.forEach((el) => el.addEventListener('click', onTabClick));
