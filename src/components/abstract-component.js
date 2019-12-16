import {createComponent} from "../utils/render-utils";

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createComponent(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    if (this._element === null) {
      return;
    }
    this._element = null;
  }
}
