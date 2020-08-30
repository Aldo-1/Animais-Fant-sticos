export default function initTabNav() {
  // Pegando a tab-menu (imagens)
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  // Pegando o respectivos conteudos
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    console.log();
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    // Colocando o primeiro conteudo como ativo
    tabContent[0].classList.add('ativo');
    // Ativando a aba

    // Passando o indice do clique
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
