import React from 'react';

interface IProps {
  project: ProjectCardTypes;
}

type ProjectCardTypes = {
  title: string;
  description: string;
  technologies: string[];
  repoInfo: repoInfo;
};

type repoInfo = {
  githubUrl: string;
};

export const ProjectCard: React.FC<IProps> = ({ project }: IProps) => {
  const { title, description, technologies, repoInfo } = project;
  const { githubUrl } = repoInfo;

  return (
    <article className="card" id={title} data-testid="project__card">
      <h3 className="card__title" data-testid="title">
        {title}
      </h3>
      <p className="card__desc">{description}</p>
      <p className="card__desc">Technologies</p>
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

// export default ProjectCard;
