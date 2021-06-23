import React from 'react';
import Nav from '../Nav';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Nav component renders', () => {
  const { getByTestId } = render(<Nav />);
  const navEl = getByTestId('nav');
  expect(navEl).toBeTruthy();
});
