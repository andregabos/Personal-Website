import React from "react";
import * as projectStyles from "../styles/project.module.scss";

function Project(props) {
  return (
    <div className={projectStyles.project}>
      <h3 className="project-title">{props.title}</h3>
      <img src={props.img} className="screenshot" alt="" />
      <a href={props.ghlink} target="_blank" rel="noreferrer">GitHub</a>
      <a href={props.wplink} target="_blank" rel="noreferrer">Webpage</a>
      <p className="project-description">{props.description}</p>
    </div>
  )
}

export default Project;