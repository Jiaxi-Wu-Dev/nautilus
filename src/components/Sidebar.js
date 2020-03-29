// build a sidebar and then import it to the midpage component

import React, { Component } from "react";
import Goldenglobe from "/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/ai.png";
import "../App.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebarMain">
        <div className="sidebar">
          <h3>ISSUE 079</h3>
          <h1>CATALYSTS</h1>
          <div className="sidebarChapters">
            <div className="chapterOne">
              <h3> CHAPTER ONE</h3>
              <h3> Art </h3>
            </div>
            <div className="chapterTwo">
              <h3> CHAPTER Two</h3>
              <h3> Mind </h3>
            </div>
            <div className="chapterThree">
              <h3> CHAPTER Three</h3>
              <h3> Energy </h3>
            </div>
            <div className="chapterFour">
              <h3> CHAPTER Four</h3>
              <h3> Stars </h3>
            </div>
          </div>
        </div>
          <div className="sidePictures">
            <div>
              <img src={Goldenglobe} alt="" width="800px" height="200px"/>
            </div>
          </div>
      </div>
    );
  }
}

export default Sidebar;
