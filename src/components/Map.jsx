import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import "../App.css";


const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/oceania.json"

const markers = [
  {
    markerOffset: -5,
    name: "Sydney",
    coordinates: [151.2093, -33.8688]
  },
   {
    markerOffset: -5,
    name: "Brisbane",
    coordinates: [153.0260, -27.4705]
  },
]

export default function MapChart() {
  return (
    <div className="map">
    <ComposableMap  projectionConfig={{
    rotate: [-10.0, -13.0, 0],
    scale: 1200,
  }}>
       <ZoomableGroup center={[151.2093, -33.8688]} zoom={1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} onClick={() => console.log(name)}>
          <circle r={2} fill="#F00" stroke="#fff" strokeWidth={0.5} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize:"10px", cursor: "pointer" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
    </div>
  )
}