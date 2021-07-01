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
        <li className="menu__item"><a href="/about" data-testid="nav__about">about</a></li>
        <li className="menu__item"><a href="/projects" data-testid="nav__projects">projects</a></li>
        <li className="menu__item"><a href="/contact" data-testid="nav__contact">contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
