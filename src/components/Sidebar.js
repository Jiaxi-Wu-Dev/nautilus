import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
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
              <h3> Energy </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
