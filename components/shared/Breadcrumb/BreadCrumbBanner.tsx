import Image from "next/image";
import React from "react";
import img1 from "../../../assets/bread/img-1.png";
import img2 from "../../../assets/bread/img-2.png";
import img3 from "../../../assets/bread/img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";
import { BreadcrumbModel } from "../../../types/types";

interface breadModel {
  breadcrumbData: BreadcrumbModel[];
}

const BreadCrumbBanner = ({ breadcrumbData }: breadModel) => {
  let isLast = breadcrumbData.length - 1;

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        id="breadCrumb-swiper-slider"
        pagination={pagination}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={img1}
              className="w-full max-h-[649px] rounded-none z-0 h-auto"
              alt="banner"
            />
            <div className="absolute h-full top-0 w-full flex items-center">
              <div className="h-[120px] w-full bg-[rgba(240,240,240,0.8)]">
                <ul className="flex items-center justify-center h-full text-[16px] leading-[18.38px] text-primary">
                  {breadcrumbData.map((bread: any, index: any) => {
                    return (
                      <li key={index} className={"flex capitalize text-[#643001] items-center"}>
                        {index === isLast ? (
                          <p className="text-[43px]">{bread?.label}</p>
                        ) : (
                          <div className="flex items-center">
                            <Link href={`${bread?.value}`} className="text-[43px] font-bold ">
                              {bread?.label}
                            </Link>
                            <HiOutlineChevronRight className="text-[43px]" />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={img2}
              className="w-full max-h-[649px] rounded-none z-0 h-auto"
              alt="banner"
            />
            <div className="absolute h-full top-0 w-full flex items-center">
              <div className="h-[120px] w-full bg-[rgba(240,240,240,0.8)]">
                <ul className="flex items-center justify-center h-full text-[16px] leading-[18.38px] text-primary">
                  {breadcrumbData.map((bread: any, index: any) => {
                    return (
                      <li key={index} className={"flex capitalize text-[#643001] items-center"}>
                        {index === isLast ? (
                          <p className="text-[43px]">{bread?.label}</p>
                        ) : (
                          <div className="flex items-center">
                            <Link href={`${bread?.value}`} className="text-[43px] font-bold ">
                              {bread?.label}
                            </Link>
                            <HiOutlineChevronRight className="text-[43px]" />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={img3}
              className="w-full max-h-[649px] rounded-none z-0 h-auto"
              alt="banner"
            />
            <div className="absolute h-full top-0 w-full flex items-center">
              <div className="h-[120px] w-full bg-[rgba(240,240,240,0.8)]">
                <ul className="flex items-center justify-center h-full text-[16px] leading-[18.38px] text-primary">
                  {breadcrumbData.map((bread: any, index: any) => {
                    return (
                      <li key={index} className={"flex capitalize text-[#643001] items-center"}>
                        {index === isLast ? (
                          <p className="text-[43px]">{bread?.label}</p>
                        ) : (
                          <div className="flex items-center">
                            <Link href={`${bread?.value}`} className="text-[43px] font-bold ">
                              {bread?.label}
                            </Link>
                            <HiOutlineChevronRight className="text-[43px]" />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BreadCrumbBanner;
