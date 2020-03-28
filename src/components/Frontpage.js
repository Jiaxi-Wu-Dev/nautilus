import React, { Component } from 'react';
// need to import image
import Background from '/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/matches.png'

class Frontpage extends Component {
    state = {  }
    render() { 
        return ( <div>
            <img src={Background} alt="" />
            </div> );
    }
}
 
export default Frontpage;


