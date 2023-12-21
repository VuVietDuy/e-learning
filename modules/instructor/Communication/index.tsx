"use client";
import React from "react";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import "./style.scss";
import Question from "./components/Question";

export function Communication(): JSX.Element {
  const [cateCurr, setCategory] = useState("Newest");
  const [isShown, setIsShown] = useState(false);

  const handleClick1 = () => {
    setIsShown((current) => !current);
  };

  function allQuestion() {
    return (
      <div>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </div>
    );
  }

  return (
    <div className="Communication_deleteQuestion">
      <div className="deleteQuestion" id="DeleteQuestionBox">
        <div className="DeleteBox">
          <img src="/icon/close.png" alt="" className="closeBtn" />
          <div className="Title">Are you sure you want to delete question?</div>
          <div className="allButton">
            <button className="cancelBtn">CANCEL</button>
            <button className="deleteBtn">YES, DELETE IT!</button>
          </div>
        </div>
      </div>
      <div className="Communication">
        <div className="Header">
          <div className="Left">
            <div className="Title">Communication</div>
            <div className="question">
              Question - Answer between Student and Teacher
            </div>
            <div className="AllBox">
              <div className="chooseBox">
                <input type="checkbox" className="box" />
                <span className="Label">Unread (6)</span>
              </div>
              <div className="chooseBox">
                <input type="checkbox" className="box" />
                <span className="Label">No anwsers (6)</span>
              </div>
              <div className="chooseBox">
                <input type="checkbox" className="box" />
                <span className="Label">No teacher answers (6)</span>
              </div>
            </div>
          </div>
          <div className="Right">
            <button className="chooseCat" onClick={handleClick1}>
              <span className="curCategory">{cateCurr}</span>
              <DownOutlined />
            </button>
            {isShown && (
              <div id="myDropdown" className="dropdown-content">
                <a
                  href="#"
                  onClick={() => {
                    setCategory("Newest");
                    setIsShown(false);
                  }}
                >
                  Newest
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setCategory("Oldest");
                    setIsShown(false);
                  }}
                >
                  Oldest
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setCategory("Most popular");
                    setIsShown(false);
                  }}
                >
                  Most popular
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="Body">{allQuestion()}</div>
      </div>
    </div>
  );
}
