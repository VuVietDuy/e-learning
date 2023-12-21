import {
  DeleteOutlined,
  HighlightOutlined,
  PictureOutlined,
  TableOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import React from "react";

import "./index.scss";

export default function Lession(props: any): JSX.Element {
  const { openConfirmModal } = props;
  return (
    <div className="lession">
      <div>
        <Image
          src={"/images/instructor/course.png"}
          alt=""
          width={168}
          height={123}
        ></Image>
      </div>
      <div className="info">
        <div className="info_1">
          <div className="">
            <span className="infor_1-item me_2">1</span>
            <span className="infor_1-item">
              <HighlightOutlined />
            </span>
          </div>
          <div>
            <span className="infor_1-item">
              <PictureOutlined />
            </span>
            <span className="infor_1-item ms_2">
              <TableOutlined />
            </span>
            <span
              className="infor_1-item ms_2"
              onClick={() => openConfirmModal()}
            >
              <DeleteOutlined />
            </span>
          </div>
        </div>
        <div className="info_2">
          <p>Video Processing: 001.mp4</p>
        </div>
      </div>
    </div>
  );
}
