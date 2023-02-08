import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import Content from "../components/Content";
import NavAndFootWrapper from "../components/NavAndFootWrapper";
import useNetworkRequest from "../hooks/useNetworkRequest";
import "../App.css";

const App = () => {
  const { getFossils, fossilData } = useNetworkRequest();
  const [fossilIndex, setFossilIndex] = useState(null);
  const selectedFossilRecord = fossilIndex !== null && fossilData[fossilIndex];

  console.log(selectedFossilRecord);

  useEffect(() => {
    const handleGetFossils = async () => {
      await getFossils();
    };
    handleGetFossils();
  }, []);

  return (
    <NavAndFootWrapper>
      <div className="content-wrapper">
        <Content selectedFossilRecord={selectedFossilRecord} />
        <div className="map-wrapper">
          <Map fossilData={fossilData} setFossilIndex={setFossilIndex} />
        </div>
      </div>
    </NavAndFootWrapper>
  );
};

export default App;
