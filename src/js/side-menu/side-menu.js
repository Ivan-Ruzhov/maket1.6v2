const buttonMenu = document.querySelector('.menu__button-burger');
const ButtonSideMenu = document.querySelector('.side-menu__button-burger')
const sideMenu = document.querySelector('.side-menu');

buttonMenu.addEventListener('click', function() {
  sideMenu.classList.remove('side-menu-hidden')
})
ButtonSideMenu.addEventListener('click', function() {
  sideMenu.classList.add('side-menu-hidden')
})
if (document.documentElement.clientWidth >= 1440) {
  sideMenu.classList.remove('side-menu-hidden');
  buttonMenu.classList.add('menu__button-burger-hidden');
}
