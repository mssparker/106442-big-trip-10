import {createDayTemplate} from './day';
import {createDayEditTemplate} from './day-edit';

const getDate = (date) => {
  return new Intl.DateTimeFormat(`en-US`).format(date);
};

const generateDaysTemplate = (days, events) => days.map((day, index) => {
  const dayEvents = events.filter((card) => getDate(card.startTime) === day);
  return index === 0 ? createDayEditTemplate(day, dayEvents) : createDayTemplate(day, dayEvents);
}).join(``);

export const createDaysTemplate = (events) => {
  const days = Array.from(new Set(events.map((card) => getDate(card.startTime))));
  const daysMarkup = generateDaysTemplate(days, events);

  return (
    `<ul class="trip-days">
      ${daysMarkup}
    </ul>`
  );
};
