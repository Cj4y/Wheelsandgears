import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

/*
https://khsbicycles.com/bikes/2021-khs-models/4-season-500-2021/
https://khsbicycles.com/bikes/ultrasport-1-16/
*/

import bike1 from "./khsultrasport1.jpg";
import bike2 from "./khs4season500.jpg";
import bike3 from "./kuotaK_Allroad.png";
const useStyles = makeStyles({
root: {
   // width: '70%',
    //maxWidth: '800px',
    //maxWidth: 650,
    fontFamily: 'arial',
    fontType: "strong",
    display: 'flex',
    //margin: '5rem',
    flexDirection: 'column',
    //justifyContent: 'center',
    position: "relative",
    top: "-1.7rem",
    //padding: '2rem'
    //backgroundColor: theme.palette.background.paper,
},
title: {
    textAlign: 'center',
    color: 'white'
},
bar: {
  backgroundColor: 'black',
  width: "100%"
},
content: {
    //margin: '1rem 10rem',
    fontFamily: 'arial',
    display: 'flex',
    margin: '5rem',
    flexDirection: 'row',
    justifyContent: 'center',
    width:"auto",
}
});
    

export default function Home (){
        const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.bar}>
            <h2 className={classes.title}>Welcome to Wheels & Gears</h2>
        </div>
    <Card className={classes.content} component="a" href="#/products">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bikes"
          image={bike1}
          href="/products"
          title="Bikes"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            KHS Ultra Sport 1.0
          </Typography>
          <Typography variant="body1" component="h2" >
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.content} component="a" href="#/products">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Service"
          
          image={bike2}
          to="/service"
          title="service"
          maxWidth="500px"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            KHS ATB 500 Fat Bike
          </Typography>
          <Typography variant="body1" component="h2" >
            
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      <Card className={classes.content} component="a" href="#/products">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Service"
          height="80%"
          image={bike3}
          to="/products"
          title="service"
          maxWidth="500px"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            KUOTA K-all road LFS disk
          </Typography>
          <Typography variant="body1" component="h2" >
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    );
}
 
