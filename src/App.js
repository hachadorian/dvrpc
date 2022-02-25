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

  return <div className="App"></div>;
};

export default App;
