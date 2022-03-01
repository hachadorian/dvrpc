/**
 * takes array of properties and reformats to adhere to recharts format
 * @param {Array} properties
 * @returns Array
 */
export const formatProperties = (properties) => {
  const keyNames = [
    "Youth",
    "Racial Minority",
    "Older Adults",
    "Low-Income",
    "Limited English",
    "Foreign Born",
    "Female",
    "Ethnic Minority",
    "Disabled",
  ];

  const dataArr = [];
  Object.keys(properties).map((key) => {
    if (key !== "ipd_score") {
      dataArr.push({
        key: keyNames[keyNames.length - 1],
        value: properties[key],
      });
      keyNames.pop();
    }
    return null;
  });

  return dataArr;
};
