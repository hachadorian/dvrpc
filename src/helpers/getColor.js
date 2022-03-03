/**
 * function that assigns color based upon ipd_score
 * @param {int} score
 * @returns String
 */
export const getColor = (score) => {
  const shade = Math.floor((9 * score) / 36) + 1;
  if (shade < 0) return "white";
  else return colorWheel[shade];
};

const colorWheel = [
  "#ffffd9",
  "#edf8b1",
  "#c7e9b4",
  "#7fcdbb",
  "#41b6c4",
  "#1d91c0",
  "#225ea8",
  "#253494",
  "#081d58",
];
