"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import "./index.scss";
import { listCard } from "../listCourse";
import CardHorizontal from "@/components/CardHorizontal";
import Card from "@/components/Card";
import MyPagination from "@/components/Pagination";

const Layout1 = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const handleSlideChange1 = (swiper: any) => {
    setActiveIndex1(swiper.activeIndex);
  };

  const handleSlideChange2 = (swiper: any) => {
    setActiveIndex2(swiper.activeIndex);
  };

  return (
    <div className="layout1-container">
      <p className="title">
        Welcome back Mickey Mouse, ready for your next lesson?
      </p>
      <div className="top">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, A11y]}
          slidesPerView={2}
          spaceBetween={20}
          onSlideChange={handleSlideChange1}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide key={index}>
              <CardHorizontal
                src="/images/card.png"
                lession="Lession 1"
                time="1h20m"
                title="Rigid bode"
                instructor="Auther"
              ></CardHorizontal>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 1}
          activeIndex={activeIndex1}
        ></MyPagination>
      </div>
      <div className="bottom">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={true}
          navigation={true}
          onSlideChange={handleSlideChange2}
          className="swiper-layout1"
        >
          {listCard.map((card, index) => (
            <SwiperSlide
              key={index}
            >
              <Card 
                src={card.src}
                time={card.time}
                title={card.title}
                instructor={card.instructor}
                star={card.star}
                currentPrice={card.currentPrice}
                defaultPrice={card.defaultPrice}
                viewer={card.viewer}
              ></Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <MyPagination
          numberOfSlide={listCard.length - 3}
          activeIndex={activeIndex2}
        ></MyPagination>
      </div>
    </div>
  );
};

export default Layout1;
