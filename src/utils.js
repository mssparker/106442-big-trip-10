const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const formatterOptionsDate = {
  day: `numeric`,
  month: `short`,
  year: `2-digit`
};

const dateFormatter = (options = formatterOptionsDate) => new Intl.DateTimeFormat(`en-US`, options);

const formatDate = (date, options) => dateFormatter(options).format(date);

const formatDatePart = (date, part) => {
  const datePart = {
    [part]: formatterOptionsDate[part]
  };
  return formatDate(date, datePart);
};

const getFirst = (array) => array[0];

const getLast = (array) => array[array.length - 1];

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export {castTimeFormat, getRandomDate, getRandomArrayItem, getRandomIntegerNumber, formatDate, formatDatePart, getFirst, getLast, render};
