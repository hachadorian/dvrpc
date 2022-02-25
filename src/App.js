import React, { useEffect, useState } from "react";
import { fetchData } from "./helpers/fetchData";
import jsonData from "./helpers/object.json";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

const App = () => {
  const [geoJson, setGeoJson] = useState(null);
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    // fetchData().then((res) => {
    //   setGeoJson(res);
    // });

    // testing
    setGeoJson(jsonData);
  }, []);

  return (
    <div className="h-screen font-sans">
      <div className="bg-zinc-700 text-white header-footer flex items-center justify-center">
        Indicators of Potential Disadvantage (IPD)
      </div>
      <div className="flex flex-col md:flex-none h-full content">
        <div className="md:w-2/5 md:absolute lg:w-1/4 h-1/2 rounded-lg z-1000 bg-white md:m-2 flex justify-center">
          <Sidebar feature={feature} />
        </div>
        <div className="h-full relative">
          <Map geoJson={geoJson} setFeature={setFeature} />
        </div>
      </div>
      <div className="header-footer flex">
        <div>
          Data provided by DVRPC,{" "}
          <a
            href=" https://dvrpc-dvrpcgis.opendata.arcgis.com/datasets/greater-
philadelphia-tract-level-indicators-of-potential-disadvantage-ipd-2019/explore"
          >
            2019 Indicators of Potential Disadvantage
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
