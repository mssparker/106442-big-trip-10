import {createInfoTemplate} from './components/info';
import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createSortTemplate} from './components/sort';
import {createEventListTemplate} from './components/event-list';
import {createEventEditTemplate} from './components/event-edit';

import {createEventTemplate} from './components/event.js';
import {generateEvents} from './mock/event.js';
import {generateFilters} from './mock/filter.js';
import {render} from './utils';

const EVENT_COUNT = 6;

const filters = generateFilters();
const events = generateEvents(EVENT_COUNT);

const siteMainHeaderInfo = document.querySelector(`.trip-info`);
const siteMainHeaderMenu = document.querySelectorAll(`.trip-controls h2`);
const siteMainBody = document.querySelector(`.trip-events`);

render(siteMainHeaderInfo, createInfoTemplate(), `afterbegin`);
render(siteMainHeaderMenu[0], createMenuTemplate(), `afterend`);
render(siteMainHeaderMenu[1], createFilterTemplate(filters), `afterend`);
render(siteMainBody, createSortTemplate());
render(siteMainBody, createEventEditTemplate(events[0]));
render(siteMainBody, createEventListTemplate());

const cardList = document.querySelector(`.trip-events__list`);
events.slice(1).forEach((event) => render(cardList, createEventTemplate(event)));
