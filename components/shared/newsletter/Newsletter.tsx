import Image from "next/image";
import React from "react";
import mail from "../../../assets/icons/mail.svg";
import subscribe from "../../../assets/subscribe.png";

const Newsletter = () => {
  return (
    <div className="pb-[91px]">
      <div className="flex justify-between bg-[#ffffff]">
        <div className="pl-10 pt-12 ">
          <h4 className="text-secondary pb-10 lg:text-[30px] md:text-2xl text-xl font-[500] lg:leading-10 max-w-[610px] ">
            Stay Home & Get Your Favorite Items from our Cookies Bakery
          </h4>
          <div className="form-control max-w-[672px] relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" lg:text-[25px]  sm:text-xl leading-[28px] lg:h-[76px] h-[58px] sm:h-[68px] w-full rounded-[53px] lg:pl-24 sm:pl-16 pl-14 focus:outline-none text-[#ffffff] placeholder:text-[#ffffff] border border-[#944A07] bg-[#944A07]"
            />
            <Image
              className="absolute w-[24px] sm:w-[32px] lg:w-[38px] lg:left-8 left-5 top-5"
              src={mail}
              alt="mail"
            />
            <button className="leading-[36.77px] absolute right-[2px] top-[2px] text-lg sm:text-[24px] lg:text-[32px] font-[500] px-4 sm:px-7 lg:px-[46px] lg:h-[72px] h-[54px] sm:h-16 rounded-[45.5px] bg-[#ffffff] text-[#944A07]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-8 lg:pr-[29px] ">
          <Image
            src={subscribe}
            className="lg::w-[306px] lg:h-[278px] sm:w-[280px] sm:h-[220px] w-[220px] h-[180px]"
            alt="subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
