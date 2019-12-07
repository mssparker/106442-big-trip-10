import {formatDate, getFirst, getLast} from '../utils';

const getCitiesTemplate = (events) => {
  const cities = events.map(({city}) => city);
  if (cities.length > 3) {
    const departureCity = getFirst(cities);
    const destinationCity = getLast(cities);
    return `${departureCity} &mdash; ... &mdash; ${destinationCity}`;
  }
  return cities.map((city) => `${city}`).join(`&mdash`);
};

export const createInfoTemplate = (events) => {
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
