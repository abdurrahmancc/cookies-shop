import React from "react";
import banner from "../../../assets/banner/banner-1.png";

const Banner1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner.src})` }}
      className="xl:h-[720px] lg:h-[462px] md:h-[380px] sm:h-[300px] h-[260px] md:bg-center xl:bg-right-top bg-cover bg-right bg-no-repeat "
    >
      <div className="max-w-[1200px] h-full  lg:mx-auto mx-5">
        <div className="flex sm:ml-10 md:ml-20  xl:ml-0 flex-col justify-center h-full">
          <h2 className="xl:text-[44px] md:text-3xl sm:text-2xl text-xl leading-[62px] lg:text-[36px] text-[#ffffff] font-[Candal] font-[400]">
            Enjoy Your Time
          </h2>
          <p className="xl:text-[32px] text-lg md:text-[24px] md:mt-2 xl:mt-[18px] text-[#ffffff] leading-10 font-[CantataOne] ">
            Chocolate Burn Cookies
          </p>
          <button className="xl:text-2xl text-xl xl:mt-20 md:mt-10 mt-5 text-secondary max-w-[180px] xl:max-w-[238px] py-3 xl:px-[50px] px-8 rounded-[46px] bg-[#ffffff] font-[CantataOne]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
