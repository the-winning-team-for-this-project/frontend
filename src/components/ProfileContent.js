import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>Date of Birth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            09/05/1994
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                666 Low Street <br/>
                Manchester <br/>
                MA8 2FE <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>Driver Licence ID</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ROBIO123123KL9K123
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>Vehicle Registration No.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FK59 TDY
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>Vehicle Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               Make: Ford <br/>
               Model: Punto <br/>
               Colour: Yellow <br/>
               Registration Date: <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}



// class ProfileContent extends Component {
//   render () {
//     return (
// <div>
//   <title>Profile</title>

// <body>

// <ul class="text">FIRST NAME, LAST NAME</ul>
    
// const { title, content } = accordionData;

// <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
//   <div class="panel panel-default">
//     <div class="panel-heading " role="tab" id="headingOne">
//       <h4 class="panel-title ">
//         <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="" aria-controls="collapseOne">
//           <div class="title  btn btn-danger btn-outline btn-lg">DATE OF BIRTH</div>
//         </a>
//       </h4>
//     </div>
//     <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
//       <div class="panel-body">
//         06/</div>
//       </div>
//     </div>
//   </div>

//       <h3>Address</h3>
//            666 Low Street <br/>
//             Manchester <br/>
//            MA8 2FE <br/>

//       <h3>Driver Licence ID</h3>
//       <p>ROBIO123123KL9K123</p>

//       <h3>Vehicle Registration No.</h3>
//       <p>FK59 TDY</p>

//       <h3>Vehicle Details</h3>
//       <h5>      

//              Make: Ford <br/>
//             Model: Punto <br/>
//             Colour: Yellow <br/>
//             Registration Date: <br/>
      
//             </h5>

// </body>
// </div>

//     );
// }}

// export default ProfileContent;