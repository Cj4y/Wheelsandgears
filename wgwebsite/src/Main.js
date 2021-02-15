import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home-content";
import Service from "./Products";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
 
class Main extends Component {
    {/* path is /stuff as set by the NavLink component's to prop */}
    const navLinks = [
    {
        text: 'Home',
        path: '/',
        icon: 'ion-ios-home'
    },
    
    {
        text: 'Service',
        path: '/service',
        icon: 'ion-ios-bonfire'
    },
    {
        text: 'Products',
        path: '/products',
        icon: 'ion-ios-briefcase'
    },
    {
        text: 'About',
        path: '/about',
        icon: 'ion-ios-business'
    },
    {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-megaphone'
    }
]
    return (
        <div className ="Main">
            <ResponsiveNavigation
				navLinks={ navLinks }
				logo={ logo }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
            <HashRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/service" component={Service}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </HashRouter>
        </div>
    );

 
export default Main;