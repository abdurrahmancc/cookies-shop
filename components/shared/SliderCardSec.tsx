import React, { useState } from "react";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../shop/ProductCard";
import { Product } from "../../types/types";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Products {
  products: Product[];
}

const SliderCardSec = ({ products }: Products) => {
  const [isNavigationHidden, setIsNavigationHidden] = useState<boolean>(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsNavigationHidden(true)}
        onMouseLeave={() => setIsNavigationHidden(false)}
        className="relative"
      >
        <div className={`absolute top-[39%] z-50 w-full `}>
          <div className={`flex justify-between`}>
            <div className={`${isNavigationHidden ? "block" : "hidden"}`}>
              <div
                className={`w-[39px] h-[73px] bg-primary flex justify-center items-center cursor-pointer custom_prev`}
              >
                <TfiAngleLeft className="text-[#ffffff] text-xl " />
              </div>
            </div>
            <div className={`${isNavigationHidden ? "block" : "hidden"}`}>
              <div
                className={`w-[39px] h-[73px] bg-primary flex justify-center items-center cursor-pointer custom_next`}
              >
                <TfiAngleRight className="text-[#ffffff] text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-[592px] md:max-w-[896px] lg:max-w-[1200px] mx-auto">
          <Swiper
            spaceBetween={16}
            slidesPerView={4}
            navigation={{
              nextEl: ".custom_next",
              prevEl: ".custom_prev",
            }}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1650: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            {products?.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderCardSec;
