import React, { Component } from "react";
import {useTable} from "react-table";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import Paper from '@material-ui/core/Paper';
import Tuneup from "./Tuneup";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        
      },
      
    },
  }))(TableRow);

const data = [
      { service: "Bottom bracket installation", price: "$25.00" },
      { service: "Brake Adjustment", price: "15.00 - 25.00" },
      { service: "Cassette/ Free wheel installation", price: "20.00" },
      { service: "Chain installation", price: "12.00" },
      { service: "Child carrier installation", price: "20.00" },
      { service: "Cycle computer installation", price: "10.00" },
      { service: "Derailleur adjustment/ installation", price: "15.00 - 25.00" },
      { service: "Fenders installation", price: "15.00" },
      { service: "Grips installation", price: "10.00" },
      { service: "Handlebar tape installation", price: "15.00" },
      { service: "Headset installation/ overhaul", price: "20.00" },
      { service: "Hub overhaul", price: "25.00" },
      { service: "Hydraulic brake bleeding", price: "50.00/ pair" },
      { service: "Kickstand installation", price: "10.00" },
      { service: "Tire/ tube installation", price: "11.00" },
      { service: "Tubeless tire installation", price: "25.00" },
      { service: "*Tubular install w/ glue", price: "40.00/ tire" },
      { service: "*Tubular install w/ tape", price: "30.00/ tire" },
      { service: ".....*Tubular tire not included", price: "*" },
      { service: "Wheel build", price: "40.00" },
      { service: "Wheel truing", price: "15.00 - 30.00" },
      { service: "Rack installation", price: "15.00" },
      { service: "Shifters installation", price: "20.00" },
      //{ service: "All parts are extra charge plus tax", price: "" },    
    ];
const columns = [
    {
      Header: 'Service',
      accessor: 'service',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
];
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      //margin: '1.5rem',
      flexDirection: 'column',
      justifyContent: 'center',
      position: "relative",
      top: "-1.7rem",
      fontFamily: 'arial',
    },
    title: {
      textAlign: 'center',
      color: 'white'
    },
    topText:{
      textAlign: 'center',
    },
    bar: {
      backgroundColor: 'black'
    },
    shortDesc:{
      padding: '1rem',
      textAlign: 'left',
      padding: theme.spacing(3, 6),
    },
    table: {
      minWidth: 500,
      maxWidth: "90%",
    }
  }));

export default function Service() {
    /*For table */
    const classes = useStyles(); 
    
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });

    return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <h2 className={classes.title}>Service</h2>
      </div>
      <Divider />
        <div className={classes.shortDesc} >
            <p>Our knowledgeable and experienced bicycle mechanic does 
    excellent tune-ups, repairs, and bike builds.</p>
            <p>We provide maintenance and repairs on all bicycle brands, makes, and models.</p>
        </div>
      <Divider />
          <br></br>
          <Tuneup/>
        <h2>SERVICES ON DEMAND</h2>
        <Divider />
        <br></br>
        <TableContainer component={Paper} className={classes.shortDesc} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Service</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <StyledTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <StyledTableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
        <br></br>
        <h4 className={classes.shortDesc} ><b><p>*All parts needed in the tune-up are extra charge plus tax.</p>
        </b></h4>
    </div>

    );
}
 