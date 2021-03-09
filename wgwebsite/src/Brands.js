import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import kuota from './kuota.png';
import felt from './felt.png';
import khs from './KHSr.png';
import kali from './kaliprotectives.jpg';
import shimano from './Shimano.png';
import damco from './damco.png';
import icetoolz from './icetoolz.jpg';
import continental from "./continental.png";
import kenda from "./Kenda.png";
import crankbrothers from "./Crank-Brothers-Logo.jpg";
import selleroyal from "./selleroyal.png";
import ravemen from "./ravemen.png";
import zefal from "./zefal.jpeg";
import pearlizumi from "./pearl-izumi.png";
import sugoi from "./sugoi.jpeg";
import fizik from "./fizik.png";

/*
http://kuotaamericas.com/
https://can-en.feltbicycles.com/
https://acsdistributing.com/brand-khs.php
https://acsdistributing.com/brand-manhattan.php
https://acsdistributing.com/brand-bryton.php
https://acsdistributing.com/brand-gemini.php
https://acsdistributing.com/brand-jetblack.php
https://acsdistributing.com/brand-kaliprotectives.php

*/

const tileData =[
    /*{
        img: khs,
        url: 'https://khsbicycles.com/',
        title: '',
        
      },
    {
      img: kuota,
      url: 'http://kuotaamericas.com/',
      title: '',
    },
    {
      img: felt,
      url: 'https://can-en.feltbicycles.com/',
      title: '',
    },*/
    {
      img: shimano,
      url: 'https://www.shimano.com/en/',
      title: '',
    },
    {
      img: continental,
      url: 'https://www.continental-tires.com/bicycle',
      title: '',
    },
    {
      img: kenda,
      url: 'https://www.kendatire.com/en-eu/',
      title: '',
    },
    {
      img: crankbrothers,
      url: 'https://int.crankbrothers.com/',
      title: '',
    },
    {
      img: selleroyal,
      url: 'https://us.selleitalia.com/en/',
      title: '',
    },
    {
      img: ravemen,
      url: 'https://www.ravemen.com',
      title: '',
    },
    
    {
      img: kali,
      url: 'https://acsdistributing.com/brand-kaliprotectives.php',
      title: '',
    },
    {
      img: zefal,
      url: 'https://www.zefal.com',
      title: '',
    },
    {
      img: icetoolz,
      url: 'https://www.icetoolz.eu/en',
      title: '',
    },
    {
      img: damco,
      url: 'https://damourbicycle.com',
      title: '',
    },
    
    {
      img: pearlizumi,
      url: 'https://pearlizumi.com/CA/EN_CA',
      title: '',
    },
    
    {
      img: sugoi,
      url: 'https://www.sugoi.com/en-US',
      title: '',
    },
    
    {
      img: fizik,
      url: 'https://www.fizik.com',
      title: '',
    },
]
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      fontFamily: 'arial',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
     // margin: '3rem',
      position: "relative",
      top: "-1.7rem",
    },
    title: {
      textAlign: 'center',
      color: 'white'
    },
    bar: {
      backgroundColor: 'black',
      width: "100%"
    },
    gridList: {
      width: "auto",
      height: "auto",
      minWidth: "50%",
      minHeight: "20%",
      maxWidth: "90%",
      maxHeight: "75%",
      position: "relative",
      top: "12rem",
    },
    heading: {
        fontSize: theme.typography.pxToRem(20)
    },
    boxsize:{
      maxWidth: '100%',
      width: "500px",
      height: "auto",
      minHeight: '20%',
      minWidth: '20%',
      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'center',
      
    },
    mainlogos:{
      display: 'flex',
      justifyContent: 'space-between',
      width: "80%",
      maxWidth: "500px",
      height: "50%",
      maxHeight: "300px",
      margin: "2rem",
      padding: theme.spacing(6, 6),


    },
    image:{
      maxWidth: '80%',
      width: "80%",
      height: "auto",
      minHeight: '30%',
      minWidth: '30%',
      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'center',
    },
    divider:{
    }
  }));

export default function Brands (){
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.bar}>
        <h2 className={classes.title}>Brands</h2>
        </div>
        <a href="https://acsdistributing.com/brand-khs.php">
          <img src={khs} alt="khs" className={classes.mainlogos}/>
          </a>
          <a href="http://kuotaamericas.com/">
          <img src={kuota} alt="kuota" className={classes.mainlogos}/>        
          </a>
          <a href="https://can-en.feltbicycles.com/">
          <img src={felt} alt="felt" className={classes.mainlogos} position = "center"
      right= "70rem"/>
          </a>  
          <div width="500px" height="500px">-</div>
          
        <GridList
        cellHeight={380}
        cellWidth={500}
        cols={3}
        className={classes.gridList}
        spacing={50}
        
    >
        {tileData.length > 0 &&
        tileData.map((tile) => {
            return (
            <GridListTile component="a" href={tile.url}
                to={tile.url}
                key={tile.url}
            >
                <img className={classes.image} src={tile.img} alt={tile.url} />
            </GridListTile>
            );
        })}
        </GridList>
        <br></br>
    </div>
    );
}
 