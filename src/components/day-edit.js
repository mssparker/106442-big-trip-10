import {formatDatePart} from '../utils';
import {createEventTemplate} from './event';
import {createEventEditTemplate} from './event-edit';

export const createDayEditTemplate = (date, dayCards) => {
  const targetDate = new Date(date);
  const day = formatDatePart(targetDate, `day`);
  const month = formatDatePart(targetDate, `month`);
  const year = formatDatePart(targetDate, `year`);
  const eventsTemplate = dayCards.map((card, index) => index === 0
    ? createEventEditTemplate(card)
    : createEventTemplate(card))
    .join(``);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date" datetime="2019-03-18">${month} ${year}</time>
      </div>
      <ul class="trip-events__list">
        ${eventsTemplate}
      </ul>
     </li>`
  );
};
