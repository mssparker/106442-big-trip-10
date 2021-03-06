import AbstractComponent from './abstract-component';

const createFilterMarkup = (filter, isChecked) => {
  return (
    `<div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${filter.name}">${filter.name}</label>
      </div>`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(``);

  return (
    `<form class="trip-filters" action="#" method="get">
        ${filtersMarkup}
  
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
