import {createElement, formatDatePart} from '../utils';

const createDayTemplate = (date) => {
  const day = formatDatePart(date, `day`);
  const month = formatDatePart(date, `month`);
  const year = formatDatePart(date, `year`);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date" datetime="${year}-${month}-${day}">${month} ${year}</time>
      </div>
      <ul class="trip-events__list"></ul>
     </li>`
  );
};

export default class Day {
  constructor(date) {
    this._date = date;
    this._element = null;
  }

  getTemplate() {
    return createDayTemplate(this._date);
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
