import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como padrao
    // se nao for definido
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'active';
  }

  // ativa o  dropdown menu e
  // ativa a funcao de ousideclick
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // add eventos ao dropdown menu
  addDropDownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvents();
    }
    return this;
  }
}
