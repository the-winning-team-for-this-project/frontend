import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import "./Box.css"

const Homepage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

<div className="Boxy">
    <div className="grids">
        <div className="boxes">
            <h1>
                <br />
                Hello
                 </h1>
        </div>
        <div data-aos="fade-up" className="boxes" className="b1">
     <h4>
     <br />
            <br />
        Direct to search using the Navigation Bar at the top of this page. 
             <br />
            <br />
             Input known information.
             <br />
             <br />
             You will then be redirected to a page containing further information on that person.
            
         </h4>
        </div>
        <div data-aos="fade-up" className="boxes" className="b2"></div>
        <div data-aos="fade-left" className="boxes" className="b3">info</div>
        <div data-aos="fade-right" className="boxes" className="b4">info</div>
    </div>
</div>
        
        
    )
}

export default Homepage