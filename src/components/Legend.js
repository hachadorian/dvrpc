import { useEffect } from "react";
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
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#fefedb"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#edf7b7"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#cbeaba"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#8ad0c0"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#4ebac8"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#2a94bf"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#386eb1"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#3a489d"></div>
              <div class="h-3 w-3 md:h-5 md:w-5" style="background-color:#203368"></div>
            </div>
            <div class="flex items-center py-2">
              <div class="h-3 w-3 md:h-5 md:w-5 border-2" style="background-color:white"></div>
              <div class="ml-2">No Data</div>
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
