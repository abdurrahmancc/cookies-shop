import Image from "next/image";
import React from "react";
import img from "../../assets/about/bg.png";
import cookies from "../../assets/about/cookies-2.png";
import cakes from "../../assets/about/cakes-2.png";
import chocolate from "../../assets/about/chocolate-2.png";

const Categories = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img.src})` }}
      className="bg-cover bg-no-repeat h-[530px] w-full"
    >
      <div className="max-w-[1200px] h-full lg:mx-auto mx-5">
        <div className="flex max-w-[940px] items-center h-full mx-auto justify-between">
          <div className="max-w-[215px]">
            <Image
              src={cookies}
              width={215}
              height={204}
              className="md:w-[215px] md:h-[204px] w-[120px] h-[118px] sm:w-[150px] sm:h-[148px]"
              alt="cookies"
            />
            <p className="md:text-[25px] text-lg capitalize mt-2 md:mt-5 text-center text-[#FFFFFF] font-[700] leading-[30px] ">
              200 Cookies
            </p>
          </div>
          <div className="max-w-[215px]">
            <Image
              src={cakes}
              width={215}
              height={204}
              className="md:w-[215px] md:h-[204px] w-[120px] h-[118px] sm:w-[150px] sm:h-[148px]"
              alt="cakes"
            />
            <p className="md:text-[25px] text-lg capitalize mt-2 md:mt-5 text-center text-[#FFFFFF] font-[700] leading-[30px] ">
              178 Cakes
            </p>
          </div>
          <div className="max-w-[215px]">
            <Image
              src={chocolate}
              width={215}
              height={204}
              className="md:w-[215px] md:h-[204px] w-[120px] h-[118px] sm:w-[150px] sm:h-[148px]"
              alt="chocolate"
            />
            <p className="md:text-[25px] text-lg capitalize mt-2 md:mt-5 text-center text-[#FFFFFF] font-[700] leading-[30px] ">
              200 chocolate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
