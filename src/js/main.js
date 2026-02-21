
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../scss/style.scss'

(() => {
  const nav = document.querySelector('.header__nav');

  document
    .querySelector('.header__box-burger')
    ?.addEventListener('click', () => {
      nav.classList.add('active');
    });

  document
    .querySelector('.header__nav-close')
    ?.addEventListener('click', () => {
      nav.classList.remove('active');
    });
})();

(() => {
  const tabs = document.querySelectorAll('.tabs__links-item');
  const content = document.querySelectorAll('.tabs__content-item');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      content.forEach((item) => {
        item.classList.remove('active');
      });

      tabs[index].classList.add('active');
      content[index].classList.add('active');
    });
  });
})();

(() => {
  const teamSwiper = document.querySelector('.team__swiper')

  if (!teamSwiper) return;
const swiper = new Swiper('.team__swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

});
})();

(() => {
  const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
})();
