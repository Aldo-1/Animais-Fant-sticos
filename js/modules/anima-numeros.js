export default function initAnimaNumeros() {
  // Para animar os numeros
  function animaNumeros() {
    // Primeiro pegou eles
    const numeros = document.querySelectorAll('[data-numero]');

    // Para cada numero, fez uma conta para ir somando em um intervalo
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }

  let observer;
  // Observando ate quando chegar nele
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}
