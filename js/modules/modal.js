export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.login = document.querySelector(btnAbrir);
    this.fechar = document.querySelector(btnFechar);
    this.modal = document.querySelector(containerModal);
    // Bind e para o this fazer refarencia ao objeto, dessas funcoes cb
    this.eventHandleOnClick = this.eventHandleOnClick.bind(this);
    this.handleOnClickExit = this.handleOnClickExit.bind(this);
  }

  // adicionar ativo
  handleOnClick() {
    this.modal.classList.toggle('ativo');
  }

  // previne o evento padrao
  eventHandleOnClick(event) {
    event.preventDefault();
    this.handleOnClick();
  }

  // fecha ao clicar do lado de fora
  handleOnClickExit(event) {
    if (event.target === this.modal) { this.handleOnClick(event); }
  }

  // adiciona os eventos
  addEventListener() {
    this.login.addEventListener('click', this.eventHandleOnClick);
    this.fechar.addEventListener('click', this.eventHandleOnClick);
    this.modal.addEventListener('click', this.handleOnClickExit);
  }

  init() {
    if (this.login && this.fechar && this.modal) {
      this.addEventListener();
    }
    return this;
  }
}
