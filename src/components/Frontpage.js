import React, { Component } from 'react';
// need to import image
import Background from '/Users/dmac/Desktop/PerScholas/hw/nautilus_mockup/nautilus/src/assets/matches.png'


var backgroundStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
}
class Frontpage extends Component {
    state = {  }
    render() { 
        return ( <div>
            <section style= {backgroundStyle}></section>
            </div> );
    }
}
 
export default Frontpage;


