import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';

const Projects = (props: RouteComponentProps): JSX.Element => {
  const [projects, setProjects] = useState([
    {
      title: 'Project1',
      description:
        'Blah blah blah blah',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/project1'
      }
    },
    {
      title: 'Project2',
      description:
        'Meh meh meh meh',
      technologies: ['Blood', 'Sweat', 'Tears'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/project2'
      }
    },
    {
      title: 'Project3',
      description:
        'Poo poo poo poo poo',
      technologies: ['Bristol stool chart', 'RateMyPoo.com'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio3'
      }
    },
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
