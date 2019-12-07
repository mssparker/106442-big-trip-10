const countOffers = (offers) => {
  let sum = 0;
  if (offers.length !== 0) {
    for (let offer of offers) {
      sum += +offer.cost;
    }
  }
  return sum;
};

export const createTotalCostTemplate = (events) => {
  const costPlace = document.querySelector(`.trip-info__cost-value`);
  let sum = 0;
  for (let i = 1; i < events.length; i++) {
    const {cost, offers} = events[i];
    sum += +cost + countOffers(offers);
  }
  costPlace.textContent = `${sum}`;
};
