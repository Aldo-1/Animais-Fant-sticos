import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animation.js';
import Accordion from './modules/script-accordion.js';
import TabNav from './modules/script-tabNav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/btc-fetch.js';
import MenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

initDropDownMenu();

const menuMobile = new MenuMobile('[data-menu=button]', '[data-menu=list]');
menuMobile.init();

initFuncionamento();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

fetchAnimais('../../animaisapi.json', '.numeros-grid');
