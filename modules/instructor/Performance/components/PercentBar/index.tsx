import React, { useEffect, useRef } from "react";
import "./index.scss";

export default function PercentBar(props: any) {
  const { percent } = props;
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bar.current) {
      bar.current.style.width = `${percent * 5.12}px`
    }
  }, [])

  return (
    <div className="greyBar">
      <div ref={bar} id="blueBar1" className="blueBar"></div>
    </div>
  );
}
