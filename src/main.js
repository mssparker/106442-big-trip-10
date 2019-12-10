import Info from './components/info';
import Menu from './components/menu';
import Filter from './components/filter';
import Sort from './components/sort';
import TripEvent from './components/trip-event';
import TripEventEdit from './components/trip-event-edit';
import Day from './components/day';
import DayList from './components/day-list';
import {createTotalCostTemplate} from './components/totalCost';

import {events} from './mock/event.js';
import {filters} from './mock/filter.js';
import {render, renderPosition, getDate} from './utils';

const renderRoute = (eventList, event) => {
  const tripEvent = new TripEvent(event);
  const editButton = tripEvent.getElement().querySelector(`.event__rollup-btn`);
  const tripEventEdit = new TripEventEdit(event);
  const editForm = tripEventEdit.getElement().querySelector(`.event--edit`);

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      startEditing();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const startEditing = () => {
    eventList.replaceChild(tripEvent.getElement(), tripEventEdit.getElement());
  };

  const stopEditing = () => {
    eventList.replaceChild(tripEventEdit.getElement(), tripEvent.getElement());
  };

  editButton.addEventListener(`click`, () => {
    stopEditing();
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  editForm.addEventListener(`submit`, startEditing);

  render(eventList, tripEvent);
};

const siteMainHeaderInfo = document.querySelector(`.trip-info`);
const siteMainHeaderMenu = document.querySelectorAll(`.trip-controls h2`);
const siteMainBody = document.querySelector(`.trip-events`);
const dayListElement = new DayList();

render(siteMainHeaderInfo, new Info(events), renderPosition.AFTERBEGIN);
render(siteMainHeaderMenu[0], new Menu(), renderPosition.AFTEREND);
render(siteMainHeaderMenu[1], new Filter(filters), renderPosition.AFTEREND);
render(siteMainBody, new Sort());

render(siteMainBody, dayListElement);

const days = [...new Set(events.map((event) => getDate(event.startTime)))];

days.forEach((day) => {
  const dayElement = new Day(day);
  render(dayListElement.getElement(), dayElement);
  const eventList = dayElement.getElement().querySelector(`.trip-events__list`);
  events.filter((event) => getDate(event.startTime) === day).forEach((event) => renderRoute(eventList, event));
});

createTotalCostTemplate(events);
