import {EventTypes} from '../const.js';

export const createEventListTypesTemplate = (selected) => {
  const transfers = EventTypes.filter((type) => type.subType === `transfer`);
  const activities = EventTypes.filter((type) => type.subType === `activity`);
  const transfersList = transfers.map((type) => (
    `<div class="event__type-item">
        <input id="event-type-${type.name}-1" class="event__type-input  visually-hidden" type="radio" name="${type.name}" value="${type.name}" checked="${type.name === selected}">
        <label class="event__type-label  event__type-label--${type.name}" for="event-type-${type}-1">${type.desc}</label>
      </div>
    `));
  const activitiesList = activities.map((type) => (
    `<div class="event__type-item">
        <input id="event-type-${type.name}-1" class="event__type-input  visually-hidden" type="radio" name="${type.name}" value="${type.name}" checked="${type.name === selected}">
        <label class="event__type-label  event__type-label--${type.name}" for="event-type-${type}-1">${type.desc}</label>
      </div>
    `));

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
