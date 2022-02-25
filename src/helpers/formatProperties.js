// recharts formatting
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
