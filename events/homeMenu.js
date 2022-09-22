const btn = document.querySelector('.button--burger');
const menu = document.querySelector('.nav');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  btn.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
