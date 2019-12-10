import {createElement} from '../utils';

const menuItems = [
  `Table`,
  `Stats`
];

const getMenuListTemplate = (items) => items.map((item, index) => {
  const firstElement = index === 0;
  const classNameBase = `trip-tabs__btn`;
  const className = firstElement ? `${classNameBase} ${classNameBase}--active` : classNameBase;

  return `
    <a class='${className}' href="#">${item}</a>
    `;
}).join(``);

const createMenuTemplate = () =>
  `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${getMenuListTemplate(menuItems)}
    </nav>`;

export default class Menu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

