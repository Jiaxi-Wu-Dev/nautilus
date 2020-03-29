import React from "react";
import "./App.css";
import Frontpage from "./components/Frontpage";
import Midpage from "./components/Midpage"
import Channels from "./components/Channels"

function App() {
  return (
    <div>
      <Frontpage />
      <Midpage />
      <Channels />
    </div>
  );
}

export default App;
