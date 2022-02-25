import React from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import { getColor } from "../helpers/getColor";

const Map = ({ geoJson, setFeature }) => {
  const mapStyle = (feature) => {
    return {
      fillColor: `${getColor(feature.properties.ipd_score)}`,
      weight: 1,
      opacity: 1,
      color: "grey", //Outline color
      fillOpacity: 0.7,
    };
  };

  const mapOnEachFeature = (feature, layer) => {
    if (feature.properties.ipd_score < 0) {
      layer.options.interactive = false;
    }
    layer.on("click", () => {
      setFeature(feature);
    });
    // layer.on("mouseover", () => {
    //   layer.setStyle({
    //     color: "red",
    //     weight: "3px",
    //   });
    // });
    // layer.on("mouseout", () => {
    //   layer.setStyle({
    //     color: "grey",
    //     weight: "",
    //   });
    // });
  };

  return (
    <MapContainer center={[40.07, -75.22]} zoom={9} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={geoJson}
        style={mapStyle}
        onEachFeature={mapOnEachFeature}
      />
      <ZoomControl position="topright" />
    </MapContainer>
  );
};

export default Map;
