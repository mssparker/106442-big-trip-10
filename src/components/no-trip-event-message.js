import AbstractComponent from './abstract-component';

const createNoTripEventMessage = () => `<p class="trip-events__msg">Click New Event to create your first point</p>`;

export default class NoTripEventMessage extends AbstractComponent {
  getTemplate() {
    return createNoTripEventMessage();
  }
}
