const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatterOptionsDate = {
  day: `numeric`,
  month: `short`,
};

const DateFormatter = new Intl.DateTimeFormat(`en-US`, formatterOptionsDate);

const formatDate = (date) => DateFormatter.format(date);

const getFirst = (array) => array[0];

const getLast = (array) => array[array.length - 1];

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export {castTimeFormat, formatDate, getFirst, getLast, render};
