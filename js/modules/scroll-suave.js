export default function initScrollSuave() {
  // Pegando todos os linksInternos
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  // Basicamente ele vai para a sessao com mais suavidade
  function scrollToSection(event) {
    event.preventDefault();
    // Pegando o target
    const href = event.currentTarget.getAttribute('href');
    // Pegando a sessao correspondente
    const section = document.querySelector(href);

    // Funcao para smooth
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
    // forma alternativa
    // section.scrollIntoView({
    //   behavior:'smooth',
    //   block: 'start'
    // })
  }

  // Percorrer cada link aplicando a funcao
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
