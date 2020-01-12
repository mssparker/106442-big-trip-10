import AbstractComponent from './abstract-component';

const sortPointsTemplate = () => `<li class="trip-days__item  day">
      <div class="day__info"></div>
      <ul class="trip-events__list"></ul>
    </li>
`;

export default class SortPoints extends AbstractComponent {
  getTemplate() {
    return sortPointsTemplate();
  }
}
