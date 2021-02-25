import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import khsa from "./KHS-Bicycles-4-Season-500.jpg";
import khsb from "./khsprescott.jpg";
import khsc from "./khstempe.jpg";
import khsd from "./khsultrasport1.jpg";
import khse from "./khs-westwood-ladies.jpg";
import g from "./Kuota-K-Allroad-Disc-2020.jpg";
import kuotaf from "./kuotaK_Allroad.png";
import kuotah from "./kuotakobalt.png";
import felti from "./felt-verza.jpg";
//import hybrid from './khsgrit110.jpg';
import electric from './khssixfifty.jpg';
//import road from "./kuota_khan_disk_road.png";

import fatbike from "./khs4season500.jpg";
//import mountain from "./khs29FS.jpg";
import acc from "./acc.jpg";
import kuota from './kuota.png';
import felt from './felt.png';
import khs from './khs.jpg';


/*



const useStyles = makeStyles({
        root: {
            //width: '70%',
            //maxWidth: 650,
            //display: 'flex',
            
            fontFamily: 'arial',
            display: 'flex',
            margin: '5rem',
            flexDirection: 'column',
            justifyContent: 'center',
            position: "relative",
            top: "5rem",
            //flexDirection: 'column',
           // justifyContent: 'center',
            
            //backgroundColor: theme.palette.background.paper,
        },
        bar: {
            backgroundColor: 'black',
            width: "100%"
          },
        content:
        {
            padding: '1rem',
            textAlignment: "center",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        title: {
            textAlign: 'center',
            color: 'white'
          },
      });*/
    

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'arial',
    position: "relative",
    top: "5rem",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: 'auto',
      height: 'auto',
      //maxWidth: "85%",
      maxHeight: '80%'
    
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  tilesize: {
    width: "100%",
    height: "auto",
    padding:" 4rem 0",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    
  },
}));
/*
brands
http://www.kuotaamericas.com/bikes/cyclocross-mtb/k-all-road-lfs-disc
http://www.kuotaamericas.com/bikes/road/kobalt
https://khsbicycles.com/bikes/2020-khs-models/tempe-20/
https://khsbicycles.com/bikes/2020-khs-models/prescott-20/
https://khsbicycles.com/bikes/2021-khs-models/4-season-500-2021/
https://khsbicycles.com/bikes/ultrasport-1-16/





*/

 const tileData = [
    {
      img: kuota,
      title: 'KUOTA',
      author: '',
      link: "",
    },
    {
      img: kuotaf,
      title: 'KUOTA K-all road LTS disk',
      author: 'Gravel',
      link: "",
    },
    {
      img: kuotah,
      title: 'KUOTA Kobalt',
      author: 'Road',
      link: "",
    },
    {
      img: khs,
      title: 'KHS',
      author: '',
      link: "",
    },
    {
      img: khsc,
      title: 'KHS Tempe',
      author: 'Mountain bike',
      link: "",
    },
    {
      img: khsb,
      title: 'KHS Prescott',
      author: 'XC racing',
      link: "",
    },
    {
      img: khsa,
      title: 'KHS ATB 500',
      author: 'Fat bike',
      link: "",
    },
    {
      img: khsd,
      title: 'KHS Ultra sport 1.0',
      author: 'Hybrid',
      link: "",
    },
    {
      img: khse,
      title: 'KHS Westwood - ladies',
      author: 'Comfort',
      link: "https://khsbicycles.com/bikes/2020-khs-models/westwood-20/#",
    },
    {
      img: felt,
      title: 'FELT',
      author: '',
      link: "",
    },
    {
      img: felti,
      title: 'FELT Verza speed 40',
      author: 'Performance hybrid',
      link: "https://feltbicycles.com/products/verza-speed-40-2020",
    },
  ];
 
export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList 
       className={classes.gridList}
        cellHeight={400}
        cellWidth={700}
        cols={3}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} component="a" href={tile.link}>
            <img src={tile.img} alt={tile.title} className={classes.tilesize} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}