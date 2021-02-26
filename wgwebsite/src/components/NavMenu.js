import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Button, Link, Drawer, IconButton, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../wheelsandgearslogo.jpg"
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Logo = styled.img`
  width: 22rem;
  height: 6rem;
  
`;

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#dd721d",
    paddingRight: "50px",
    paddingLeft: "50px",
    position: "relative",
    top: "-1.7rem",

    "@media (max-width: 1500px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    width: '18rem',
    height: '5rem',
    align: 'left'
  },
  menuButton: {
    fontFamily: 'arial',
    fontStyle: 'strong',
    fontWeight: 1000,
    size: "18px",
    marginLeft: "50px",
    color: '#000000',
    paddingRight: "100px",
    paddingLeft: "100px",
 },
 drawerContainer:{
   padding: "20px 100px",
   fontFamily: 'arial',
   fontType: "strong",
   width: "70%",
   align: "center"
 },
 toolbar: {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  
  //width: '70%',
},
contacttop: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
},

banner: {
  width: "100%",
  height: "100%",
  color: 'black',
  textAlign: "center",
  position: "relative",
  //top: "-1.7rem",
  left: "-3.1rem",
  padding: "15px 50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  //padding: "0 2rem",
  backgroundColor: "#F67F21",
},
bannermobile: {
  width: "100%",
  height: "auto",
  //textColor: 'black',
  textAlign: "center",
  position: "relative",
  //top: "-1.7rem",
  padding: "10px 25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  //padding: "0 2rem",
  backgroundColor: "#F67F21",
},
icon: {
  verticalAlign: "bottom",
  height: 20,
  width: 20
},
}));

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Service",
    href: "/service",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Brands",
    href: "/brands",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavMenu() {
const classes = useStyles();
//mobile version
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
            padding: "0 3rem",
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  
//desktop version
   

  const displayDesktop = () => {
    return(
      <div>
      <div className={classes.banner}>
      <Logo src={logo} alt="Wheels & Gears" href="/"/>
      <div className={classes.contacttop}>
      <ListItem>
        <ListItemIcon><PhoneIcon color="disabled" fontSize="small" /></ListItemIcon>
        <ListItemText >Call us at 519-601-0528</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon><DraftsIcon color="disabled" fontSize="small" /></ListItemIcon>
        <ListItemText>wheelsandgearslondon@gmail.com</ListItemText>
      </ListItem>
      </div>
      </div>
  
    
            
    <Toolbar className={classes.toolbar}>
      <div>{getMenuButtons()}</div>
    </Toolbar>
    </div>
    );
    
  };
  
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <header>
          <div className={classes.bannermobile}>
      <Logo src={logo} alt="Wheels & Gears" href="/"/>
      </div>
      <div className={classes.contacttop}>
      <ListItem>
        <ListItemIcon><PhoneIcon color="disabled" fontSize="small" /></ListItemIcon>
        <ListItemText >Call us at 519-601-0528</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon><DraftsIcon color="disabled" fontSize="small" /></ListItemIcon>
        <ListItemText>wheelsandgearslondon@gmail.com</ListItemText>
      </ListItem>
      </div>

      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            minWidth: "50%",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      
      </Toolbar>
      </header>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "#FFFFFF",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  

  return (
    <header>
      <AppBar className={classes.header}>
      {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
