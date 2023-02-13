import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg-img/newsletter.png";
import mail from "../../../assets/icons/mail.svg";

const Newsletter1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-no-repeat bg-cover box-border bg-[rgba(255,161,17,0.3)] w-full h-[287px]"}
    >
      <div className="max-w-[1200px] lg:mx-auto mx-5 h-full">
        <div className="flex h-full justify-between items-center">
          <div className="flex max-w-[592px] items-center gap-7">
            <Image src={mail} width={105} height={87} alt="mail" />
            <h4 className="text-secondary lg:text-[30px] md:text-2xl text-xl font-[500] lg:leading-10 max-w-[610px] ">
              Stay Home & Get Your Favorite Items from our Cookies Shop
            </h4>
          </div>
          <div className="form-control max-h-[69px] w-full max-w-[529.32px] relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" lg:text-[20px]  sm:text-xl leading-[28px] lg:h-[69px] h-[58px] sm:h-[68px] w-full rounded-[53px] pl-7 focus:outline-none text-[#944A07] placeholder:text-[#944A07] border border-[#ffffff] bg-[#ffffff]"
            />

            <button className="leading-[34.27px] absolute right-[2px] top-[1.2px] text-lg sm:text-[24px] lg:text-[27px] font-[500] px-4 sm:px-7 lg:px-[46px] lg:h-[66px] border-none h-[54px] sm:h-16 rounded-[45.5px] bg-[#944A07] text-[#ffffff]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter1;
