import React from "react";
import Chart from "./Chart";
import { formatProperties } from "../helpers/formatProperties";

const Sidebar = ({ feature }) => {
  let formattedProperties = null;
  if (feature) {
    formattedProperties = formatProperties(feature.properties);
  }

  return (
    <div className="px-4 pt-1 text-center">
      <div>
        <div className="font-bold">Breakdown of Indicators:</div>
      </div>
      {feature ? (
        <div className="h-full">
          <div>IPD score: {feature.properties.ipd_score}</div>
          <Chart data={formattedProperties} />
        </div>
      ) : (
        <div className="text-neutral-400">
          Select a county from the map for score breakdown...
        </div>
      )}
    </div>
  );
};

export default Sidebar;
