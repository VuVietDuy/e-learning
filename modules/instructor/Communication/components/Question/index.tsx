import React from "react";
import "./index.scss";

function Question(props: any) {
  const {
    lesson = "Question in Zbrush for Character Artist",
    name = "Michael Lee",
    date = "8 months ago",
    questionContent = "How to custom my own Prefer Shortcut? I want to be efficient in using keyboard.\nAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  } = props;

  return (
    <div className="wholeQuestion">
      <div className="Question">
        <div className="Top">
          <div className="lessonImg"></div>
          {lesson}
        </div>
        <div className="Bottom">
          <div className="User">
            <div className="userImg"></div>
            <div className="userName">{name}</div>
            {date}
          </div>
          {questionContent}
        </div>
      </div>

      <div className="Icon">
        <img src="/icon/leftArrow.png" alt="" className="icon" />
        <img src="/icon/trashcan.png" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Question;
