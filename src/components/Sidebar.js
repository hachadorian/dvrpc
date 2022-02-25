import React from "react";
import Chart from "./Chart";
import { formatProperties } from "../helpers/formatProperties";

const Sidebar = ({ feature }) => {
  let formattedProperties = null;
  if (feature) {
    formattedProperties = formatProperties(feature.properties);
  }

  return (
    <div>
      {feature ? (
        <div>
          <div>
            Indicators of Potential Disadvantage Score:{" "}
            {feature.properties.ipd_score}
          </div>
          <Chart data={formattedProperties} />
        </div>
      ) : (
        <div>no feature</div>
      )}
    </div>
  );
};

export default Sidebar;
