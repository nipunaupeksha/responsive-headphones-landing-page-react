import React, { useState, useLayoutEffect } from "react";
import { images } from "../../constants";
import { RiCloseLine, RiFunctionLine } from "react-icons/ri";
import "./NavBar.css";

const NavBar = () => {
  const initialValue = window.innerWidth > 767 ? true : false;
  const [toggleMenu, setToggleMenu] = useState(initialValue);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (windowWidth > 767) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, [windowWidth]);

  return (
    <nav className="nav container">
      <a href="#" className="nav__logo">
        <img src={images.logo} alt="nav__logo" />
      </a>
      {toggleMenu && (
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#specs" className="nav__link">
                Specs
              </a>
            </li>
            <li className="nav__item">
              <a href="#case" className="nav__link">
                Case
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setToggleMenu(false)}
          >
            <RiCloseLine />
          </div>
        </div>
      )}
      <div
        className="nav__toggle"
        id="nav-toggle"
        onClick={() => setToggleMenu(true)}
      >
        <RiFunctionLine />
      </div>
    </nav>
  );
};

export default NavBar;
