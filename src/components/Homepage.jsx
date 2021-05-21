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
               <strong> Welcome </strong>
                 </h1>
                 <br />
                 <h3>
                     This application can be used to search for person's of interest using name or vehicle registration details
                 </h3>
                 <br />
                 <h5>
                     Scroll down
                 </h5>
        </div>
        <div className="boxes" className="b1">
     <h4>
     <br />
     <br />
        <strong>How to use: </strong>
             <br />
            <br />
        Direct to vehicle or name search using the Navigation Bar at the top of this page 
             <br />
            <br />
             When redirected, input known information and submit
             <br />
             <br />
             You will then be redirected to a page containing further information on that person
            
         </h4>
        </div>
        <div data-aos="fade-up" className="boxes" className="b2">
            <h4>
            <br />
                <br />
               <strong> Application created by:</strong>
                <br />
                <br />
                Cara Prestwich
                <br />
                Junaid Sidat 
                <br />
                Joseph Woodward
                <br />
                Emily Nixon
                <br />
                Emma Gray 
                <br />
                <br />
                NSAC 2021
            </h4>
        </div>

    </div>
</div>
        
        
    )
}

export default Homepage