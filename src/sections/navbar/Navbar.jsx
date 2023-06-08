import { useRef } from "react";

import "./Navbar.css";
import data from "./data";
// import {IoAccessibility} from 'react-icons/io5'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
      <div className="container nav__container">

        <a href="index.html" className="nav__logo">
          Natalie Gillam - React Developer
        </a>

        <nav ref={navRef} >
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <button className="nav-btn nav-open-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        </nav>

        
        {/* <button id="accessibility__options"><IoAccessibility/><p>Accessibility options</p> </button> */}
      
    </div>
  );
};

export default Navbar;
