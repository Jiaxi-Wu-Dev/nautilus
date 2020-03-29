import React, { Component } from 'react';
import "../App.css";
import Navbar from "./Navbar"
import Banner from "./Banner"

class Midpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <Banner />
            </div>
         );
    }
}
 
export default Midpage;