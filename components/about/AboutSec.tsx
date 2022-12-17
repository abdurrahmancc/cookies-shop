import Image from "next/image";
import React from "react";
import img1 from "../../assets/about/about-1.png";

const AboutSec = () => {
  return (
    <>
      <div>
        <h2 className="lg:text-[48px] text-center text-[32px] leading-[44px] lg::leading-[62px] font-[700] text-[#7B3D11]">
          About Cookies Shop
        </h2>
        <p className="lg:text-[20px] text-lg  xl:mt-8 mt-5 text-[rgba(0,0,0,0.7)] max-w-[1051px] text-center mx-auto  lg:leading-[30px] font-[500]">
          Cookies Bakery are processed from fresh locally sourced ingredients, processed in plants
          ensuring international quality.It have been the number one bakery product in the country.{" "}
        </p>
      </div>
      <div className="mt-[100px] items-center flex md:flex-row flex-col relative  w-full">
        <Image
          width={716}
          height={479}
          src={img1}
          className="lg:max-w-[716px] md:max-w-[550px] md:max-h-[420px] lg:max-h-[479px] w-full h-full"
          alt="cookies banner"
        />
        <div className="px-[50px] md:max-w-[500px] lg:max-w-[623px]  md:right-0 md:max-h-[295px] md:absolute bg-[#7B3D11] py-[41.5px]">
          <div className=" my-auto">
            <p className="lg:text-[20px] text-lg lg:leading-[30px] tracking-[1.2px] text-[#FFFFFF] text-[]">
              Cake Shop formed in 2022 when bakers from all Denver residence halls were consolidated
              into a single group.
            </p>
            <p className="text-[20px] lg:mt-8 mt-5 text-lg lg:leading-[30px] tracking-[1.2px] text-[#FFFFFF] text-[]">
              We proudly produce hand-decorated products, made-from-scratch Chocolates, cakes, and
              cookies, which are served in military campus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
