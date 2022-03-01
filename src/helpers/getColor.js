/**
 * function that assigns color based upon ipd_score
 * @param {int} score
 * @returns String
 */
export const getColor = (score) => {
  const shade = Math.ceil((9 * score) / 36) + 1;
  if (shade < 0) return colorWheel[0];
  else return colorWheel[shade];
};

const colorWheel = [
  "#fff7fb",
  "#ece7f2",
  "#d0d1e6",
  "#a6bddb",
  "#74a9cf",
  "#3690c0",
  "#0570b0",
  "#045a8d",
  "#023858",
];
