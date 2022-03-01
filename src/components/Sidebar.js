import React from "react";
import Chart from "./Chart";
import { formatProperties } from "../helpers/formatProperties";

const Sidebar = ({ feature, setFeature }) => {
  let formattedProperties = null;
  if (feature) {
    // format properties to match recharts required format
    formattedProperties = formatProperties(feature.properties);
  }

  return (
    <div className="px-4 pt-1 text-center">
      <div>
        <div className="font-bold">Breakdown of Indicators:</div>
      </div>
      {feature ? (
        <div className="h-full">
          <div
            className="text-left text-blue-500 cursor-pointer hover:underline"
            onClick={(e) => {
              setFeature(null);
            }}
          >
            Back
          </div>
          <div>IPD score: {feature.properties.ipd_score}</div>
          <Chart data={formattedProperties} />
        </div>
      ) : (
        <div className="text-neutral-400">
          Select a census tract from the map for score breakdown...
        </div>
      )}
    </div>
  );
};

export default Sidebar;
