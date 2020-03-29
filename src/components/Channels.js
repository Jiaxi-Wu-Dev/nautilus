import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Channels extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="heading">
          <h1> Channels </h1>
          <h2> TUNE IN TO NAUTILUS DEEP DIVE PORTALS </h2>
        </div>

        <img
          src="/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/bio_and_beyond.jpeg"
          alt=""
        />
        <img
          src="/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/wise_sci_and_engineering.png"
          alt=""
        />
        <img
          src="/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/abstractions.jpeg"
          alt=""
        />
      </div>
    );
  }
}

export default Channels;
