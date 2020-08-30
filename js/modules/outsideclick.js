export default function outsideClick(element, events, callback) {
  // Pegar o html
  const html = document.documentElement;
  const outside = 'data-outside';
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  // Se ele ja foi clicado ele nao ira disparar novamente o evento de click
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
  // Evento para sair passando a funcao callback
}
