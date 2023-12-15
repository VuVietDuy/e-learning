import React from "react";
// import { NavLink, Route, Routes } from "react-router-dom";
import AboutOption from "./AboutOption";
import ProjectsResources from "./ProjectsResources";
import Discussions from "./Discussions";
import Review from "./Review";
import "./index.scss";

function Layout2() {
  return (
    <div className="layout2-learningpage">
      <div className="learning-nav">
        <div className="learning-nav-contain">
          {/* <NavLink to={"about"}><div className="learning-nav-btn">About</div></NavLink>
          <NavLink to={"projects_resources"}><div className="learning-nav-btn">Projects & Resources</div></NavLink>
          <NavLink to={"discussions"}><div className="learning-nav-btn">Discussions</div></NavLink>
          <NavLink to={"review"}><div className="learning-nav-btn">Review</div></NavLink> */}
        </div>
      </div>
      {/* <Routes>
        <Route path="about" element={<AboutOption></AboutOption>}></Route>
        <Route
          path="projects_resources"
          element={<ProjectsResources></ProjectsResources>}
        ></Route>
        <Route path="discussions" element={<Discussions></Discussions>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
      </Routes> */}
    </div>
  );
}

export default Layout2;
