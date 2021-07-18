import React, { useEffect, useState } from 'react';
import { getRepoInfo } from '../utils/githubApi';
import { keyFormatter } from '../utils/keyFormatter';

interface IProps {
  project: ProjectCardTypes;
}

type ProjectCardTypes = {
  title: string;
  // description: string;
  technologies: string[];
  repoInfo: repoInfo;
};

type repoInfo = {
  githubUrl: string;
};

const ProjectCard: React.FC<IProps> = ({ project }: IProps) => {
  const {
    title,
    // description,
    technologies,
    repoInfo: { githubUrl }
  } = project;

  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState({
    name: '',
    description: '',
    commitsUrl: '',
    url: ''
  });

  useEffect(() => {
    getRepoInfo(title).then((res: any) => {
      // console.log(res);
      const { description, commits_url, name, svn_url } = res;
      setRepo({ description, commitsUrl: commits_url, name, url: svn_url });
      setLoading(false);
    });
  }, []);

  const { description, name, url } = repo;

  console.log(repo);
  return (
    // <p>HELLO</p>
    <article className="card" id={name} data-testid="project__card">
      <h3 className="card__title" data-testid="title">
        {name}
      </h3>
      <p className="card__desc">{description}</p>
      {/* <p className="card__desc">Technologies</p> */}
      {/* <ul className="tech">
        {technologies.map((technology, idx) => {
          return <li key={keyFormatter(idx, technology)}>{technology}</li>;
        })}
      </ul> */}
      <div className="repo-info">
        <button className="repo-info__btn">
          <a href={url} target="_blank" rel="noopener noreferrer">
            view code&emsp;
            <i className="fa fa-github" />
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
