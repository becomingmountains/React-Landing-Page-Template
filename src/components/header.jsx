import React, { Component } from "react";
import logo from "../Murmuring-01.jpg";
import "./header.css";
export class Header extends Component {
  render() {
    return (
      <div>
        <img
          style={{
            padding: 0,
            display: "block",
            margin: "0 auto",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={logo}
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
