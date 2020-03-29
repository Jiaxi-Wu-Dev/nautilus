import React, { Component } from 'react';
import "../App.css"
import Clovers from '/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/clover_card.jpg'

class Banner extends Component {
    state = {  }
    render() { 
        return ( <div>
            <img src= { Clovers } alt="" width="100%" height="20%"/>
        </div> );
    }
}
 
export default Banner;