export default class scrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeAltura = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pegando as distancias do topo das sessoes
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(sectionTop - this.metadeAltura),
      };
    });
  }

  // verifica a distancia em cada objeto em relacao ao scrooll do site
  checkDistance() {
    // Paraca cada sessao(item) ele pega a distancia do topo dela
    // e diminui com o metade altura.
    // Se o section for visivel menor que 0, ele aparece
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o evento de scrol
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
