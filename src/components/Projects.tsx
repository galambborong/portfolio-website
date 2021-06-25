import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = (props: RouteComponentProps): JSX.Element => {
  const [projects, setProjects] = useState([
    {
      title: 'Portfolio website',
      description:
        'This responsive and accessible website, designed following a mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio-website'
      }
    },
    {
      title: 'Portfolio website',
      description:
        'This responsive and accessible website, designed following a mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio-website'
      }
    },
    {
      title: 'Portfolio website',
      description:
        'This responsive and accessible website, designed following a mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio-website'
      }
    },
    {
      title: 'Portfolio website',
      description:
        'This responsive and accessible website, designed following a mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio-website'
      }
    }
  ]);
  return (
    <main>
      <p>hello</p>
      {projects.map((project, idx) => {
        return <ProjectCard key={`${idx}${project.title}`} project={project} />;
      })}
    </main>
  );
};

export default Projects;
