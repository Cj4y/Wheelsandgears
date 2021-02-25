import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '70%',
        //maxWidth: 650,
        //display: 'flex',
        
        fontFamily: 'arial',
        display: 'flex',
       // margin: '5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        position: "relative",
        top: "3rem",        
        //backgroundColor: theme.palette.background.paper,
    },
    bar: {
        backgroundColor: 'black',
        width: "100%"
      },
    content:
    {
        padding: theme.spacing(5, 6),
        textAlignment: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 5rem',
    },
    title: {
        textAlign: 'center',
        color: 'white'
      },
}));
  

export default function About (){
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.bar}>
            <h2 className={classes.title}>Who are we?</h2>
        </div>
        <div>
        <Paper className={classes.content}>
            <p><b>Wheels & Gears</b> is a bicycle shop with a great selection 
of affordable bicycles to suit your needs or preferences.</p>
<p>We also offer a quality range of products and services
that can make your cycling experience more fun, safe, and
help maintain your bicycle in good condition for a long time.</p>

        </Paper>
        </div>
      </div>
    );
}
 