export default class TabNav {
  constructor(menu, content) {
    // Pegando a tab-menu (imagens)
    this.tabMenu = document.querySelectorAll(menu);
    // Pegando o respectivos conteudos
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    console.log();
    this.tabContent[index].classList.add(this.activeClass, this.tabContent[index].dataset.anime);
  }

  addTabNavEvent() {
    // Passando o indice do clique
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click',
        this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
