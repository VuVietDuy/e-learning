import React from "react";
import { Rate } from "antd";
import Image from "next/image";

import "./index.scss";

export default function ShopCardItem(): JSX.Element {
  return (
    <div className="course-3-body">
      <div className="course-3-img">
        <Image
          src={"/images/user/shopcard1.png"}
          alt=""
          width={170}
          height={140}
        ></Image>
      </div>
      <div className="course-3-des">
        <div className="course-3-des-1">
          Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta
          Human
        </div>
        <div className="course-3-des-2-contain">
          <div className="course-3-des-2-1">
            <div className="ginger ">Ginger Bear</div>
            <div className="des-2-2">
              <Rate disabled defaultValue={4}></Rate>
            </div>
            <div className="des-2-3">
              <div className="">1d 5h 28m</div>
              <div className="dot"></div>
              <div className=" ">1,313,581 Students</div>
            </div>
            <div className="des-2-4">
              <div className="des-2-4-1">Purchased Date</div>
              <div className="">02/04/2023</div>
            </div>
          </div>
          <div className="course-3-des-2-2">
            <div className="course-3-des-2-2-1">23% off</div>
            <div className="course-3-des-2-2-2">820$</div>
            <div className="course-3-des-2-2-3">500$</div>
          </div>
        </div>
      </div>
    </div>
  );
}
