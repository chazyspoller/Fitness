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
  const linkWrap = evt.target.closest('li');
  const content = document.querySelector(id);

  if (content) {
    tabLinks.forEach((linkBox) => {
      const link = linkBox.querySelector('a');
      if (link.getAttribute('href') !== id) {
        let block = document.querySelector(link.getAttribute('href'));

        if (block) {
          linkBox.classList.remove('tabs__link-item--active');
          block.classList.remove('tabs__content--active');
          block.removeEventListener('click', onContentClick);
        }
      }
    });

    linkWrap.classList.add('tabs__link-item--active');
    content.classList.add('tabs__content--active');
    content.addEventListener('click', onContentClick);
  }
};

const activateTabs = () => {
  tabsContentBlocks[2].classList.add('tabs__content--active');
  tabsContentBlocks[2].addEventListener('click', onContentClick);
  tabLinks[0].classList.add('tabs__link-item--active');
  tabsBlock.classList.remove('tabs--nojs');
  tabLinks.forEach((el) => el.addEventListener('click', onTabClick));
};

if (tabsBlock && tabLinks.length && tabsContentBlocks.length) {
  activateTabs();
}
