import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FossilFinder from "./pages/FossilFinder";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FossilFinder />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
