import React from 'react';
import ProjectCard from '../ProjectCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const sampleProjectData = {
  title: 'Portfolio website',
  description:
    'This responsive and accessible website, designed following a mobile-first approach.',
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
  repoInfo: {
    githubUrl: 'https://github.com/galambborong/portfolio-website'
  }
};

test('ProjectCard component renders', () => {
  const { getByTestId } = render(<ProjectCard project={sampleProjectData} />);
  const projectCardEl = getByTestId('project__card');
  expect(projectCardEl).toBeTruthy();
});

test('Card title renders expected text', () => {
  const { getByTestId } = render(<ProjectCard project={sampleProjectData} />);
  const projectTitle = getByTestId('title');
  expect(projectTitle).toHaveTextContent(/portfolio website/i);
});

test('Button navigates to expected url', () => {
  const { githubUrl } = sampleProjectData.repoInfo;
  const { getByText } = render(<ProjectCard project={sampleProjectData} />);
  const repoBtn = getByText(/view code/i);
  expect(repoBtn).toHaveAttribute('href', githubUrl);
});

test('Technologies content is mapped over and listed', () => {
  const { getByRole, getAllByRole } = render(
    <ProjectCard project={sampleProjectData} />
  );
  const technologyList = getByRole('list');
  expect(technologyList).toBeTruthy();

  const techItems = getAllByRole('listitem');
  expect(techItems.length).toBe(4);

  const items = techItems.map((item) => item.textContent);
  expect(items).toEqual(sampleProjectData.technologies);
});
