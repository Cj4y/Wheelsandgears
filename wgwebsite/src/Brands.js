import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import kuota from './kuota.png';
import felt from './felt.png';
import khs from './khs.jpg';
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


kuota gravel and racing
khs everything but racing plus ebikes
felt hybrid done



*/

const tileData =[
    {
        img: khs,
        url: 'https://acsdistributing.com/brand-khs.php',
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
    },
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
      
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: '3rem',
  
    },
    gridList: {
      width: "auto",
      height: "auto"
    },
    heading: {
        fontSize: theme.typography.pxToRem(20)
    },
    image:{
      maxWidth: '100%',
      maxHeight: '80%',
      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'space-around',
      flexDirection: 'row',
    }
  }));

export default function Brands (){
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Box
        component={Grid}
        container
        boxShadow={3}
        spacing={3}
        style={{ padding: 10 }}
      >
        
        <img className={classes.image} src={khs} alt="kali" />
        <img className={classes.image} src={kuota} alt="kali" />        
        <img className={classes.image} src={felt} alt="kali" />
        
        </Box>
        <br></br>
        <GridList
        cellHeight={250}
        cellWidth={300}
        cols={3}
        className={classes.gridList}
        spacing={50}
        
    >
        {tileData.length > 0 &&
        tileData.map((tile) => {
            return (
            <GridListTile
                to={tile.url}
                key={tile.url}
            >
                <img className={classes.image} src={tile.img} alt={tile.url} />
            </GridListTile>
            );
        })}
        </GridList>
    </div>
    );
}
 