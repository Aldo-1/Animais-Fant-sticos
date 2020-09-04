import outsideClick from './outsideclick.js';

export default class MenuMobile {
  // Onde e o botao
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    // Lista do botao
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add('active');
    this.menuButton.classList.add('active');
    console.log(this.menuList);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((item) => {
      this.menuButton.addEventListener(item, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
