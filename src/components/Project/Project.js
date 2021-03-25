import React from "react";
import {Link} from 'react-router-dom';
export const Project = ({ image, description, name, source }) => {
  return (
    <div className="project">
      <div className="project__info">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="button-container">
          <button><Link to={{ pathname: source }} target="_blank">View Source Code</Link></button>
          <button><Link to="/">See Live</Link></button>
        </div>
      </div>
      <img src={image} alt={description}/>
    </div>
  );
};
