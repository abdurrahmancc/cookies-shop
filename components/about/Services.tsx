import Image from "next/image";
import React from "react";
import cakes from "../../assets/about/cakes.png";
import chocolate from "../../assets/about/chocolate.png";
import cookies from "../../assets/about/cookies.png";

const Services = () => {
  return (
    <div>
      <h2 className="text-[34px] mb-[80px] leading-[40px] font-[700] text-primary text-center ">
        Services We Provide{" "}
      </h2>
      <div className="flex gap-10 md:flex-row flex-col lg:gap-[61px] items-center">
        <div className="flex shrink-0 items-center gap-[29px]">
          <Image
            src={cookies}
            width={460}
            height={300}
            className="lg:w-[460px] md:w-[350px] w-full h-[300px]"
            alt="cookies"
          />
          <div className="flex items-center justify-center flex-col">
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
            <div className="h-[262px] w-[2px] bg-primary"></div>
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
          </div>
        </div>
        <div className="max-w-[610px] shrink-1">
          <h3 className="text-[30px] capitalize pb-5 text-primary leading-[25px] font-[700]">
            Cookies
          </h3>
          <p className="text-lg leading-[30px] text-[rgba(0,0,0,0.7)]">
            A cookie is a baked or cooked snack or dessert that is typically small, flat and sweet.
            It usually contains flour, sugar, egg and some type of oil, fat or butter. It may
            include other ingredients such as oats, chocolate chips, nuts, etc.
          </p>
        </div>
      </div>
      <div className="flex gap-10 md:flex-row flex-col md:gap-0 md:justify-between md:items-center items-center mt-16">
        <div className="max-w-[610px] md:order-1 order-2">
          <h3 className="text-[30px] capitalize pb-5 text-primary leading-[25px] font-[700]">
            Cakes
          </h3>
          <p className="text-lg leading-[30px] text-[rgba(0,0,0,0.7)]">
            Cake is a flour confection made from flour, sugar, and other ingredients, and is usually
            baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a
            wide range of preparations that can be simple or elaborate.
          </p>
        </div>
        <div className="flex shrink-0 md:order-2 order-1  items-center gap-[29px]">
          <div className="flex items-center justify-center flex-col">
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
            <div className="h-[262px] w-[2px] bg-primary"></div>
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
          </div>
          <Image
            src={cakes}
            width={460}
            height={300}
            className="lg:w-[460px] md:w-[350px] w-full h-[300px]"
            alt="cakes"
          />
        </div>
      </div>
      <div className="flex gap-10 md:flex-row flex-col lg:gap-[61px] items-center mt-16">
        <div className="flex shrink-0 items-center gap-[29px]">
          <Image
            src={chocolate}
            width={460}
            height={300}
            className="lg:w-[460px] md:w-[350px] w-full h-[300px]"
            alt="chocolate"
          />
          <div className="flex items-center justify-center flex-col">
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
            <div className="h-[262px] w-[2px] bg-primary"></div>
            <div className="w-[8px] rounded-full bg-primary h-[8px]"></div>
          </div>
        </div>
        <div className="max-w-[610px] shrink-1">
          <h3 className="text-[30px] capitalize pb-5 text-primary leading-[25px] font-[700]">
            chocolate
          </h3>
          <p className="text-lg leading-[30px] text-[rgba(0,0,0,0.7)]">
            Chocolate is a natural product made of these ingredients: Chocolate Liquor, Cocoa
            Butter, Sugar, Lecithin, Vanilla or vanillin and other flavors, milk chocolate, Fruits,
            Nuts and other Add-ins: For specialty chocolates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
