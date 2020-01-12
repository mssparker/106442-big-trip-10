export const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

export const getRandomDate = () => {
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

export const formatDate = (date, options) => {
  return dateFormatter(options).format(date);
};

export const formatDatePart = (date, part) => {
  const targetDate = new Date(date);
  const datePart = {
    [part]: formatterOptionsDate[part]
  };
  return targetDate.toLocaleString(`en-US`, datePart);
};

export const getDate = (date) => {
  return new Intl.DateTimeFormat(`en-US`).format(date);
};

export const getFirst = (array) => array[0];

export const getLast = (array) => array[array.length - 1];

const getUnique = (array) => [...new Set(array)];

const sortPurely = (array, iterate) => array.slice().sort(iterate);

export const ArrayUtils = {
  getFirst,
  getLast,
  getUnique,
  sortPurely
};
