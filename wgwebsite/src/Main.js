import React, { Component } from "react";
import { render } from 'react-dom'
import { Route, NavLink, HashRouter} from "react-router-dom";
import NavMenu from "./components.NavMenu"
import Home from "./Home-content";
import Service from "./Service";
import Products from "./Products";
import Brands from "./Brands";
import About from "./About";
import Contact from "./Contact";
 
function Nav (){}
function Main() {
    return (      
    /* path is /stuff as set by the NavLink component's to prop */          
        <div>
        <NavMenu/>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/service" component={Service}/>
              <Route path="/brands" component={Brands}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
        </div>    
    );
}
/*render(<Main />, document.getElementById('root'));*/
 
export default Main;