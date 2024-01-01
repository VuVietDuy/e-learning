import React, { useState } from "react";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import "./index.scss";
import Course from "@/components/Course";
import MyPagination from "@/components/Pagination";
import { listCard } from "../listCourse";

function Layout4() {
  const [activeIndex, setActiveIndex] = useState();

  const handleSlideChange2 = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="layout4-container">
      <div className="row">
        <h3 className="title">Inclusive Culinary Course</h3>
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          navigation={true}
          onSlideChange={handleSlideChange2}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide>
              <Course
                src={card.src}
                time={card.time}
                title={card.title}
                instructor={card.instructor}
                star={card.star}
                currentPrice={card.currentPrice}
                defaultPrice={card.defaultPrice}
                viewer={card.viewer}
                key={index}
              ></Course>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 3}
          activeIndex={activeIndex}
          size={"small"}
        ></MyPagination>
      </div>
      <div className="row">
        <h3 className="title">Photography and Video</h3>
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          navigation={true}
          onSlideChange={handleSlideChange2}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide>
              <Course
                src={card.src}
                time={card.time}
                title={card.title}
                instructor={card.instructor}
                star={card.star}
                currentPrice={card.currentPrice}
                defaultPrice={card.defaultPrice}
                viewer={card.viewer}
                key={index}
              ></Course>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 3}
          activeIndex={activeIndex}
          size={"small"}
        ></MyPagination>
      </div>
      <div className="row">
        <h3 className="title">3D Art with Pro Artist</h3>
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          navigation={true}
          onSlideChange={handleSlideChange2}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide>
              <Course
                src={card.src}
                time={card.time}
                title={card.title}
                instructor={card.instructor}
                star={card.star}
                currentPrice={card.currentPrice}
                defaultPrice={card.defaultPrice}
                viewer={card.viewer}
                key={index}
              ></Course>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 3}
          activeIndex={activeIndex}
          size={"small"}
        ></MyPagination>
      </div>
      <div className="row">
        <h3 className="title">Intriguing Audience with VFX Skill</h3>
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          navigation={true}
          onSlideChange={handleSlideChange2}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide>
              <Course
                src={card.src}
                time={card.time}
                title={card.title}
                instructor={card.instructor}
                star={card.star}
                currentPrice={card.currentPrice}
                defaultPrice={card.defaultPrice}
                viewer={card.viewer}
                key={index}
              ></Course>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 3}
          activeIndex={activeIndex}
          size={"small"}
        ></MyPagination>
      </div>
      <div className="bottom">
        <h3 className="title">Your Creative Interests</h3>
        <Button className="button">Film & Video</Button>
        <Button className="button">Graphic Design</Button>
        <Button className="button">3D Art</Button>
      </div>
    </div>
  );
}

export default Layout4;
