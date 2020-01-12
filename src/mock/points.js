import {eventTypes} from '../const.js';
import {castTimeFormat, getRandomArrayItem, getRandomIntegerNumber, getRandomDate} from '../utils/utils.js';

const EVENT_COUNT = eventTypes.length;

const generateOptions = (qty) => {
  const randomOffers = [];

  for (let i = 0; i < qty; i++) {
    randomOffers.push(getRandomArrayItem(Offers));
  }
  return randomOffers;
};

const generateDescription = (qty) => {
  const randomDescriptions = [];

  for (let i = 0; i < qty; i++) {
    randomDescriptions.push(getRandomArrayItem(DescriptionItems));
  }
  return randomDescriptions.join(` `);
};

const generatePictures = (qty) => {
  const pictures = [];

  for (let i = 0; i < qty; i++) {
    pictures.push({
      url: `http://picsum.photos/300/150?r=${Math.random()}`
    });
  }
  return pictures;
};

const DescriptionItems = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const Offers = [
  {
    type: `Add`,
    name: `luggage`,
    cost: `10`
  },
  {
    type: `Switch to`,
    name: `comfort class`,
    cost: `150`
  },
  {
    type: `Add`,
    name: `meal`,
    cost: `2`
  },
  {
    type: `Choose`,
    name: `seats`,
    cost: `9`
  }
];

const Cities = [
  `Minsk`,
  `Brest`,
  `Krakow`,
  `Brno`,
  `Wien`,
  `Munich`,
];

const formattedTime = (time, diff = false) => {
  const hours = new Date(time).getUTCHours();
  const minutes = new Date(time).getUTCMinutes();

  if (diff) {
    return `${hours}H ${castTimeFormat(minutes)}M`;
  }

  return `${castTimeFormat(hours)}:${castTimeFormat(minutes)}`;
};

const createFakeTime = () => {
  const randomDuration = 3600000 + (getRandomIntegerNumber(10, 30) * 100000);
  const date = new Date();
  const dateData = date.toDateString();
  const startTime = date.getTime();
  const endTime = startTime + randomDuration;

  const formattedStartTime = formattedTime(startTime);
  const formattedEndTime = formattedTime(endTime);
  const diffTime = formattedTime(endTime - startTime, true);

  return {
    dateData,
    startTime: formattedStartTime,
    endTime: formattedEndTime,
    diffTime
  };
};

const generatePoint = () => {
  const startTime = getRandomDate();
  const duration = getRandomIntegerNumber(30, 120) * 60 * 1000;
  const endTime = new Date(startTime.valueOf() + duration);

  return {
    startTime,
    endTime,
    type: getRandomArrayItem(eventTypes),
    city: getRandomArrayItem(Cities),
    offers: new Set(generateOptions(getRandomIntegerNumber(0, 3))),
    description: generateDescription(getRandomIntegerNumber(1, 4)),
    pictures: generatePictures(getRandomIntegerNumber(1, 7)),
    cost: getRandomIntegerNumber(10, 100),
    estimatedTime: createFakeTime(),
    isFavored: false
  };
};

const generatePoints = (count) => {
  return new Array(getRandomIntegerNumber(3, count))
    .fill(``)
    .map(generatePoint);
};

export {generatePoint, generatePoints};

export const points = generatePoints(EVENT_COUNT);
