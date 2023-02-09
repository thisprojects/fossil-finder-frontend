import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import Content from "../components/Content";
import NavAndFootWrapper from "../components/NavAndFootWrapper";
import Drawer from "@mui/material/Drawer";
import useNetworkRequest from "../hooks/useNetworkRequest";
import "../App.css";

const App = () => {
  const { getFossils, fossilData } = useNetworkRequest();
  const [fossilIndex, setFossilIndex] = useState(null);
  const [drawerState, setDrawerState] = useState(false);
  const selectedFossilRecord = fossilIndex !== null && fossilData[fossilIndex];

  useEffect(() => {
    const handleGetFossils = async () => {
      await getFossils();
    };
    handleGetFossils();
  }, []);

  const closeDrawer = () => {
    setDrawerState(false);
  };

  return (
    <NavAndFootWrapper>
      <div className="content-wrapper">
        <Drawer
          PaperProps={{
            sx: { width: "35%" },
          }}
          open={drawerState}
          onClose={closeDrawer}
        >
          <Content selectedFossilRecord={selectedFossilRecord} />
        </Drawer>
        <div className="map-wrapper">
          <Map
            fossilData={fossilData}
            setFossilIndex={setFossilIndex}
            setDrawerState={setDrawerState}
          />
        </div>
      </div>
    </NavAndFootWrapper>
  );
};

export default App;
