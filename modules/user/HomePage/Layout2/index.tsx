import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import "./index.scss";

const Layout2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const listImg = [
    {
      src: "/images/layout2-1.jpg",
    },
    {
      src: "/images/layout2.png",
    },
    {
      src: "/images/layout2-1.jpg",
    },
    {
      src: "/images/layout2.png",
    },
  ];
  return (
    <div className="homepage-slide">
      <div className="homepage-cover"></div>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, A11y]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          
        }}
        onSlideChange={handleSlideChange}
        initialSlide={0}
        className="swiper-layout2"
      >
        {listImg.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-content">
        <p className="text1">Original.</p>
        <p className="text2">Transform your Refernce Photos into Watercolor Paintings</p>
        <p className="text3">Use reference photo to build your own portfolio painting style with artist Jacob Chanderman.</p>
        <button className="join">Join our Community</button>
      </div>
    </div>
  );
};

export default Layout2;
