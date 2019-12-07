import {EventTypes} from '../const.js';

export const createEventListTypesTemplate = (selected) => {
  const transfers = EventTypes.hasOwnProperty(`TRANSFER`) && EventTypes[`TRANSFER`];
  const activities = EventTypes.hasOwnProperty(`ACTIVITY`) && EventTypes[`ACTIVITY`];
  const transfersList = transfers.map((type) => (
    `<div class="event__type-item">
        <input id="event-type-${type.id}-1" class="event__type-input  visually-hidden" type="radio" name="${type.id}" value="${type.id}" checked="${type.id === selected}">
        <label class="event__type-label  event__type-label--${type.id}" for="event-type-${type.id}-1">${type.title}</label>
      </div>
    `)).join(``);
  const activitiesList = activities.map((type) => (
    `<div class="event__type-item">
        <input id="event-type-${type.id}-1" class="event__type-input  visually-hidden" type="radio" name="${type.id}" value="${type.id}" checked="${type.id === selected}">
        <label class="event__type-label  event__type-label--${type.id}" for="event-type-${type.id}-1">${type.title}</label>
      </div>
    `)).join(``);

  return (
    `<div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>
          ${transfersList}
        </fieldset>
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Activity</legend>
          ${activitiesList}
        </fieldset>
    </div>`
  );
};
