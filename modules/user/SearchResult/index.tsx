"use client";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import "./index.scss";
import Course from "@/components/Course";
import { Fillter } from "./components/Fillter";

export function SearchResult(): JSX.Element {
  const defCourse = (
    <Course
      src="/images/card.png"
      student="10,288 students"
      time="10h20"
      title="Creative Cooking: Simple Sauces to Elevate Every Meal"
      instructor="Jacob Andree"
      currentPrice="40$"
      defaultPrice="60$"
    ></Course>
  );

  const [sortCurr, setSortType] = useState("Relevence");
  const [isShown, setIsShown] = useState(false);
  const [isFillterShown, setFillterShown] = useState(false);
  const handleClick1 = () => {
    setIsShown((current) => !current);
  };
  const handleClick2 = () => {
    setFillterShown((current) => !current);
  };
  const repeatCourse = Array.from({ length: 56 }, (_, index) => {
    return defCourse;
  });
  return (
    <div
      className="SearchResult"
      onClick={() => {
        console.log("HELLO");
      }}
    >
      <div className="Top">
        <h2 className="resultTopic">Maya 2023 for Beginners</h2>
        <span className="resultNum">1,320 Results</span>
        <div className="fillter-sortby">
          <button className="fillter-button" onClick={handleClick2}>
            <img src="/images/fillterIcon.png" alt="" />
            Fillters
          </button>

          <div className="Dropdown-Sortby">
            <button className="Sortby" onClick={handleClick1}>
              <span className="sort">Sort by:&nbsp;</span>
              <span className="typeofsort">{sortCurr}</span>
              <DownOutlined />
            </button>
            {isShown && (
              <div id="myDropdown" className="dropdown-content">
                <a
                  href="#"
                  onClick={() => {
                    setSortType("Relevence");
                    setIsShown(false);
                  }}
                >
                  Relevence
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setSortType("Number of Students");
                    setIsShown(false);
                  }}
                >
                  Number of Students
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setSortType("Newest Classes");
                    setIsShown(false);
                  }}
                >
                  Newest Classes
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="AllCourseFound">
        {isFillterShown && <Fillter></Fillter>}
        <div className="resultCourse">{repeatCourse}</div>
      </div>
    </div>
  );
}
