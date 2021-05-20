import { Container } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import "./Box.css"

const Homepage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
//         <Container className='homecontainer'>
//         <Jumbotron fluid className='jumone'>
//   <Container>
//   <h1><strong>Search for Person Information</strong></h1>
//         <br />
//         <h3>
//                 Direct to search using the Navigation Bar at the top of this page. 
//             <br />
//             <br />
//             Input known information.
//             <br />
//             <br />
//             You will then be redirected to a page containing further information on that person.
            
//         </h3>
//   </Container>
// </Jumbotron>
//         <Jumbotron fluid className='jumtwo'>
//   <Container>
//     <h1>Hello World</h1>
//     <p>
//       Some things and words and things in here.
//     </p>
//   </Container>
// </Jumbotron>
// <Jumbotron fluid className='jumthree'>
//   <Container>
//     <h1>Hello World</h1>
//     <p>
//       More words here.
//     </p>
//   </Container>
// </Jumbotron>
//         </Container>

<div className="Boxy">
    <h1>Hello</h1>
    <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">1</div>
        <div data-aos="fade-up" className="boxes">1</div>
    </div>
</div>
        
        
    )
}

export default Homepage