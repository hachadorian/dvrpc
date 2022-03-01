import React, { useEffect, useState } from "react";
import jsonData from "./helpers/object.json";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import Loader from "./components/Loader";

const App = () => {
  const [geoJson, setGeoJson] = useState(null);
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const req = await fetch(
    //     "https://arcgis.dvrpc.org/portal/rest/services/Demographics/IPD_2019/FeatureServer/0/query?where=1%3D1&geometryPrecision=5&outfields=ipd_score,d_score,em_score,f_score,fb_score,lep_score,li_score,oa_score,rm_score,y_score&f=geojson"
    //   );
    //   const res = await req.json();
    //   setTimeout(() => {}, 500);
    //   return res;
    // };

    // fetchData()
    //   .then((res) => setGeoJson(res))
    //   .catch((err) => console.log(err));

    // testing
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
          <Sidebar feature={feature} setFeature={setFeature} />
        </div>
        <div className="h-full relative">
          {geoJson ? (
            <Map geoJson={geoJson} setFeature={setFeature} />
          ) : (
            <Loader />
          )}
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
