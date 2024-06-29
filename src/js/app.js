import * as functions from './modules/functions.js';

// Checking if browsers supports .webp
functions.isWebp();

// Modal window

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.main__btn');
const closeModalBtn = document.querySelector('.modal__close');

body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('visible')) {
    modal.classList.remove('visible');
    body.classList.remove('lock');
  }
});

openModalBtn.addEventListener('click', () => {
  modal.classList.add('visible');
  body.classList.add('lock');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
  body.classList.remove('lock');
});
