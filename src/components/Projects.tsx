import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Header from './Header';
import {keyFormatter} from "../utils/keyFormatter";

const Projects: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [mainProjects] = useState([
    {
      title: 'Project1',
      description: 'Blah blah blah blah',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/project1'
      }
    },
    {
      title: 'Project2',
      description: 'Meh meh meh meh',
      technologies: ['Blood', 'Sweat', 'Tears'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/project2'
      }
    },
    {
      title: 'Project3',
      description: 'Poo poo poo poo poo',
      technologies: ['Bristol stool chart', 'RateMyPoo.com'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/portfolio3'
      }
    }
  ]);
  const [secondaryProjects] = useState([
    {
      title: 'Project X',
      description: 'Coming from X',
      technologies: ['X', 'Y', 'Z'],
      repoInfo: {
        githubUrl: 'https://github.com/galambborong/projectX'
      }
    }
  ]);
  const [mainHeader] = useState({
    mainHeader: 'Coding',
    subHeader: 'A brief overview of my coding projects'
  });
  const [secondaryHeader] = useState({
    subHeader: 'Related projects'
  });

  return (
    <main>
      <Header headerContent={mainHeader} />
      <section className="card-holder card-holder--main">
        {mainProjects.map((project, idx) => {
          return (
            <ProjectCard key={`${idx}${project.title}`} project={project} />
          );
        })}
      </section>
      <Header headerContent={secondaryHeader} />
      <section className="card-holder card-holder--extra">
        {secondaryProjects.map((project, idx) => {
          return (
            <ProjectCard key={keyFormatter(idx, project.title)} project={project} />
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
