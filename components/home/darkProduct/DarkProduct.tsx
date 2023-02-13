import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import img from "../../../assets/product-img/dark-chocolate.png";

const DarkProduct = () => {
  const { push } = useRouter();
  return (
    <div className="flex max-w-[584px] lg:max-w-full flex-col mx-auto lg:flex-row mb-8 bg-secondary">
      <Image src={img} className={"xl:w-[710px] xl:h-[545px] lg:w-[600px]"} alt="dark-chocolate" />
      <div className="lg:mt-16 mt-12  lg:pl-8 lg:pr-[15px] px-10 lg:w-[490px] text-center mb-8 lg:mb-0">
        <h3 className="xl:text-[32px] xl:leading-9 lg:text-[28px] lg:leading-8 md:text-xl text-xl sm:text-[24px] text-start md:leading-7  text-[#ffffff] font-bold">
          DARK CHOCOLATE COOKIES
        </h3>
        <p className="text-[#ffffff] text-start xl:pt-4 lg:pt-2 mt-2 lg:text-lg xl:text-[20px] xl:leading-[22px] font-[500]">
          THE COOKIE ON EVERYONE’S LIST
        </p>
        <p className="my-8  xl:mt-[64px] xl:mb-[60px] lg:my-[48px] text-start text-[#ffffff]">
          This season, and we’re not holding back. The limited-edition Dark Chocolate Cookies is our
          most indulgent treat yet — a dark and rich chocolate dough peppered with gooey chocolate
          and melty peppermint chips.
        </p>
        <button
          onClick={() => push("/shop")}
          style={{ filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))` }}
          className="text-secondary py-3 rounded-[4px] px-[72px] bg-[#ffffff]  text-[20px] leading-[22px] font-[500] "
        >
          order now
        </button>
      </div>
    </div>
  );
};

export default DarkProduct;
