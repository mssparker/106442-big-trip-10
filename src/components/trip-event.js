import AbstractComponent from './abstract-component';

const createEventTemplate = (event) => {
  const {type, estimatedTime, offers} = event;
  const extraOptions = [...offers].map((offer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${offer.type} ${offer.name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.cost}</span>
     </li>`
  ).join(``);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.id}.png" alt="${type.id} icon">
        </div>
        <h3 class="event__title">${type.title} airport</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${estimatedTime.dateData}T${estimatedTime.startTime}">${estimatedTime.startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${estimatedTime.dateData}T${estimatedTime.endTime}">${estimatedTime.endTime}</time>
          </p>
          <p class="event__duration">${estimatedTime.diffTime}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${event.cost}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">${extraOptions}</ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`);
};

export default class TripEvent extends AbstractComponent {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  setEditHandler(handler) {
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}

