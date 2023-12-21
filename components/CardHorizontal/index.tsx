import React from "react";
import Image from "next/image";

import "./index.scss";
function CardHorizontal(props: any) {
  const { src, lession, time, title, instructor } = props;

  return (
    <div className="card-horizontal">
      <div className="left">
        <Image src={src} alt="" width={244} height={162} />

      </div>
      <div className="right">
        <div className="lession">
          {lession} | <div className="time">25m</div>

        </div>
        <div className="title">{title}</div>
        <div className="name">
          <div className="instructor">{instructor}</div>
          <div className="time">8h 12m left</div>
        </div>


      </div>
    </div>
  );
}

export default CardHorizontal;
