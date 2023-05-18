import React from 'react';
import './Project.css';

const Project = ({ name, technology, description, link, repo, image }) => (
  <div className="project">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{technology}</p>
    <p>{description}</p>
    <a href={link}>Link</a>
    <a href={repo}>Repo</a>
  </div>
);

export default Project;
