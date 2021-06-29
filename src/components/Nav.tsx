import React from 'react';
import { Link } from '@reach/router';

const Nav: React.FC = () => {
  return (
    <nav className="menu" data-testid="nav__main">
      <button className="menu__btn btn--left">
        <Link to="/" data-testid="nav__home">
          <span className="first">p</span>
          <span className="second">k</span>
        </Link>
      </button>
      <button
        className="menu__btn btn--right hamburger"
        id="hamburger"
        title="Navigate this site"
      >
        <i className="fa fa-bars" aria-hidden="true" />
      </button>
      <ul className="menu__list">
        <li className="menu_item">
          <Link to="/about" data-testid="nav__about">
            about
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/projects" data-testid="nav__projects">
            projects
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/contact" data-testid="nav__contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
