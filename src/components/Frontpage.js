import React, { Component } from "react";
// need to import image
import Background from "/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/matches.png";
import "./App.css";

class Frontpage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="matches">
          <img className="matches" src={Background} width="100%" alt="" />
          <h3>ISSUE 079</h3>
          <h1>Catalysts</h1>
          <p>Agents of Change</p>
          <p>Read More</p>
          <button className="issueButton"> See FULL ISSUE </button>
        </div>
      </div>
    );
  }
}

export default Frontpage;
