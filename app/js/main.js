const menuBtn = document.querySelector('.burger-menu');
const menuMobile = document.querySelector('.navigation__list--header');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('active');
  menuBtn.classList.toggle('active');
});