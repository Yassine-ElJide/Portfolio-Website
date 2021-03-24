import React from "react";
import { Project } from "../../components/Project/Project";
import { projects } from "../../components/Project/ProjectsData";

import "./Projectspage.scss";
export const Projectspage = () => {
  return (
    <section className="container">
        {projects.map((project, index) => {
          const {image, description, name } = project;
          return (
            <div key={index}>
              <Project
                image={image}
                description={description}
                name={name}
              />
            </div>
          );
        })}
    </section>
  );
};
