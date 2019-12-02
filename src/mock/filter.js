const filterNames = [
  `Everything`,
  `Future`,
  `Past`,
];

const generateFilters = () => {
  return filterNames.map((filter) => {
    return {
      name: filter
    };
  });
};

export {generateFilters};
