import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import ExploreIcon from '@material-ui/icons/Explore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        // width: '70%',
        
        //maxWidth: 650,
        fontFamily: 'arial',
        display: 'flex',
        //margin: '5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        position: "relative",
        top: "-1.7rem",
        //padding: '2rem'
        //backgroundColor: theme.palette.background.paper,
    },
    title: {
        textAlign: 'center',
        color: 'white'
      },
      topText:{
        textAlign: "center"
      },
      bar: {
        backgroundColor: 'black',
        width: "100%"
      },
      content: {
          margin: '1rem 5rem',
          width: "auto",
          minWidth: '400px',
      }
  });

const textColor = {
    color: "blue"
};

export default function Contact (){
    const classes = useStyles();

    return (  
    <div className={classes.root}>
        <div className={classes.bar}>
            <h2 className={classes.title}>Any questions?</h2>
        </div>
        <br></br>
        <h3 className={classes.topText}>Please visit us in our shop for a more personalized service</h3>
        <br></br>
    <Paper elevation={3} className={classes.content} >
        <ListItem>
        <ListItemIcon><PhoneIcon/></ListItemIcon>
        <ListItemText primary="519-601-0528"/>
        </ListItem>
        <ListItem>
        <ListItemIcon><DraftsIcon/></ListItemIcon>
        <ListItemText primary="wheelsandgearslondon@gmail.com"/>
        </ListItem>
        <Divider/>
        <ListItem>
        <ListItemIcon><ExploreIcon/></ListItemIcon>
        <ListItemText primary="528 ADELAIDE ST N"/>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="LONDON, ON"/>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="N6B3J4"/>
        </ListItem>
        <ListItem button component="a" href="https://www.google.com/search?q=wheelsandgears+london&oq=wheelsandgears+london&aqs=chrome..69i57j0i19j0i19i22i30j69i61j69i60l2.3778j0j7&sourceid=chrome&ie=UTF-8">
        <ListItemIcon><AccessTimeIcon/></ListItemIcon>
        <ListItemText primaryTypographyProps={{ style: textColor }} primary="Hours" />
        </ListItem>

    </Paper>
    </div>
    );
}
 