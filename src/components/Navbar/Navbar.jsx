import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav
      className={`box ${
        sticky ? "dark-nav" : ""
      }  w-full  text-white py-1 px-0 fixed top-0 left-0 flex items-center justify-between z-10`}
    >
      <img className="w-44" src={logo} alt="" />
      <ul className={mobileMenu?'':'hide-menu-icon'}>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
