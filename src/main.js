import {createInfoTemplate} from './components/info';
import {createMenuTemplate} from './components/menu';
import {createMenuFilterTemplate} from './components/menu-filter';
import {createFilterTemplate} from './components/filter';
import {createEventTemplate} from './components/event';
import {createEventListTemplate} from './components/event-list';
import {createEventEditTemplate} from './components/event-edit';

const CARD_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainHeaderInfo = document.querySelector(`.trip-info`);
const siteMainHeaderMenu = document.querySelectorAll(`.trip-controls h2`);
const siteMainBody = document.querySelector(`.trip-events`);

render(siteMainHeaderInfo, createInfoTemplate(), `afterbegin`);
render(siteMainHeaderMenu[0], createMenuTemplate(), `afterend`);
render(siteMainHeaderMenu[1], createMenuFilterTemplate(), `afterend`);
render(siteMainBody, createFilterTemplate());
render(siteMainBody, createEventEditTemplate());
render(siteMainBody, createEventListTemplate());

const cardList = document.querySelector(`.trip-events__list`);
new Array(CARD_COUNT).fill(``).forEach(() => render(cardList, createEventTemplate()));
