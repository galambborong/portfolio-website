import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const sampleHeaders = {
  mainHeader: 'Hello world',
  subHeader: 'This is a sub header',
  imageLink: {
    id: 'test',
    path: '/images/image',
    alt: 'A description of a wonderful image'
  }
};

test('Header component renders', () => {
  const { getByRole } = render(<Header headerContent={sampleHeaders} />);
  const headerEl = getByRole('banner');
  expect(headerEl).toBeTruthy();
});

test('Header component renders expected header texts', () => {
  const { getByRole, getByTestId } = render(
    <Header headerContent={sampleHeaders} />
  );
  const headerEl = getByRole('banner');
  const mainHeader = getByTestId('main');
  const subHeader = getByTestId('sub');
  expect(headerEl).toContainElement(mainHeader);
  expect(headerEl).toContainElement(subHeader);
  expect(mainHeader).toHaveTextContent(/Hello world/);
  expect(subHeader).toHaveTextContent(/This is a sub header/);
});

test('Render image if provided', () => {
  const { getByTestId } = render(<Header headerContent={sampleHeaders} />);
  const headerImage = getByTestId('image');
  expect(headerImage).toHaveAttribute('id', sampleHeaders.imageLink.id);
  expect(headerImage).toHaveAttribute('alt', sampleHeaders.imageLink.alt);
  expect(headerImage).toHaveAttribute('src', sampleHeaders.imageLink.path);
});

const sampleHeaderNoImage = {
  mainHeader: 'Hello there',
  subHeader: 'This is another subheader',
};

test('Do not render img tag if not provided', () => {
  const { queryByTestId } = render(<Header headerContent={sampleHeaderNoImage}/>);
  expect(queryByTestId('image')).not.toBeInTheDocument();
});
