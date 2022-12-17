import React from "react";
import banner from "../../assets/banner/banner-2.png";

const Banner2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner.src})` }}
      className="xl:h-[720px] lg:h-[462px] md:h-[380px] sm:h-[300px] h-[260px] md:bg-center xl:bg-right-top bg-cover bg-right bg-no-repeat "
    ></div>
  );
};

export default Banner2;
