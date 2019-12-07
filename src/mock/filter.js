const filterNames = [
  `Everything`,
  `Future`,
  `Past`,
];

const generateFilters = () => {
  return filterNames.map((filter) => ({
    name: filter
  }));
};

export {generateFilters};
