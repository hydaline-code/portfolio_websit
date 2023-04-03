const menubtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector ('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menunav = document.querySelector('.menu-nav');
const navitem = document.querySelectorAll('.menu-nav_item');


let showMenu = false;

menubtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menunav.classList.add('open')
    navitem.forEach(item =>  item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menunav.classList.remove('open')
    navitem.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}