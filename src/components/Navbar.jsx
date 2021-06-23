import React, { useEffect, useRef, useState } from "react";
import useResize from "../hooks/useResize";

export const Navbar = () => {
  const [isNavbarItemsVisible, setNavbarItemsVisibility] = useState(null);

  const [screenWidth] = useResize();

  const inputRef = useRef(null);

  const handleClick = () => {
    setNavbarItemsVisibility(!isNavbarItemsVisible);
  };
  const getNavbarClasses = () => {
    return `navbar__items ${
      isNavbarItemsVisible !== null
        ? isNavbarItemsVisible
          ? `navbar__items--show-animation`
          : `navbar__items--hide-animation`
        : "navbar__items--hide"
    }`;
  };

  useEffect(() => {
    if (screenWidth < 800 && isNavbarItemsVisible !== null) {
      console.log(1);
      isNavbarItemsVisible && inputRef.current.click();
      setNavbarItemsVisibility(null);
    }
  }, [screenWidth]);
  return (
    <nav className="navbar">
      <p className="navbar__title">Dcord Hook</p>
      <div className={getNavbarClasses()} id="navbar-items">
        <a href="./index.html" className="navbar__item">
          Strona główna
        </a>
        <a href="./panel.html" className="navbar__item">
          Panel wysyłania
        </a>
        <a href="./webhook-course.html" className="navbar__item">
          Poradnik
        </a>
      </div>
      <input
        type="checkbox"
        className="navbar__burger__checkbox"
        id="navbar-checkbox"
      />
      <label
        className="navbar__burger"
        id="navbar-burger"
        htmlFor="navbar-checkbox"
        onClick={handleClick}
        ref={inputRef}
      >
        <span className="navbar__burger__center"></span>
      </label>
    </nav>
  );
};
