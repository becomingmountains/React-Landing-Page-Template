import React, { Component } from "react";
import logo from '../Murmuring-01.jpg';
import './header.css';
export class Header extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
