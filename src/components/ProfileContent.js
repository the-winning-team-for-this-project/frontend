import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {useState} from 'react';
 

  const searchProfiles = (e) => {
    axios.get(`http://localhost:5000/vehicle`)
    .then(response => {
      console.log(response.data);
    });
  };

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

