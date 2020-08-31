import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animation.js';
import initAccordion from './modules/script-accordion.js';
import initTabNav from './modules/script-tabNav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBTC from './modules/btc-fetch.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBTC();
