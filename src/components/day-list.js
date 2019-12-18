import AbstractComponent from './abstract-component';

const createDaysTemplate = () => `<ul class="trip-days"></ul>`;

export default class DayList extends AbstractComponent {
  getTemplate() {
    return createDaysTemplate();
  }
}
