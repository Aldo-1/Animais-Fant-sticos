export default function initAnimacaoScroll() {
  // Pegando as sessoes
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  const metadeAltura = window.innerHeight * 0.6;
  function animaScroll() {
    // Paraca cada sessao(item) ele pega a distancia do topo dela
    // e diminui com o metade altura.
    // Se o section for visivel menor que 0, ele aparece
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - metadeAltura) < 0;
      if (isSectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    // Pegando a metade da altura para ele ja comecar a animacao

    // ele ja comeca para aparecer no comeco
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
