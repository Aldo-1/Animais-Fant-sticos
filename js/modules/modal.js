export default function initModal() {
  const login = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');
  function handleOnClick(event) {
    event.preventDefault();

    modal.classList.toggle('ativo');
  }

  function handleOnClickExit(event) {
    console.log(this);
    console.log(event.target);
    if (event.target === this) { handleOnClick(event); }
  }
  if (login && fechar && modal) {
    login.addEventListener('click', handleOnClick);
    fechar.addEventListener('click', handleOnClick);
    modal.addEventListener('click', handleOnClickExit);
  }
}
