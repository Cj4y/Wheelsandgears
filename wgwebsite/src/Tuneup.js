
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { orange, grey } from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: "1rem 0",
      flexDirection: 'row',
      justifyContent: 'space-around',
      //maxWidth: "500px"
      //justifyContent: 'center',
      height: "auto"
      /*  *********************
      flexWrap: 'wrap',
      overflow: 'hidden',
      */
      
    },
    title:{
      display: 'flex',
  //    padding: "1rem 0",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignText: 'center',
    },
    table: {
      minWidth: 300,
    },
    heading: {
      fontSize: theme.typography.pxToRem(20)
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    icon: {
      verticalAlign: "bottom",
      height: 30,
      width: 30
    },
    column: {     
      display: 'flex',
      margin: '1rem',
      flexDirection: 'column',
      justifyContent: 'center',
      //justifyContent: 'center',
      padding: theme.spacing(2, 2),
      width:"250px",
      height: "auto",
      minWidth: 50
    },
  }));

  export default function Tuneup(){
    const classes = useStyles(); 

    const services = [
        {"bronze": "Adjust front and rear derailleur"},
        {"bronze": "Adjust front and rear brakes"},
        {"bronze": "True wheels"},
        {"bronze": "Adjust front and rear hubs"},
        {"bronze": "Clean and lube drive train"},
        {"bronze": "Lube cables"},
        {"bronze": "Inflate tires"},
        {"bronze": "Safety check"},
        {"silver": "Adjust front and rear derailleur"},
        {"silver": "Adjust front and rear brakes"},
        {"silver": "True wheels"},
        {"silver": "Adjust front and rear hubs"},
        {"silver": "Clean and lube drive train"},
        {"silver": "Lube cables"},
        {"silver": "Clean bicycle"},
        {"silver": "Inflate tires"},
        {"silver": "Safety check"},
        
      ];
      const bronze = services.slice(0,8).map((d) => <li key={d.bronze}>{d.bronze}</li>); 
      const silver = services.slice(8,17).map((d) => <li key={d.silver}>{d.silver}</li>); 
            
      const details = [bronze, silver];

      const serviceTitle = ["Full Tune-up Bronze - $69","Full Tune-up Silver - $99"];
      
       //build service cards

          return (
          <div className={classes.root}>
          
            <Paper> 
              <div className={classes.title}>
              <Brightness1Icon style={{ color: orange[500] }}>Brightness1</Brightness1Icon>
                <Typography className={classes.heading}>{serviceTitle[0]}</Typography>
              </div>

              <div className={classes.column}>
                {details[0]}
              </div>
              <br></br>
            </Paper>
            
          <br></br>
          <Paper>
            <div className={classes.title}>
                <Brightness1Icon style={{ color: grey[400] }}>Brightness1</Brightness1Icon>
            
                <Typography className={classes.heading}>{serviceTitle[1]}</Typography>
            </div>
              <div className={classes.column}>
                {details[1]}  
              </div>           
              </Paper>
            <br></br>
          </div>
          );
  }