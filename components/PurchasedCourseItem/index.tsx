import React from "react";
import { Rate, Typography } from "antd";
import Image from "next/image";

import "./index.scss";

const { Paragraph } = Typography;

function PurchasedCourseItem(props: any) {
  const { src, title, instructor, star, parchasedDate } = props;

  return (
    <div className="purchased-course">
      <div className="image">
        <Image src={src} alt="" width={170} height={140} />
      </div>
      <div className="right">
        <Paragraph ellipsis={{ rows: 2 }} className="title">
          {title}
        </Paragraph>
        <div className="instructor">{instructor}</div>
        <div className="star">
          <Rate value={star}></Rate>
        </div>
        <div className="parchased_date">
          <span>
            <b>Parchased Date</b>
            {parchasedDate}
          </span>
          <span className="price">500$</span>
        </div>
      </div>
    </div>
  );
}

export default PurchasedCourseItem;
