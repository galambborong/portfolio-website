import React from 'react';
import SectionContent from '../SectionContent';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const sampleSectionContent = {
  sectionHeader: 'Hello world',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente voluptatibus pariatur sed delectus! Numquam magni neque veniam. Ipsam minima sapiente aut officiis libero aliquid architecto corrupti qui vitae. Fuga ipsam, alias sequi nihil ipsa placeat nobis quae qui atque ut aut assumenda consectetur delectus officiis, iste, animi impedit voluptatum.'
};

test('SectionContent component renders', () => {
  const {getByTestId} = render(<SectionContent sectionContent={sampleSectionContent} />);
  const sectionContent = getByTestId('content');
  expect(sectionContent).toBeTruthy();
})

test('SectionContent renders text passed through props', () => {
  const {getByText} = render(<SectionContent sectionContent={sampleSectionContent}/>);
  const sectionHeader = getByText(sampleSectionContent.sectionHeader);
  const sectionBody = getByText(sampleSectionContent.body);
  expect(sectionHeader).toHaveTextContent(/Hello world/);
  expect(sectionBody).toHaveTextContent(/Lorem ipsum dolor sit amet consectetur/);
})
