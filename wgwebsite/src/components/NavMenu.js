import React, { useState } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
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

  :hover {
    text-decoration: underline;
  }
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
