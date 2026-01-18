const header = document.getElementById('header');
const menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('is-menu-open');
});