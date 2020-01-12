import Info from './components/info';
import Menu from './components/menu';
import Filter from './components/filter';
import TripController from './controllers/trip-controller';
import {createTotalCostTemplate} from './components/totalCost';

import {points} from './mock/points.js';
import {filters} from './mock/filter.js';
import {renderComponent, renderPosition} from './utils/render-utils';

const siteMainHeaderInfo = document.querySelector(`.trip-info`);
const siteMainHeaderMenu = document.querySelectorAll(`.trip-controls h2`);
const siteMainBody = document.querySelector(`.trip-events`);
const tripController = new TripController(siteMainBody);

renderComponent(siteMainHeaderInfo, new Info(points), renderPosition.AFTERBEGIN);
renderComponent(siteMainHeaderMenu[0], new Menu(), renderPosition.AFTEREND);
renderComponent(siteMainHeaderMenu[1], new Filter(filters), renderPosition.AFTEREND);

tripController.render(points);

createTotalCostTemplate(points);
