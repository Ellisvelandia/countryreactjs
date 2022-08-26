import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RegionPicker from "./components/RegionPicker";
import Countries from "./components/Countries";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const onRegionPickerHandler = (region) => {
    setSelectedRegion(region);
  };

  const clearSelectedRegionHandler = () => {
    setSelectedRegion(null);
  };

  return (
    <div className="App">
      <Navbar />

      {selectedRegion ? <Countries/> : <RegionPicker onRegionPickerHandler = {}/>}
    </div>
  );
}

export default App;
