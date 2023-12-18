// const hambourgerBtn = document.querySelector('.ri-menu-4-line');
const hambourgerBtn = document.querySelector('.menu-icon');
const hambourgerBtnCloser = document.querySelector('.ri-menu-unfold-line');

const ctaHeader = document.querySelector('.cta-contact_us');
const nav = document.querySelector('nav');

hambourgerBtn.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});