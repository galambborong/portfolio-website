import { FC } from 'react';
import React from 'react';
import { object, func } from 'prop-types';

// www.idkblogs.com/react/56/Error-Data-is-missing-in-props-validation--eslint-react-prop-types--React

https: type repoInfo = {
  githubUrl: string;
};

type ProjectCardType = {
  title: string;
  description: string;
  technologies: string[];
  repoInfo: repoInfo;
};

interface ProjectCardProps {
  project: ProjectCardType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, repoInfo } = project;
  const { githubUrl } = repoInfo;

  return (
    <article className="card" id={title} data-testid="project__card">
      <h3 className="card__title" data-testid="title">
        {title}
      </h3>
      <p className="card__desc">{description}</p>
      <p className="card__desc">Front End Tech</p>
      <ul className="tech">
        {technologies.map((technology, idx) => {
          return <li key={`${idx}${technology}`}>{technology}</li>;
        })}
      </ul>
      <div className="repo-info">
        <button className="repo-info__btn">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            view code&emsp;
            <i className="fa fa-github" />
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
