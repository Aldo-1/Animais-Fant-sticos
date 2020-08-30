export default function initAccordion() {
  // Pegar os accordionList
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    // Iniciar os primeiros DD e DT abertos
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // Ele coloca uma classe que adiciona se nao existir e remove se existir
    // E coloca no elemento proximo.

    // Para cada DD
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
