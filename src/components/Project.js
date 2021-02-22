import React, { useState } from 'react';
import {projects} from './ProjectsData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const Project = () => {
  const [index, setIndex] = useState(0);
  const {name, image, description, source} = projects[index];

  const checkNumber = (number) => {
    if (number > projects.length - 1) {
      return 0;
    }
    if (number < 0) {
      return projects.length - 1;
    }
    return number;
  };

  const nextProject = () => {
      setIndex(index => {
          let newIndex = index + 1
          return checkNumber(newIndex)
      })
  }
  const prevProject = () => {
     setIndex(index => {
         let newIndex = index - 1
         return checkNumber(newIndex)
     })
  }

  return (
    <article className='project'>
      <h3>{name}</h3>
      <div className="img-container">
        <img src={image} alt={name}/>
      </div>
      <div className='project-info'>
          <p>{description}</p>
          <button>
              View Source Code
          </button>
      </div>
      <div className='button-container' onClick={nextProject}>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

