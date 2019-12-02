export const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
