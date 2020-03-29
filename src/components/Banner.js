// Create a banner component and import it to the Midpage component

import React, { Component } from 'react';
import "../App.css"
import Clovers from '/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/clover_card.jpg'

class Banner extends Component {
    state = {  }
    render() { 
        return ( <div>
            <img src= { Clovers } alt="" width="100%" height="300px" object-fit="cover"/>
            <h3>THE NAUTILUS SPOTLIGHT</h3>
            <h1> WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
            <button>READ NOW</button>
        </div> );
    }
}
 
export default Banner;