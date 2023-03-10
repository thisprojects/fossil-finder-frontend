import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import geoUrl from "../Australia";
import "../App.css";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/oceania.json";

export default function MapChart({
  fossilData,
  setFossilIndex,
  setDrawerState,
}) {
  return (
    <div className="map">
      <ComposableMap
        projectionConfig={{
          rotate: [-10.0, -13.0, 0],
          scale: 600,
        }}
      >
        <ZoomableGroup center={[135.2093, -35.8688]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {fossilData?.map(({ name, co_ords, label_offset }, index) => (
            <Marker
              key={name}
              coordinates={co_ords}
              onClick={() => {
                setFossilIndex(index);
                setDrawerState(true);
              }}
            >
              <circle r={2} fill="#F00" stroke="#fff" strokeWidth={0.5} />
              <text
                textAnchor="middle"
                y={label_offset}
                style={{
                  fontFamily: "system-ui",
                  fill: "#5D5A6D",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
