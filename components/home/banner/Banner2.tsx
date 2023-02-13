import Image from "next/image";
import React from "react";
import banner from "../../../assets/banner/banner-1.1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner2 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <>
      <Swiper id="top-swiper-slider-2" pagination={pagination} loop={true} className="mySwiper">
        <SwiperSlide>
          <Image src={banner} className="w-full rounded-none z-0 h-auto" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} className="w-full z-0 h-auto" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner} className="w-full z-0 h-auto" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner2;
