import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Button, Link, Drawer, IconButton, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../wheelsandgearslogo.jpg"
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from "@material-ui/core/Typography";

const Logo = styled.img`
  width: 18rem;
  height: 5rem;
  margin: auto 0;
`;

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#F67F21",
    paddingRight: "50px",
    paddingLeft: "50px",
    top: "3rem",

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
  justifyContent: "space-between",
  flexDirection: "row",
  
  //width: '70%',
},
banner: {
  position: "relative",
  top: "3rem",
  width: "100%",
  height: "40px",
  color: 'black',
  textAlign: "center",
  veritcalAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 2rem"
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
    return (
    <Toolbar className={classes.toolbar}>
      <Logo src={logo} alt="Wheels & Gears"/>
      <div>{getMenuButtons()}</div>
    </Toolbar>
    );
  };
  
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
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
      <Logo src={logo} alt="Wheels & Gears" href="/"/>
      </Toolbar>
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
      <div className={classes.banner}>
      <Typography className={classes.icon}>
        <PhoneIcon color="disabled" fontSize="small"/>
      </Typography>
      Call us at 519-601-0528
      </div>
      <AppBar className={classes.header}>
      {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}


/*import React, { useState } from "react";
import { <Button, NavLink, HashRouter} from "react-router-dom";
import styled from "styled-components";
//import styled from "styled-components/native";
import logo from "../wheelsandgearslogo.jpg"


const Nav = styled.nav`
  padding: 1rem;
  background: #F67F21;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkElem = styled(NavLink)`
  &.active {
    color: ${props => props.theme.orange }
  }
`;


const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  
  @media (max-width: 750px) {
    display: none;
  }
`;

const Item = styled.li``;

const Logo = styled.img`
  width: 18rem;
  height: 5rem;
  margin: auto 0;
`;


const Link = styled.a`
  color: white;
  text-decoration: none;

`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 750px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  Item {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 10rem;
    margin-right: 20rem;
    transition: opacity 0.4s ease-in-out;
  }

  Item:nth-child(2) {
    margin: 50px 0px;
  }
`;

const NavMenu = () => {
    const [toggle, toggleNav] = useState(false);
    return (
        <HashRouter>
            <div className="Main">                
                <Nav>
                  <NavLinkElem exact to="/">
                    <Logo src={logo} alt="Wheels & Gears"/>
                  </NavLinkElem>
                    <Menu>
                        <Item><NavLinkElem exact to="/">Home</NavLinkElem></Item>
                        <Item><NavLinkElem to="/service">Service</NavLinkElem></Item>
                        <Item><NavLinkElem to="/products">Products</NavLinkElem></Item>
                        <Item><NavLinkElem to="/brands">Brands</NavLinkElem></Item>
                        <Item><NavLinkElem to="/about">About</NavLinkElem></Item>
                        <Item><NavLinkElem to="/contact">Contact</NavLinkElem></Item>
                    </Menu>
                    <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                    </NavIcon>
                </Nav>
            </div>
        </HashRouter>      
    );
};

export default NavMenu;
*/