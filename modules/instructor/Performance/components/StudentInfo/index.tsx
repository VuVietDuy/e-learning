import React from "react";
import Image from "next/image";
import {
  EnvironmentFilled,
  OrderedListOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";

import "./index.scss";

function StudentInfo(props: any): JSX.Element {
  const {
    src = "/images/instructor/instrutor1.png",
    name = "Michael Duong",
    region = "Americas",
    country = "United States",
    enrolledDate = "Enrolled 21/10/2023",
  } = props;

  return (
    <div className="StudentInfo">
      <div className="body">
        <div className="studentImage">
          <Image src={src} alt="" width={110} height={110}></Image>
        </div>
        <div className="studentName">{name}</div>
        <div className="studentRegion">
          <PlayCircleFilled />
          {region}
        </div>
        <div className="studentCountry">
          <EnvironmentFilled />
          {country}
        </div>
        <div className="studentEnroll">
          <OrderedListOutlined />
          {enrolledDate}
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
