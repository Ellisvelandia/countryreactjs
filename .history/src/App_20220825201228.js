import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [Sele, setSele] = useState(initialState)
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
