import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RegionPicker from "./components/RegionPicker";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const onRegionPickerHandler = (region) => {
    setSelectRegion(region);
  };

  const clearSelectedRegionHandler = () => {
    setSelectRegion(null);
  };

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
