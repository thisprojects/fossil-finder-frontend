import React from "react";
import Map from "./components/Map";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Content />
        <Map />
      </div>
      <Footer />
    </>
  );
};

export default App;
