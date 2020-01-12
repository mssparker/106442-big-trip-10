export const transferTypes = [
  {
    id: `taxi`,
    title: `Taxi`,
    placeholder: `to`
  },
  {
    id: `bus`,
    title: `Bus`,
    placeholder: `to`
  },
  {
    id: `train`,
    title: `Train`,
    placeholder: `to`
  },
  {
    id: `ship`,
    title: `Ship`,
    placeholder: `to`
  },
  {
    id: `transport`,
    title: `Transport`,
    placeholder: `to`
  },
  {
    id: `drive`,
    title: `Drive`,
    placeholder: `to`
  },
  {
    id: `flight`,
    title: `Flight`,
    placeholder: `to`
  },
];

export const activityTypes = [
  {
    id: `check-in`,
    title: `Check`,
    placeholder: `into`
  },
  {
    id: `sightseeing`,
    title: `Sightseeing`,
    placeholder: `at`
  },
  {
    id: `restaurant`,
    title: `Restaurant`,
    placeholder: `at`
  },
];

export const eventTypes = [...transferTypes, ...activityTypes];
