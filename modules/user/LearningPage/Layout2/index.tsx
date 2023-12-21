"use client";
import React, { useState } from "react";
import AboutOption from "./AboutOption";
import ProjectsResources from "./ProjectsResources";
import Discussions from "./Discussions";
import Review from "./Review";
import "./index.scss";

function Layout2() {
  const [activeTab, setActiveTab] = useState("About");

  const navItems = [
    {
      activeTab: "About",
      label: "About",
    },
    {
      activeTab: "ProjectsResources",
      label: "Projects & Resources",
    },
    {
      activeTab: "Discussions",
      label: "Discussions",
    },
    {
      activeTab: "Review",
      label: "Review",
    },
  ];

  return (
    <div className="layout2-learningpage">
      <div className="learning-nav">
        <div className="learning-nav-contain">
          {navItems.map((item, i) => (
            <div
              className={`learning-nav-btn d_flex justify_content_center align_item_center ${
                activeTab === item.activeTab ? "active" : ""
              }`}
              onClick={() => setActiveTab(item.activeTab)}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={activeTab === "About" ? "d_block" : "d_none"}>
        <AboutOption></AboutOption>
      </div>
      <div className={activeTab === "ProjectsResources" ? "d_block" : "d_none"}>
        <ProjectsResources></ProjectsResources>
      </div>
      <div className={activeTab === "Discussions" ? "d_block" : "d_none"}>
        <Discussions></Discussions>
      </div>
      <div className={activeTab === "Review" ? "d_block" : "d_none"}>
        <Review></Review>
      </div>
    </div>
  );
}

export default Layout2;
