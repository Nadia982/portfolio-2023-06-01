import "./Navbar.css";
import data from "./data";
// import {IoAccessibility} from 'react-icons/io5'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          Natalie Gillam - React Developer
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="menu-control">
          <FaTimes />
        </button>
        <button className="menu-control">
          <FaBars />
        </button>
        {/* <button id="accessibility__options"><IoAccessibility/><p>Accessibility options</p> </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
