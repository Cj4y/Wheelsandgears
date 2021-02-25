import React, { Component } from "react";
import { render } from 'react-dom';
import { Route, BrowserRouter, NavLink, HashRouter} from "react-router-dom";
import NavMenu from "./components/NavMenu"
import Home from "./Home-content";
import Service from "./Service";
import Products from "./Products";
import Brands from "./Brands";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";


const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const Body = styled.body`
  background: #000000;
`;


function Main() {
    return (      
    /* path is /stuff as set by the NavLink component's to prop */          
        <div>
        <HashRouter>
        <NavMenu/>
        </HashRouter>
            <div className="content">
              <HashRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/service" component={Service}/>
                <Route path="/brands" component={Brands}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
              </HashRouter>
            </div>
        </div>    
    );
}
/*render(<Main />, document.getElementById('root'));*/
render(
      <Main/>, 
      document.getElementById("root")
    );
 
export default Main;