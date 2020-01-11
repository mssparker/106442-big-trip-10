import Sort, {SortType} from "../components/sort.js";
import TripEvent from "../components/trip-event";
import TripEventEdit from "../components/trip-event-edit";
import Day from '../components/day';
import DayList from '../components/day-list';
import NoTripEventMessage from "../components/no-trip-event-message";

import {getDate} from "../utils/utils";
import {renderComponent, replaceComponent} from '../utils/render-utils';

const sortByDuration = (a, b) => (b.endTime - b.startTime) - (a.endTime - a.startTime);
const sortByPrice = (a, b) => b.price - a.price;
const getSortedEvents = (events, sortType) => events.slice().sort(sortType);

const renderRoute = (eventList, event) => {
  const tripEvent = new TripEvent(event);
  const tripEventEdit = new TripEventEdit(event);

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      startEditing();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const startEditing = () => replaceComponent(tripEvent, tripEventEdit);

  const stopEditing = () => replaceComponent(tripEventEdit, tripEvent);

  tripEvent.setEditHandler(() => {
    stopEditing();
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  tripEventEdit.setSubmitHandler(startEditing);

  renderComponent(eventList, tripEvent);
};

const renderDays = (dayListElement, events) => {
  events.map((event) => {
    const time = getDate(event.startTime);
    const dayElement = new Day(time);

    renderComponent(dayListElement, dayElement);
    const eventList = dayElement.getElement().querySelector(`.trip-events__list`);
    events.map((point) => renderRoute(eventList, point));
    renderRoute(eventList, event);
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;

    this._noTripEventMessage = new NoTripEventMessage();
    this._sort = new Sort();
    this._dayList = new DayList();
  }

  render(events) {
    if (events.length === 0) {
      renderComponent(this._container, this._noTripEventMessage);
      return;
    }

    renderComponent(this._container, this._sort);
    renderComponent(this._container, this._dayList);

    const dayListElement = this._dayList.getElement();
    renderDays(dayListElement, events);

    this._sort.setSortClickHandler((sortType) => {
      let sortedEvent = [];

      switch (sortType) {
        case SortType.TIME: {
          sortedEvent = getSortedEvents(events, sortByDuration);
          break;
        }
        case SortType.PRICE: {
          sortedEvent = getSortedEvents(events, sortByPrice);
          break;
        }
        case SortType.DEFAULT:
        default : {
          sortedEvent = events;
          break;
        }
      }

      dayListElement.innerHTML = ``;

      renderDays(dayListElement, sortedEvent);
    });
  }
}
