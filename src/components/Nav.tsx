import React from 'react';
import { Link } from '@reach/router';

const Nav = (): JSX.Element => {
  return (
    <nav className="menu">
      <button className="menu__btn btn--left">
        <Link to="/">
          <span className="first">p</span>
          <span className="second">k</span>
        </Link>
      </button>
      <button
        className="menu__btn btn--right hamburger"
        id="hamburger"
        title="Navigate this site"
      >
        &#9776;
      </button>
      <ul className="menu__list">
        <li className="menu_item">
          <Link to="/about">about</Link>
        </li>
        <li className="menu_item">
          <Link to="/projects">projects</Link>
        </li>
        <li className="menu_item">
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
