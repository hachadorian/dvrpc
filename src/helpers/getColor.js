/**
 * function that assigns color based upon ipd_score
 * @param {int} score
 * @returns String
 */
export const getColor = (score) => {
  const shade = Math.floor((9 * score) / 36);
  if (shade < 0) return "white";
  else return colorWheel[shade];
};

const colorWheel = [
  "#fefedb",
  "#edf7b7",
  "#cbeaba",
  "#8ad0c0",
  "#4ebac8",
  "#2a94bf",
  "#386eb1",
  "#3a489d",
  "#203368",
];
