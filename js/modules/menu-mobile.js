import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  // Onde e o botao
  const menuButton = document.querySelector('[data-menu=button]');
  // Lista do botao
  const menuList = document.querySelector('[data-menu=list]');

  const eventos = ['click', 'touchstart'];
  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
  if (menuButton) {
    eventos.forEach((item) => {
      menuButton.addEventListener(item, openMenu);
    });
  }
}
