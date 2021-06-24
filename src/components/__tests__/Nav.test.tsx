import React from 'react';
import Nav from '../Nav';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Nav component renders', () => {
  const { getByTestId } = render(<Nav />);
  const navEl = getByTestId('nav__main');
  expect(navEl).toBeTruthy();
});

test('Nav component renders with correct links', () => {
  const { getByTestId } = render(<Nav />);
  const navElement = getByTestId('nav__main');
  const navAbout = getByTestId('nav__about');
  const navProjects = getByTestId('nav__projects');
  const navContact = getByTestId('nav__contact');
  const navHome = getByTestId('nav__home');
  expect(navElement).toContainElement(navAbout);
  expect(navElement).toContainElement(navProjects);
  expect(navElement).toContainElement(navContact);
  expect(navElement).toContainElement(navHome);
});

test('Links point to correct urls', () => {
  const { getByTestId } = render(<Nav />);
  const navAbout = getByTestId('nav__about');
  const navProjects = getByTestId('nav__projects');
  const navContact = getByTestId('nav__contact');
  const navHome = getByTestId('nav__home');
  expect(navAbout).toHaveAttribute('href', '/about');
  expect(navProjects).toHaveAttribute('href', '/projects');
  expect(navContact).toHaveAttribute('href', '/contact');
  expect(navHome).toHaveAttribute('href', '/');
});
