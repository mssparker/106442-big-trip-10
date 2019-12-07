import {createInfoTemplate} from './components/info';
import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createSortTemplate} from './components/sort';
import {createDaysTemplate} from './components/days';
import {createTotalCostTemplate} from './components/totalCost';

import {generateEvents} from './mock/event.js';
import {generateFilters} from './mock/filter.js';
import {render} from './utils';

const EVENT_COUNT = 12;

const filters = generateFilters();
const events = generateEvents(EVENT_COUNT);

const siteMainHeaderInfo = document.querySelector(`.trip-info`);
const siteMainHeaderMenu = document.querySelectorAll(`.trip-controls h2`);
const siteMainBody = document.querySelector(`.trip-events`);

render(siteMainHeaderInfo, createInfoTemplate(events), `afterbegin`);
render(siteMainHeaderMenu[0], createMenuTemplate(), `afterend`);
render(siteMainHeaderMenu[1], createFilterTemplate(filters), `afterend`);
render(siteMainBody, createSortTemplate());
render(siteMainBody, createDaysTemplate(events));
createTotalCostTemplate(events);
