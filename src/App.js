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
    <div className="h-screen">
      <div className="bg-zinc-700 text-white text-center header-footer">
        Indicators of Potential Disadvantage (IPD)
      </div>
      <div className="flex flex-col-reverse md:flex-row content">
        <div className="md:w-1/4">
          <Sidebar feature={feature} />
        </div>
        <div className="md:w-3/4 h-full">
          <Map geoJson={geoJson} setFeature={setFeature} />
        </div>
      </div>
      <div className="header-footer">
        <div>
          Data provided by DVRPC, 2019 Indicators of Potential Disadvantage
        </div>
        <a
          href=" https://dvrpc-dvrpcgis.opendata.arcgis.com/datasets/greater-
philadelphia-tract-level-indicators-of-potential-disadvantage-ipd-2019/explore"
        >
          data
        </a>
      </div>
    </div>
  );
};

export default App;
