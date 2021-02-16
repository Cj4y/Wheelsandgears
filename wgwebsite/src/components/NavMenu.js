import React, { useState } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
import styled from "styled-components";
import logo from "../../public/wgfavi.ico"


const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Menu = styled.ul`
  list-style: none;
  display: flex;

  Item:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.Item``;

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

  @media (min-width: 769px) {
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
    font-size: 25px;
    margin: 50px 0px;
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
                <img src={logo} alt="Wheels & Gears"/>
                <Nav>
                    <Menu>
                        <Item><NavLink exact to="/">Home</NavLink></Item>
                        <Item><NavLink to="/service">Service</NavLink></Item>
                        <Item><NavLink to="/products">Products</NavLink></Item>
                        <Item><NavLink to="/brands">Brands</NavLink></Item>
                        <Item><NavLink to="/about">About</NavLink></Item>
                        <Item><NavLink to="/contact">Contact</NavLink></Item>
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
