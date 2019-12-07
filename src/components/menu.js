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

export const createMenuTemplate = () =>
  `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${getMenuListTemplate(menuItems)}
    </nav>`;
