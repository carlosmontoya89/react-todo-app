import React from 'react';
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="navbar-fixed">
      <nav className="">
        <div className="container">
          <div className="nav-wrapper">
            <div className="navbar-header">
              <a href="#!" className="brand-logo">Todo App</a>
              <a href="#!" className="sidenav-trigger" data-target="mobile-nav">
                <i className="material-icons">menu</i>
              </a>
            </div>
            <ul className="hide-on-med-and-down right">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-nav">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </div>
  )
}

