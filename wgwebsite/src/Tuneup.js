
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
      padding: theme.spacing(2, 8),
      width:"200px",
      height: "auto",
      minWidth: 50
    },
  }));

  export default function Tuneup(){
    const classes = useStyles(); 

    const services = [
        {"bronze": "Wheel timing"},
        {"bronze": "Headset adjustment"},
        {"bronze": "Gears adjustment"},
        {"bronze": "Brake adjustment"},
        {"bronze": "Drive train lubrication"},
        {"bronze": "Tire pressure (check)"},
        {"bronze": "Safety check"},
        {"silver":"Bicycle full clean-up"},
        {"silver":"Full disassembly of bicycle parts "},
        {"silver":"Clean and grease all moving parts "},
        {"silver":"Full tune-up"},
      ];
      const bronze = services.slice(0,6).map((d) => <li key={d.bronze}>{d.bronze}</li>); 
      const silver = services.slice(7,10).map((d) => <li key={d.silver}>{d.silver}</li>); 
            
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
                All services in bronze tune-up plus: 
                {details[1]}  
              </div>           
              </Paper>
            <br></br>
          </div>
          );
  }