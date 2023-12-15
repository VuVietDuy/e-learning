"use client";
import React, { useState } from "react";
import "./index.scss";
import { Avatar, Rate, Typography } from "antd";
const { Paragraph } = Typography;

function Comment(props: any) {
  const { name, time, content, star } = props;
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div className="course__2-item">
      <div className="course__2-item-name">
        <div className="course__2-item-name-img">
          <Avatar
            style={{
              width: "64px",
              height: "64px",
            }}
          ></Avatar>
        </div>
        <div className="item-name">
          <div className="item-name-1">{name}</div>
          <div className="item-name-rate">
            <Rate value={star}></Rate>
            <p className="time">{time}</p>
          </div>
        </div>
      </div>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 4, expandable: true, symbol: "more" } : false
        }
        className="content"
      >
        {content}
      </Paragraph>
      {/* <a href="" className="course__2-item-more">Show more</a> */}
    </div>
  );
}

export default Comment;
