import React, { Component } from 'react';
import "../App.css";
import Navbar from "./Navbar"
import Banner from "./Banner"
import Sidebar from './Sidebar';

class Midpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <Banner />
                <Sidebar />
            </div>
         );
    }
}
 
export default Midpage;