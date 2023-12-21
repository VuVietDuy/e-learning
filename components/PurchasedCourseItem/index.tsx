import React from "react";
import "./index.scss";

export default function CoursePurchased(props: any): JSX.Element {
  const { src, title, instructor, time, amount } = props;
  return (
    <div className="purchase_course">
      <div className="course__3 mt24">
        <div className="course-3-body">
          <div className="course-3-img">
            <img src={src} alt="" />
            <div className="course-img-box"></div>
          </div>
          <div className="course-3-des">
            <div className="course-3-des-1">{title}</div>
            <div className="course-3-des-2-1">
              <div className=" fz-20">{instructor}</div>

              <div className="des-2-3 d_flex des-2-3-margin">
                <div className=" fz-20 ml5">{time}</div>
                <div className="dot"></div>
                <div className=" fz-20">{amount} Students</div>
              </div>
              <div>
                <b>Purchased date</b> 02/08/2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
