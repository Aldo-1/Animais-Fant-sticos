export default class ScrollSuave {
  constructor(links, options) {
    // Pegando todos os linksInternos
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth', block: 'start',
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // Basicamente ele vai para a sessao com mais suavidade
  scrollToSection(event) {
    event.preventDefault();
    // Pegando o target
    const href = event.currentTarget.getAttribute('href');
    // Pegando a sessao correspondente
    const section = document.querySelector(href);
    console.log(this.options);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    // Percorrer cada link aplicando a funcao
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
