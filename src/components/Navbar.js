import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="navbar">
            <img src="/" alt=""/>
          <li>Issues</li>
          <li>Topics</li>
          <li>Blog</li>
          <li>News Letter</li>
          <li>Log In</li>
          <button>Subscribe</button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
