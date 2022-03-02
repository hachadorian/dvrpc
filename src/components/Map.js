import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import { getColor } from "../helpers/getColor";
import Legend from "./Legend";

const Map = ({ geoJson, setFeature }) => {
  const [map, setMap] = useState(null);

  const mapStyle = (feature) => {
    return {
      fillColor: `${getColor(feature.properties.ipd_score)}`,
      weight: 1,
      opacity: 1,
      color: "grey", //Outline color
      fillOpacity: 0.7,
    };
  };

  const setFeatureStyle = (layer) => {
    layer.setStyle({
      color: "#EFD780",
      weight: 3,
    });
    layer.bringToFront();
  };

  const mapOnEachFeature = (feature, layer) => {
    // disables polygons without ipd_score
    if (feature.properties.ipd_score < 0) {
      layer.options.interactive = false;
    }

    // polygon event handlers
    layer.on("click", () => {
      // set feature to display breakdown of scores
      setFeature(feature);
      setFeatureStyle(layer);
      layer.bringToFront();
    });
    layer.on("mouseover", () => {
      setFeatureStyle(layer);
      layer.bindPopup("IPD Score: " + feature.properties.ipd_score).openPopup();
    });
    layer.on("mouseout", () => {
      layer.setStyle({
        color: "grey",
        weight: 1,
      });
      layer.bringToBack();
      layer.closePopup();
    });
  };

  return (
    <MapContainer
      center={[40.07, -75.22]}
      zoom={9}
      zoomControl={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={geoJson}
        style={mapStyle}
        onEachFeature={mapOnEachFeature}
      />
      <ZoomControl position="topright" />
      <Legend map={map} />
    </MapContainer>
  );
};

export default Map;
