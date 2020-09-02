export default class scrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeAltura = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }
  // Pegando as sessoes

  animaScroll() {
    // Paraca cada sessao(item) ele pega a distancia do topo dela
    // e diminui com o metade altura.
    // Se o section for visivel menor que 0, ele aparece
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.metadeAltura) < 0;
      if (isSectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
