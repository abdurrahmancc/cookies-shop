import React from "react";
import bg from "../../../assets/bg-img/specialOrder.png";

const SpecialOrder = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="h-[609px] bg-cover bg-center bg-no-repeat"
    >
      <div className="h-full flex items-center w-full">
        <div className="bg-[rgba(100,48,1,0.7)] pt-5 pb-10 w-full text-center">
          <h2 className="lg:text-[48px] sm:text-[32px] sm:leading-10 text-[24px] leading-8 text-center text-[#ffffff] font-[700] lg:leading-[55.15px]">
            Special Orders, Cakes, Chocklets & Cookies
          </h2>
          <p
            style={{ textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
            className="lg:text-[30px] sm:text-[20px] sm:leading-7 text-lg mx-auto lg:max-w-[810px] md:max-w-[600px] mt-[22px] mb-8 text-center lg:leading-[36px] text-[#ffffff]"
          >
            We are delighted to fulfill orders for cookies, chocklets and cakes for your
            celebrations and special occasions.{" "}
          </p>
          <button
            style={{ filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))` }}
            className="text-secondary py-3 rounded-[4px] px-[72px] bg-[#ffffff] w-[250px]   text-[20px] leading-[22px] font-[500] "
          >
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOrder;
