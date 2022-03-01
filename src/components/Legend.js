import React, { useEffect } from "react";
import L from "leaflet";

const Legend = ({ map }) => {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML = `
        <div class="w-fit p-4 rounded-lg bg-white">
            <div class="text-center font-bold">IPD Scores:</div>
            <div class="grid grid-cols-2">
            <div>0</div>
            <div class="flex justify-end">36</div>
            </div>
            <div class="flex">
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#fff7fb"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#ece7f2"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#d0d1e6"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#a6bddb"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#74a9cf"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#3690c0"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#0570b0"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#045a8d"></div>
            <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#023858"></div>
            </div>
        </div>`;
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);

  return null;
};

export default Legend;
