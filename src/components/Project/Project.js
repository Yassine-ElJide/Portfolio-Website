import React from "react";
import {Link} from 'react-router-dom';

export const Project = ({ image, description, name }) => {
  return (
    <div className="project">
      <div className="project__info">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="button-container">
          <button><Link to="/">View Source Code</Link></button>
          <button><Link to="/">See Live</Link></button>
        </div>
      </div>
      <div className="project__img">
        <img src={image} alt={description} />
      </div>
    </div>
  );
};
