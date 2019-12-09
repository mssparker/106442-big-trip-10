import {createElement, formatDate, getFirst, getLast} from '../utils';

const getCitiesTemplate = (events) => {
  const cities = events.map(({city}) => city);
  const maxVisibleCities = cities.length > 3;
  if (maxVisibleCities) {
    const departureCity = getFirst(cities);
    const destinationCity = getLast(cities);
    return `${departureCity} &mdash; ... &mdash; ${destinationCity}`;
  }
  return cities.map((city) => `${city}`).join(`&mdash`);
};

const createInfoTemplate = (events) => {
  const sortingCards = events.sort((a, b) => a.startTime - b.startTime);
  const citiesTemplate = getCitiesTemplate(sortingCards);

  return (
    `<div class="trip-info__main">
        <h1 class="trip-info__title">${citiesTemplate}</h1>
    
       <p class="trip-info__dates">
          ${formatDate(getFirst(sortingCards).startTime)}
          &nbsp;&mdash;&nbsp;
          ${formatDate(getLast(sortingCards).endTime)}
    </div>`
  );
};

export default class Info {
  constructor(events) {
    this._events = events;
    this._element = null;
  }

  getTemplate() {
    return createInfoTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
