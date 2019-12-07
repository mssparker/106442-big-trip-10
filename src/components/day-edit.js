import {createEventTemplate} from './event';
import {createEventEditTemplate} from './event-edit';

export const createDayEditTemplate = (date, dayCards) => {
  const targetDate = new Date(date);
  const day = new Intl.DateTimeFormat(`en-US`, {day: `numeric`}).format(targetDate);
  const month = new Intl.DateTimeFormat(`en-US`, {month: `short`}).format(targetDate);
  const year = new Intl.DateTimeFormat(`en-US`, {year: `2-digit`}).format(targetDate);
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
