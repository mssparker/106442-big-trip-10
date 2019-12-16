import TripController from './controllers/trip-controller';
import Info from './components/info';
import Menu from './components/menu';
import Filter from './components/filter';
import {createTotalCostTemplate} from './components/totalCost';

import {events} from './mock/event.js';
import {filters} from './mock/filter.js';
import {renderComponent, renderPosition} from './utils/render-utils';

const headerInfo = document.querySelector(`.trip-info`);
const headerMenu = document.querySelectorAll(`.trip-controls h2`);
const mainContainer = document.querySelector(`.trip-events`);


renderComponent(headerMenu[0], new Menu(), renderPosition.AFTEREND);
renderComponent(headerMenu[1], new Filter(filters), renderPosition.AFTEREND);
renderComponent(headerInfo, new Info(events), renderPosition.AFTERBEGIN);

const controller = new TripController(mainContainer);
controller.render(events);

createTotalCostTemplate(events);
