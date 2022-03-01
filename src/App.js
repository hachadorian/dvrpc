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

    setGeoJson(jsonData);
  }, []);

  return (
    <div className="h-screen font-sans">
      <div className="bg-blue-500 text-white header-footer font-bold flex items-center">
        <img
          className="h-7 mt-1 mx-8"
          alt="logo"
          src={require("./assets/DVRPC-logo.png")}
        />
        <div className="text-xs md:text-base">
          Indicators of Potential Disadvantage (IPD)
        </div>
      </div>
      <div className="flex flex-col md:flex-none h-full content">
        <div className="md:w-2/5 md:absolute lg:w-1/4 h-1/2 rounded-lg z-1000 bg-white md:m-2 flex justify-center">
          <Sidebar feature={feature} />
        </div>
        <div className="h-full relative">
          <Map geoJson={geoJson} setFeature={setFeature} />
        </div>
      </div>
      <div className="header-footer flex bg-zinc-900 text-white font-bold flex justify-center items-center text-xs md:text-base">
        <div>
          Data provided by DVRPC,{" "}
          <a
            className="underline"
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
