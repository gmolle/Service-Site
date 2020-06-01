import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const showNav = (e) => {
    const hamburger = e.target;
    const burger = document.querySelector(".hamburger");

    hamburger.parentElement.previousElementSibling.classList.toggle("open");

    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        setTimeout(() => {
          link.style.animation = "";
        }, 500);
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.35
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  };

  return (
    <nav>
      <div className="logo">Company Logo</div>

      {hover && (
        <div onMouseLeave={() => setHover(false)} className="dropdown-wrapper">
          <Dropdown />
        </div>
      )}

      <div className="nav-links">
        <li onClick={() => setHover(false)} onMouseOver={() => setHover(false)}>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li onClick={() => setHover(false)} onMouseOver={() => setHover(false)}>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li onMouseOver={() => setHover(true)}>
          <NavLink to="/services" activeClassName="active">
            Services ▼
          </NavLink>
        </li>
        <li onClick={() => setHover(false)} onMouseOver={() => setHover(false)}>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </div>

      <div className="hamburger">
        <div className="line1" onClick={showNav}></div>
        <div className="line2" onClick={showNav}></div>
        <div className="line3" onClick={showNav}></div>
      </div>
    </nav>
  );
};

export default Navbar;
