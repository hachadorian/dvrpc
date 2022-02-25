import React, { useEffect, useState } from "react";
import { fetchData } from "./helpers/fetchData";
import jsonData from "./helpers/object.json";

const App = () => {
  const [geojson, setGeoJson] = useState(null);

  useEffect(() => {
    // fetchData().then((res) => {
    //   setGeoJson(res);
    // });

    // testing
    setGeoJson(jsonData);
  }, []);

  return (
    <div className="h-screen">
      <div className="h-full">
        <div className="bg-zinc-700 text-white text-center h-1/6">
          Indicators of Potential Disadvantage (IPD)
        </div>
        <div className="flex h-2/3">
          <div className="w-1/4">sidebar</div>
          <div className="w-3/4">content</div>
        </div>
        <div className="h-1/6">footer</div>
      </div>
    </div>
  );
};

export default App;
