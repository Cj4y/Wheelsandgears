import React, { Component } from "react";
 
import bicycle from '../public/khsgrit110.jpg';
class Home extends Component {
  render() {
    return (
      <div>
        <img src={bicycle} alt="Wheels & Gears"/>
      </div>
    );
  }
}
 
export default Home;