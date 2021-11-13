import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="container">
          <h1 className="logo">
            <Link to="/" className="scrollto" href="/">
              <img className="logo-icon1" src="assets/images/eco13.png" />
            </Link>
          </h1>
          <nav
            className="main-nav navbar-expand-md float-right navbar-inverse"
            role="navigation"
          >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div id="navbar" className="navbar">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="active nav-link scrollto" href="#about">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Eco Hikes
                  </a>
                  <ul
                    className="dropdown"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Cusco
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Urubamba
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Paucartambo
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cultural Tours
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Cusco City
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Urubamba
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Paucartambo
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link scrollto" href="#testimonials">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="/Contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
export default NavBar;
