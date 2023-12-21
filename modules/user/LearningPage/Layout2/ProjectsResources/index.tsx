import React from "react";
import "./index.scss";

function ProjectsResources() {
  return (
    <div className="project">
      <div className="project-instruction">
        <div className="project-instruction-title">Project Instructions</div>
        <ul className="project-file">
          <div className="project-file-title">Download Project Files</div>
          <li className="project-list">
            Step 01: Understand The Structure Of Bones
          </li>
          <li className="project-list">Step 02: Sculpting the Bones</li>
          <li className="project-list">
            Step 03: Understand The Structure Of Muscles
          </li>
          <li className="project-list">Step 04: Sculpting The Muscles</li>
          <li className="project-list">Step 05: Understand The Flesh & Skin</li>
          <li className="project-list">Step 06: Sculpting The Flesh & Skin</li>
          <li className="project-list">
            Step 07: Render 3 Images From Different Angles
          </li>
          <li className="project-list">Step 08: Review and Conclusion</li>
        </ul>
      </div>
      <div className="project-exam">
        <div className="project-exam-title">Example Results</div>
        <div className="project-exam-contain">
          <img
            src="images/learning/244.png"
            alt=""
            className="project-exam-img"
          />
          <img
            src="images/learning/245.png"
            alt=""
            className="project-exam-img"
          />
          <img
            src="images/learning/246.png"
            alt=""
            className="project-exam-img"
          />
          <img
            src="images/learning/247.png"
            alt=""
            className="project-exam-img"
          />
          <img
            src="images/learning/248.png"
            alt=""
            className="project-exam-img"
          />
          <img
            src="images/learning/249.png"
            alt=""
            className="project-exam-img "
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsResources;
